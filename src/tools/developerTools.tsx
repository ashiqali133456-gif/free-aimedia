import React, { useState, useMemo } from 'react';
import { Copy, Check, Code, Play, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ToolDefinition } from '../types';

interface DeveloperToolsProps {
  tool: ToolDefinition;
}

export const DeveloperTools: React.FC<DeveloperToolsProps> = ({ tool }) => {
  const [inputCode, setInputCode] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [indentSize, setIndentSize] = useState<number>(2);

  // UUID generator state
  const [uuidCount, setUuidCount] = useState<number>(5);
  const [uuidHyphen, setUuidHyphen] = useState<boolean>(true);
  const [uuidUpper, setUuidUpper] = useState<boolean>(false);

  // Timestamp state
  const [timestampInput, setTimestampInput] = useState<string>(Math.floor(Date.now() / 1000).toString());

  // Regex tester state
  const [regexPattern, setRegexPattern] = useState<string>('\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b');
  const [regexFlags, setRegexFlags] = useState<string>('gi');
  const [regexSample, setRegexSample] = useState<string>(
    'Contact our team at support@example.com or sales.department@company.org for inquiries.'
  );

  // Color Converter state
  const [hexColor, setHexColor] = useState<string>('#3B82F6');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Transformation logic
  const transformResult = useMemo(() => {
    try {
      switch (tool.slug) {
        case 'json-formatter': {
          if (!inputCode.trim()) return { text: '', error: null };
          const parsed = JSON.parse(inputCode);
          return { text: JSON.stringify(parsed, null, indentSize), error: null };
        }

        case 'json-validator': {
          if (!inputCode.trim()) return { text: '', error: null, valid: null };
          try {
            JSON.parse(inputCode);
            return { text: '✓ Valid JSON structure!', error: null, valid: true };
          } catch (e) {
            return { text: '', error: (e as Error).message, valid: false };
          }
        }

        case 'json-minifier': {
          if (!inputCode.trim()) return { text: '', error: null };
          const parsed = JSON.parse(inputCode);
          return { text: JSON.stringify(parsed), error: null };
        }

        case 'html-formatter': {
          let formatted = '';
          const reg = /(>)(<)(\/*)/g;
          let code = inputCode.replace(reg, '$1\r\n$2$3');
          let pad = 0;
          code.split('\r\n').forEach((node) => {
            let indent = 0;
            if (node.match(/.+<\/\w[^>]*>$/)) {
              indent = 0;
            } else if (node.match(/^<\/\w/)) {
              if (pad !== 0) pad -= 1;
            } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
              indent = 1;
            } else {
              indent = 0;
            }
            formatted += ' '.repeat(pad * 2) + node + '\n';
            pad += indent;
          });
          return { text: formatted.trim(), error: null };
        }

        case 'html-minifier': {
          const minified = inputCode
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\s+/g, ' ')
            .replace(/> </g, '><')
            .trim();
          return { text: minified, error: null };
        }

        case 'css-formatter': {
          const formatted = inputCode
            .replace(/\s*{\s*/g, ' {\n  ')
            .replace(/;\s*/g, ';\n  ')
            .replace(/\s*}\s*/g, '\n}\n\n')
            .replace(/  }/g, '}')
            .trim();
          return { text: formatted, error: null };
        }

        case 'css-minifier': {
          const min = inputCode
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .replace(/\s*([{}:;,])\s*/g, '$1')
            .trim();
          return { text: min, error: null };
        }

        case 'javascript-minifier': {
          // Safe regex-based whitespace & comment compression
          const min = inputCode
            .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '')
            .replace(/^\s+|\s+$/gm, '')
            .replace(/\s*([=+\-*/<>!&|,;{}()])\s*/g, '$1')
            .replace(/;\}/g, '}');
          return { text: min, error: null };
        }

        case 'javascript-formatter': {
          return { text: inputCode, error: null };
        }

        case 'base64-encoder': {
          const encoded = btoa(unescape(encodeURIComponent(inputCode)));
          return { text: encoded, error: null };
        }

        case 'base64-decoder': {
          if (!inputCode.trim()) return { text: '', error: null };
          try {
            const decoded = decodeURIComponent(escape(atob(inputCode.trim())));
            return { text: decoded, error: null };
          } catch {
            return { text: '', error: 'Invalid Base64 string.' };
          }
        }

        case 'url-encoder': {
          return { text: encodeURIComponent(inputCode), error: null };
        }

        case 'url-decoder': {
          try {
            return { text: decodeURIComponent(inputCode), error: null };
          } catch {
            return { text: '', error: 'Malformed URL sequence.' };
          }
        }

        case 'uuid-generator': {
          const list: string[] = [];
          for (let i = 0; i < uuidCount; i++) {
            let id: string = crypto.randomUUID();
            if (!uuidHyphen) id = id.replace(/-/g, '');
            if (uuidUpper) id = id.toUpperCase();
            list.push(id);
          }
          return { text: list.join('\n'), error: null };
        }

        case 'unix-timestamp-converter': {
          const num = Number(timestampInput);
          if (isNaN(num)) return { text: '', error: 'Invalid numeric timestamp' };
          const date = new Date(num > 9999999999 ? num : num * 1000);
          const out = [
            `UTC Time:   ${date.toUTCString()}`,
            `ISO 8601:   ${date.toISOString()}`,
            `Local Time: ${date.toLocaleString()}`,
            `Epoch Seconds: ${Math.floor(date.getTime() / 1000)}`,
            `Epoch Millis:  ${date.getTime()}`,
          ].join('\n');
          return { text: out, error: null };
        }

        case 'html-entity-encoder': {
          const encoded = inputCode.replace(/[\u00A0-\u9999<>&]/g, (i) => '&#' + i.charCodeAt(0) + ';');
          return { text: encoded, error: null };
        }

        case 'html-entity-decoder': {
          const txt = document.createElement('textarea');
          txt.innerHTML = inputCode;
          return { text: txt.value, error: null };
        }

        case 'dev-lorem-ipsum': {
          const mockData = {
            users: Array.from({ length: 3 }).map((_, i) => ({
              id: i + 1,
              name: `User ${i + 1}`,
              email: `user${i + 1}@example.com`,
              role: i === 0 ? 'admin' : 'member',
              createdAt: new Date().toISOString(),
            })),
          };
          return { text: JSON.stringify(mockData, null, 2), error: null };
        }

        default:
          return { text: inputCode, error: null };
      }
    } catch (e) {
      return { text: '', error: (e as Error).message };
    }
  }, [tool.slug, inputCode, indentSize, uuidCount, uuidHyphen, uuidUpper, timestampInput]);

  // Regex testing results
  const regexResults = useMemo(() => {
    if (tool.slug !== 'regex-tester' || !regexPattern) return null;
    try {
      const reg = new RegExp(regexPattern, regexFlags);
      const matches = Array.from(regexSample.matchAll(reg));
      return { count: matches.length, matches, error: null };
    } catch (err) {
      return { count: 0, matches: [], error: (err as Error).message };
    }
  }, [tool.slug, regexPattern, regexFlags, regexSample]);

  // Color conversion
  const colorResults = useMemo(() => {
    if (tool.slug !== 'color-code-converter') return null;
    let hex = hexColor.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
    if (hex.length !== 6) return null;

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // HSL
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm:
          h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
          break;
        case gNorm:
          h = (bNorm - rNorm) / d + 2;
          break;
        case bNorm:
          h = (rNorm - gNorm) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      hex: `#${hex.toUpperCase()}`,
      rgb: `rgb(${r}, ${g}, ${b})`,
      rgba: `rgba(${r}, ${g}, ${b}, 1.0)`,
      hsl: `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`,
    };
  }, [tool.slug, hexColor]);

  return (
    <div className="space-y-6 text-left">
      {/* Tool-specific upper controls */}
      {tool.slug === 'uuid-generator' && (
        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Count</label>
            <input
              type="number"
              min="1"
              max="50"
              value={uuidCount}
              onChange={(e) => setUuidCount(Number(e.target.value))}
              className="w-20 px-3 py-1.5 border rounded-lg text-sm"
            />
          </div>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 pt-5">
            <input
              type="checkbox"
              checked={uuidHyphen}
              onChange={(e) => setUuidHyphen(e.target.checked)}
              className="rounded text-blue-600"
            />
            Include Hyphens
          </label>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 pt-5">
            <input
              type="checkbox"
              checked={uuidUpper}
              onChange={(e) => setUuidUpper(e.target.checked)}
              className="rounded text-blue-600"
            />
            Uppercase
          </label>
        </div>
      )}

      {tool.slug === 'unix-timestamp-converter' && (
        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Unix Epoch Timestamp
            </label>
            <input
              type="text"
              value={timestampInput}
              onChange={(e) => setTimestampInput(e.target.value)}
              className="w-full px-3.5 py-2 border rounded-lg font-mono text-sm"
            />
          </div>
          <button
            type="button"
            onClick={() => setTimestampInput(Math.floor(Date.now() / 1000).toString())}
            className="mt-5 px-3.5 py-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:bg-blue-100"
          >
            Current Timestamp
          </button>
        </div>
      )}

      {tool.slug === 'color-code-converter' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={hexColor}
              onChange={(e) => setHexColor(e.target.value)}
              className="w-16 h-16 rounded-xl border border-slate-300 dark:border-slate-700 cursor-pointer"
            />
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">HEX Code</label>
              <input
                type="text"
                value={hexColor}
                onChange={(e) => setHexColor(e.target.value)}
                className="w-32 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm uppercase"
              />
            </div>
          </div>

          {colorResults && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">RGB</span>
                  <p className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">{colorResults.rgb}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(colorResults.rgb)}
                  className="text-slate-400 hover:text-blue-600"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">HSL</span>
                  <p className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">{colorResults.hsl}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(colorResults.hsl)}
                  className="text-slate-400 hover:text-blue-600"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">RGBA</span>
                  <p className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">{colorResults.rgba}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(colorResults.rgba)}
                  className="text-slate-400 hover:text-blue-600"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {tool.slug === 'regex-tester' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="sm:col-span-3">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Regular Expression Pattern
              </label>
              <input
                type="text"
                value={regexPattern}
                onChange={(e) => setRegexPattern(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Flags</label>
              <input
                type="text"
                value={regexFlags}
                onChange={(e) => setRegexFlags(e.target.value)}
                placeholder="g, i, m"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Test String</label>
            <textarea
              rows={4}
              value={regexSample}
              onChange={(e) => setRegexSample(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-xs"
            />
          </div>

          {regexResults && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-xs font-bold text-slate-500 uppercase">Matches Found ({regexResults.count})</span>
              {regexResults.error ? (
                <p className="text-xs text-red-500 mt-1">{regexResults.error}</p>
              ) : (
                <div className="flex flex-wrap gap-2 mt-2">
                  {regexResults.matches.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-semibold"
                    >
                      {m[0]}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* General Input/Output Editor */}
      {tool.slug !== 'color-code-converter' && tool.slug !== 'regex-tester' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Input Data / Code</label>
              {tool.slug.includes('json') && (
                <button
                  type="button"
                  onClick={() => setInputCode('{"name":"FreeToolsHub","version":1.0,"features":["fast","private"]}')}
                  className="text-xs text-blue-600 hover:underline"
                >
                  Load Sample JSON
                </button>
              )}
            </div>
            <textarea
              rows={12}
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="Paste code or data here..."
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Processed Output</label>
              <button
                type="button"
                onClick={() => copyToClipboard(transformResult.text)}
                disabled={!transformResult.text}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline disabled:opacity-40"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            {transformResult.error ? (
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 text-red-700 dark:text-red-300 text-xs font-mono">
                <AlertCircle className="w-4 h-4 inline mr-1" />
                {transformResult.error}
              </div>
            ) : (
              <textarea
                readOnly
                rows={12}
                value={transformResult.text}
                placeholder="Output will appear here..."
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-slate-100"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
