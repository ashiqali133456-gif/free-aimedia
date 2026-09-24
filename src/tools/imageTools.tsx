import React, { useState, useRef, useEffect } from 'react';
import { Upload, Download, RotateCw, RefreshCw, Check, AlertCircle, ArrowRight, Sliders, Scissors, Maximize, Eye } from 'lucide-react';
import { ToolDefinition } from '../types';

interface ImageToolsProps {
  tool: ToolDefinition;
}

export const ImageTools: React.FC<ImageToolsProps> = ({ tool }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [originalMeta, setOriginalMeta] = useState<{ width: number; height: number; size: number }>({ width: 0, height: 0, size: 0 });
  const [processedSize, setProcessedSize] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Specific tool parameters
  const [quality, setQuality] = useState<number>(80);
  const [targetWidth, setTargetWidth] = useState<number>(800);
  const [targetHeight, setTargetHeight] = useState<number>(600);
  const [maintainAspect, setMaintainAspect] = useState<boolean>(true);
  const [targetFormat, setTargetFormat] = useState<string>('image/jpeg');
  const [pngBgColor, setPngBgColor] = useState<string>('#ffffff');
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [brightness, setBrightness] = useState<number>(0); // -100 to 100
  const [contrast, setContrast] = useState<number>(0); // -100 to 100
  const [cropPreset, setCropPreset] = useState<'free' | '1:1' | '16:9' | '4:3'>('1:1');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetAll = () => {
    setSelectedFile(null);
    setImageSrc(null);
    setProcessedSrc(null);
    setProcessedSize(0);
    setError(null);
    setSuccessMessage(null);
    setRotationAngle(0);
    setFlipH(false);
    setFlipV(false);
    setBrightness(0);
    setContrast(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setSuccessMessage(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Selected file is not a supported image. Please upload a JPG, PNG, WebP, or GIF.');
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      setError('Image exceeds 25MB limit. Please select a smaller file for optimal browser performance.');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      const src = event.target?.result as string;
      setImageSrc(src);

      const img = new Image();
      img.onload = () => {
        setOriginalMeta({
          width: img.naturalWidth,
          height: img.naturalHeight,
          size: file.size,
        });
        setTargetWidth(img.naturalWidth);
        setTargetHeight(img.naturalHeight);
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  // Process image using Canvas
  const processImage = async () => {
    if (!imageSrc) {
      setError('Please select an image first.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imageSrc;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error('Failed to load image into canvas.'));
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not obtain 2D canvas context.');

      let finalWidth = originalMeta.width;
      let finalHeight = originalMeta.height;
      let outputMime = 'image/jpeg';
      let outputQuality = quality / 100;

      // Handle individual tool behaviors
      switch (tool.slug) {
        case 'image-compressor': {
          outputMime = selectedFile?.type === 'image/png' ? 'image/png' : 'image/jpeg';
          if (outputMime === 'image/png' && quality < 90) {
            // PNG canvas toBlob doesn't support quality parameter in standard browsers, so convert to JPEG/WebP or compress via indexed palette
            outputMime = 'image/jpeg';
          }
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.drawImage(img, 0, 0);
          break;
        }

        case 'image-resizer': {
          finalWidth = Math.max(1, Math.round(targetWidth));
          finalHeight = Math.max(1, Math.round(targetHeight));
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, finalWidth, finalHeight);
          outputMime = selectedFile?.type || 'image/jpeg';
          break;
        }

        case 'jpg-to-png': {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.drawImage(img, 0, 0);
          outputMime = 'image/png';
          break;
        }

        case 'png-to-jpg': {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.fillStyle = pngBgColor;
          ctx.fillRect(0, 0, finalWidth, finalHeight);
          ctx.drawImage(img, 0, 0);
          outputMime = 'image/jpeg';
          break;
        }

        case 'webp-converter': {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.drawImage(img, 0, 0);
          outputMime = 'image/webp';
          break;
        }

        case 'image-cropper': {
          let cropW = finalWidth;
          let cropH = finalHeight;
          if (cropPreset === '1:1') {
            const side = Math.min(finalWidth, finalHeight);
            cropW = side;
            cropH = side;
          } else if (cropPreset === '16:9') {
            if (finalWidth / finalHeight > 16 / 9) {
              cropH = finalHeight;
              cropW = Math.round(finalHeight * (16 / 9));
            } else {
              cropW = finalWidth;
              cropH = Math.round(finalWidth * (9 / 16));
            }
          } else if (cropPreset === '4:3') {
            if (finalWidth / finalHeight > 4 / 3) {
              cropH = finalHeight;
              cropW = Math.round(finalHeight * (4 / 3));
            } else {
              cropW = finalWidth;
              cropH = Math.round(finalWidth * (3 / 4));
            }
          }
          const startX = Math.round((finalWidth - cropW) / 2);
          const startY = Math.round((finalHeight - cropH) / 2);

          canvas.width = cropW;
          canvas.height = cropH;
          ctx.drawImage(img, startX, startY, cropW, cropH, 0, 0, cropW, cropH);
          outputMime = selectedFile?.type || 'image/jpeg';
          break;
        }

        case 'image-rotator': {
          const rad = (rotationAngle * Math.PI) / 180;
          const isSwap = rotationAngle === 90 || rotationAngle === 270;
          canvas.width = isSwap ? finalHeight : finalWidth;
          canvas.height = isSwap ? finalWidth : finalHeight;
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate(rad);
          ctx.drawImage(img, -finalWidth / 2, -finalHeight / 2);
          outputMime = selectedFile?.type || 'image/jpeg';
          break;
        }

        case 'image-flipper': {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.translate(flipH ? finalWidth : 0, flipV ? finalHeight : 0);
          ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
          ctx.drawImage(img, 0, 0);
          outputMime = selectedFile?.type || 'image/jpeg';
          break;
        }

        case 'image-grayscale': {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.drawImage(img, 0, 0);
          const imgData = ctx.getImageData(0, 0, finalWidth, finalHeight);
          const data = imgData.data;
          for (let i = 0; i < data.length; i += 4) {
            // ITU-R BT.601 luminance
            const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
            data[i] = gray;
            data[i + 1] = gray;
            data[i + 2] = gray;
          }
          ctx.putImageData(imgData, 0, 0);
          outputMime = selectedFile?.type || 'image/jpeg';
          break;
        }

        case 'image-brightness-adjuster':
        case 'image-contrast-adjuster': {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.drawImage(img, 0, 0);
          const imgData = ctx.getImageData(0, 0, finalWidth, finalHeight);
          const data = imgData.data;

          const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
          for (let i = 0; i < data.length; i += 4) {
            // Brightness
            let r = data[i] + brightness * 2.55;
            let g = data[i + 1] + brightness * 2.55;
            let b = data[i + 2] + brightness * 2.55;

            // Contrast
            if (contrast !== 0) {
              r = factor * (r - 128) + 128;
              g = factor * (g - 128) + 128;
              b = factor * (b - 128) + 128;
            }

            data[i] = Math.min(255, Math.max(0, r));
            data[i + 1] = Math.min(255, Math.max(0, g));
            data[i + 2] = Math.min(255, Math.max(0, b));
          }
          ctx.putImageData(imgData, 0, 0);
          outputMime = selectedFile?.type || 'image/jpeg';
          break;
        }

        case 'image-quality-optimizer': {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.drawImage(img, 0, 0);
          outputMime = 'image/webp';
          outputQuality = 0.72;
          break;
        }

        case 'image-format-converter': {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          if (targetFormat === 'image/jpeg') {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, finalWidth, finalHeight);
          }
          ctx.drawImage(img, 0, 0);
          outputMime = targetFormat;
          break;
        }

        default: {
          canvas.width = finalWidth;
          canvas.height = finalHeight;
          ctx.drawImage(img, 0, 0);
          outputMime = selectedFile?.type || 'image/jpeg';
          break;
        }
      }

      // Convert to blob and data url
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setError('Failed to generate output image.');
            setIsProcessing(false);
            return;
          }
          const url = URL.createObjectURL(blob);
          setProcessedSrc(url);
          setProcessedSize(blob.size);
          setIsProcessing(false);
          setSuccessMessage('Image processed successfully!');
        },
        outputMime,
        outputQuality
      );
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Error processing image.');
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedSrc) return;
    const a = document.createElement('a');
    a.href = processedSrc;
    let ext = 'jpg';
    if (tool.slug === 'jpg-to-png' || tool.slug === 'pdf-to-png') ext = 'png';
    else if (tool.slug === 'webp-converter' || (tool.slug === 'image-format-converter' && targetFormat === 'image/webp')) ext = 'webp';
    else if (tool.slug === 'image-format-converter' && targetFormat === 'image/png') ext = 'png';
    a.download = `freetoolshub-${tool.slug}-${Date.now()}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const percentSaved =
    originalMeta.size > 0 && processedSize > 0
      ? Math.max(0, Math.round(((originalMeta.size - processedSize) / originalMeta.size) * 100))
      : 0;

  return (
    <div className="space-y-6">
      {/* File Upload Box */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files?.[0]) {
            const fakeEvent = {
              target: { files: e.dataTransfer.files },
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            handleFileChange(fakeEvent);
          }
        }}
        className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-2xl p-8 text-center cursor-pointer transition-colors bg-white dark:bg-slate-850 shadow-sm"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
            <Upload className="w-7 h-7" />
          </div>
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            {selectedFile ? selectedFile.name : 'Choose an image or drag & drop here'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Supports JPG, PNG, WebP, GIF (Max 25MB). Processed 100% locally in your browser.
          </p>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {selectedFile && imageSrc && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-left">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase">Original Size</span>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{formatBytes(originalMeta.size)}</p>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase">Dimensions</span>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {originalMeta.width} × {originalMeta.height} px
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase">Aspect Ratio</span>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {(originalMeta.width / (originalMeta.height || 1)).toFixed(2)}:1
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase">Megapixels</span>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {((originalMeta.width * originalMeta.height) / 1000000).toFixed(2)} MP
              </p>
            </div>
          </div>

          {/* Tool specific controls */}
          <div className="space-y-4 text-left">
            {tool.slug === 'image-compressor' && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Compression Quality: {quality}%
                  </label>
                  <span className="text-xs text-slate-400">
                    {quality < 60 ? 'Smaller size' : quality > 85 ? 'Higher quality' : 'Balanced'}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            )}

            {tool.slug === 'image-resizer' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Width (px)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={targetWidth}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setTargetWidth(val);
                        if (maintainAspect && originalMeta.width > 0) {
                          setTargetHeight(Math.round((val / originalMeta.width) * originalMeta.height));
                        }
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Height (px)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={targetHeight}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setTargetHeight(val);
                        if (maintainAspect && originalMeta.height > 0) {
                          setTargetWidth(Math.round((val / originalMeta.height) * originalMeta.width));
                        }
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
                    />
                  </div>
                </div>
                <label className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    checked={maintainAspect}
                    onChange={(e) => setMaintainAspect(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  Maintain original aspect ratio
                </label>
              </div>
            )}

            {tool.slug === 'png-to-jpg' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Background Color for Transparency Fill
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={pngBgColor}
                    onChange={(e) => setPngBgColor(e.target.value)}
                    className="w-10 h-10 rounded border border-slate-300 dark:border-slate-700 cursor-pointer"
                  />
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400">{pngBgColor}</span>
                </div>
              </div>
            )}

            {tool.slug === 'image-cropper' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Aspect Ratio Preset
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['1:1', '16:9', '4:3', 'free'] as const).map((ratio) => (
                    <button
                      key={ratio}
                      type="button"
                      onClick={() => setCropPreset(ratio)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        cropPreset === ratio
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {ratio.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {tool.slug === 'image-rotator' && (
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setRotationAngle((prev) => (prev + 90) % 360)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-xs font-semibold"
                >
                  <RotateCw className="w-4 h-4" /> Rotate 90° Clockwise
                </button>
                <button
                  type="button"
                  onClick={() => setRotationAngle((prev) => (prev + 180) % 360)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-xs font-semibold"
                >
                  Rotate 180°
                </button>
                <span className="self-center text-xs font-bold text-blue-600">Angle: {rotationAngle}°</span>
              </div>
            )}

            {tool.slug === 'image-flipper' && (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFlipH(!flipH)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border ${
                    flipH
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Flip Horizontal {flipH && '✓'}
                </button>
                <button
                  type="button"
                  onClick={() => setFlipV(!flipV)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border ${
                    flipV
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Flip Vertical {flipV && '✓'}
                </button>
              </div>
            )}

            {(tool.slug === 'image-brightness-adjuster' || tool.slug === 'image-contrast-adjuster') && (
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    <span>Brightness: {brightness}%</span>
                    <button
                      type="button"
                      onClick={() => setBrightness(0)}
                      className="text-blue-600 hover:underline text-[11px]"
                    >
                      Reset
                    </button>
                  </div>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    <span>Contrast: {contrast}%</span>
                    <button
                      type="button"
                      onClick={() => setContrast(0)}
                      className="text-blue-600 hover:underline text-[11px]"
                    >
                      Reset
                    </button>
                  </div>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={contrast}
                    onChange={(e) => setContrast(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            )}

            {tool.slug === 'image-format-converter' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Target Output Format
                </label>
                <select
                  value={targetFormat}
                  onChange={(e) => setTargetFormat(e.target.value)}
                  className="w-full sm:w-64 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium"
                >
                  <option value="image/jpeg">JPG / JPEG (Standard photo)</option>
                  <option value="image/png">PNG (Lossless & transparent)</option>
                  <option value="image/webp">WebP (Modern compressed)</option>
                </select>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={processImage}
              disabled={isProcessing}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Sliders className="w-4 h-4" /> Apply & Process
                </>
              )}
            </button>

            <button
              onClick={resetAll}
              className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Results Area */}
          {processedSrc && (
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                <div>
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" /> Result Ready
                  </h4>
                  <div className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5 flex gap-4">
                    <span>New Size: <strong>{formatBytes(processedSize)}</strong></span>
                    {percentSaved > 0 && <span>Saved: <strong>{percentSaved}%</strong></span>}
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" /> Download Processed Image
                </button>
              </div>

              {/* Preview Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-3 bg-slate-50 dark:bg-slate-900">
                  <span className="text-xs font-semibold text-slate-500 mb-2 block">Original Preview</span>
                  <div className="h-64 flex items-center justify-center overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800">
                    <img src={imageSrc} alt="Original preview" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-3 bg-slate-50 dark:bg-slate-900">
                  <span className="text-xs font-semibold text-slate-500 mb-2 block">Processed Preview</span>
                  <div className="h-64 flex items-center justify-center overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800">
                    <img src={processedSrc} alt="Processed preview" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
