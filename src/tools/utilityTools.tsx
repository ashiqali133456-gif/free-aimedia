import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Play, Pause, RotateCcw, Copy, Check, Dices, Volume2, Shield, QrCode, Clock, Upload } from 'lucide-react';
import { ToolDefinition } from '../types';

interface UtilityToolsProps {
  tool: ToolDefinition;
}

export const UtilityTools: React.FC<UtilityToolsProps> = ({ tool }) => {
  // QR Code State
  const [qrText, setQrText] = useState<string>('https://freetoolshub.com');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [qrSize, setQrSize] = useState<number>(256);
  const [qrCorrection, setQrCorrection] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [qrDarkColor, setQrDarkColor] = useState<string>('#000000');
  const [qrLightColor, setQrLightColor] = useState<string>('#ffffff');

  // Password Generator State
  const [pwLength, setPwLength] = useState<number>(16);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Random Number State
  const [randMin, setRandMin] = useState<number>(1);
  const [randMax, setRandMax] = useState<number>(100);
  const [randCount, setRandCount] = useState<number>(5);
  const [randResults, setRandResults] = useState<number[]>([]);

  // Dice State
  const [diceSides, setDiceSides] = useState<number>(6);
  const [diceCount, setDiceCount] = useState<number>(2);
  const [diceRolls, setDiceRolls] = useState<number[]>([]);

  // Stopwatch State
  const [stopwatchMs, setStopwatchMs] = useState<number>(0);
  const [isSwRunning, setIsSwRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  // Countdown State
  const [cdHours, setCdHours] = useState<number>(0);
  const [cdMinutes, setCdMinutes] = useState<number>(5);
  const [cdSeconds, setCdSeconds] = useState<number>(0);
  const [cdRemaining, setCdRemaining] = useState<number>(300);
  const [isCdRunning, setIsCdRunning] = useState<boolean>(false);

  // Pomodoro State
  const [pomoMode, setPomoMode] = useState<'work' | 'short' | 'long'>('work');
  const [pomoSeconds, setPomoSeconds] = useState<number>(25 * 60);
  const [isPomoRunning, setIsPomoRunning] = useState<boolean>(false);
  const [pomoCount, setPomoCount] = useState<number>(0);

  // Color Palette State
  const [primaryColor, setPrimaryColor] = useState<string>('#3b82f6');

  // Generate QR Code
  useEffect(() => {
    if (tool.slug === 'qr-code-generator') {
      QRCode.toDataURL(qrText || 'https://freetoolshub.com', {
        width: qrSize,
        margin: 2,
        errorCorrectionLevel: qrCorrection,
        color: {
          dark: qrDarkColor,
          light: qrLightColor,
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch(console.error);
    }
  }, [tool.slug, qrText, qrSize, qrCorrection, qrDarkColor, qrLightColor]);

  // Generate Strong Password
  const generatePassword = () => {
    let chars = '';
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';

    const arr = new Uint32Array(pwLength);
    crypto.getRandomValues(arr);
    let pw = '';
    for (let i = 0; i < pwLength; i++) {
      pw += chars[arr[i] % chars.length];
    }
    setGeneratedPassword(pw);
  };

  useEffect(() => {
    if (tool.slug === 'password-generator') {
      generatePassword();
    }
  }, [tool.slug, pwLength, includeUpper, includeLower, includeNumbers, includeSymbols]);

  // Play browser chime
  const playChime = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch {
      // Audio not permitted or supported
    }
  };

  // Stopwatch timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSwRunning) {
      interval = setInterval(() => {
        setStopwatchMs((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isSwRunning]);

  // Countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCdRunning && cdRemaining > 0) {
      interval = setInterval(() => {
        setCdRemaining((prev) => {
          if (prev <= 1) {
            setIsCdRunning(false);
            playChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCdRunning, cdRemaining]);

  // Pomodoro timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPomoRunning && pomoSeconds > 0) {
      interval = setInterval(() => {
        setPomoSeconds((prev) => {
          if (prev <= 1) {
            setIsPomoRunning(false);
            playChime();
            if (pomoMode === 'work') {
              setPomoCount((c) => c + 1);
              setPomoMode('short');
              return 5 * 60;
            } else {
              setPomoMode('work');
              return 25 * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPomoRunning, pomoSeconds, pomoMode]);

  // Roll Dice
  const rollDice = () => {
    const rolls: number[] = [];
    for (let i = 0; i < diceCount; i++) {
      rolls.push(Math.floor(Math.random() * diceSides) + 1);
    }
    setDiceRolls(rolls);
  };

  // Format Milliseconds for stopwatch
  const formatStopwatch = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centis = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${centis.toString().padStart(2, '0')}`;
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 text-left">
      {/* 1. QR Code Generator */}
      {tool.slug === 'qr-code-generator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  URL or Text Payload
                </label>
                <textarea
                  rows={3}
                  value={qrText}
                  onChange={(e) => setQrText(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Pixel Size: {qrSize}px
                  </label>
                  <input
                    type="range"
                    min="150"
                    max="512"
                    step="32"
                    value={qrSize}
                    onChange={(e) => setQrSize(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Error Correction
                  </label>
                  <select
                    value={qrCorrection}
                    onChange={(e) => setQrCorrection(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                    className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold"
                  >
                    <option value="L">Low (7%)</option>
                    <option value="M">Medium (15%)</option>
                    <option value="Q">Quartile (25%)</option>
                    <option value="H">High (30%)</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    QR Foreground
                  </label>
                  <input
                    type="color"
                    value={qrDarkColor}
                    onChange={(e) => setQrDarkColor(e.target.value)}
                    className="w-10 h-10 rounded border cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    QR Background
                  </label>
                  <input
                    type="color"
                    value={qrLightColor}
                    onChange={(e) => setQrLightColor(e.target.value)}
                    className="w-10 h-10 rounded border cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              {qrDataUrl && (
                <img
                  src={qrDataUrl}
                  alt="Generated QR Code"
                  className="rounded-xl shadow-md border border-slate-200 dark:border-slate-700 max-w-[240px] h-auto"
                />
              )}
              {qrDataUrl && (
                <a
                  href={qrDataUrl}
                  download="qrcode.png"
                  className="mt-4 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  Download PNG QR Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. Password Generator */}
      {tool.slug === 'password-generator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <span className="font-mono text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-wider truncate">
              {generatedPassword}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={generatePassword}
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 transition-colors"
                title="Regenerate"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(generatedPassword);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                <span>Password Length: {pwLength} characters</span>
                <span className="text-emerald-600 font-bold">
                  {pwLength >= 16 ? 'Very Strong' : pwLength >= 12 ? 'Strong' : 'Moderate'}
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                value={pwLength}
                onChange={(e) => setPwLength(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={includeUpper}
                  onChange={(e) => setIncludeUpper(e.target.checked)}
                  className="rounded text-blue-600"
                />
                Uppercase (A-Z)
              </label>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={includeLower}
                  onChange={(e) => setIncludeLower(e.target.checked)}
                  className="rounded text-blue-600"
                />
                Lowercase (a-z)
              </label>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="rounded text-blue-600"
                />
                Numbers (0-9)
              </label>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="rounded text-blue-600"
                />
                Symbols (!@#$)
              </label>
            </div>
          </div>
        </div>
      )}

      {/* 3. Stopwatch */}
      {tool.slug === 'online-stopwatch' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm text-center space-y-6 max-w-lg mx-auto">
          <div className="font-mono text-5xl sm:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-wider">
            {formatStopwatch(stopwatchMs)}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setIsSwRunning(!isSwRunning)}
              className={`px-8 py-3 rounded-xl text-sm font-bold text-white transition-colors shadow-sm ${
                isSwRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSwRunning ? 'Pause' : 'Start'}
            </button>

            {isSwRunning && (
              <button
                onClick={() => setLaps([stopwatchMs, ...laps])}
                className="px-6 py-3 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                Lap
              </button>
            )}

            <button
              onClick={() => {
                setIsSwRunning(false);
                setStopwatchMs(0);
                setLaps([]);
              }}
              className="px-6 py-3 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              Reset
            </button>
          </div>

          {laps.length > 0 && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 max-h-48 overflow-y-auto">
              <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Split Laps</h4>
              <ul className="divide-y divide-slate-100 dark:divide-slate-800 text-xs font-mono">
                {laps.map((lap, i) => (
                  <li key={i} className="py-1.5 flex justify-between">
                    <span className="text-slate-500">Lap {laps.length - i}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{formatStopwatch(lap)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 4. Pomodoro Timer */}
      {tool.slug === 'pomodoro-timer' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm text-center space-y-6 max-w-lg mx-auto">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => {
                setPomoMode('work');
                setPomoSeconds(25 * 60);
                setIsPomoRunning(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold ${
                pomoMode === 'work' ? 'bg-red-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              Focus (25m)
            </button>
            <button
              onClick={() => {
                setPomoMode('short');
                setPomoSeconds(5 * 60);
                setIsPomoRunning(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold ${
                pomoMode === 'short' ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              Short Break (5m)
            </button>
            <button
              onClick={() => {
                setPomoMode('long');
                setPomoSeconds(15 * 60);
                setIsPomoRunning(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold ${
                pomoMode === 'long' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              Long Break (15m)
            </button>
          </div>

          <div className="font-mono text-6xl font-black text-slate-900 dark:text-slate-100 tracking-wider">
            {formatSeconds(pomoSeconds)}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setIsPomoRunning(!isPomoRunning)}
              className="px-8 py-3 rounded-xl text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
            >
              {isPomoRunning ? 'Pause' : 'Start Focus'}
            </button>
            <button
              onClick={() => {
                setIsPomoRunning(false);
                setPomoSeconds(pomoMode === 'work' ? 25 * 60 : pomoMode === 'short' ? 5 * 60 : 15 * 60);
              }}
              className="px-6 py-3 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
            >
              Reset
            </button>
          </div>

          <div className="text-xs text-slate-400">Completed Sessions Today: {pomoCount} 🍅</div>
        </div>
      )}

      {/* 5. Dice Roller */}
      {tool.slug === 'dice-roller' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 text-center max-w-lg mx-auto">
          <div className="flex justify-center gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Number of Dice</label>
              <input
                type="number"
                min="1"
                max="10"
                value={diceCount}
                onChange={(e) => setDiceCount(Number(e.target.value))}
                className="w-20 text-center py-2 border rounded-lg font-bold text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Dice Type</label>
              <select
                value={diceSides}
                onChange={(e) => setDiceSides(Number(e.target.value))}
                className="py-2 px-3 border rounded-lg font-bold text-sm"
              >
                <option value={4}>d4 (4 sides)</option>
                <option value={6}>d6 (Standard)</option>
                <option value={8}>d8 (8 sides)</option>
                <option value={10}>d10 (10 sides)</option>
                <option value={12}>d12 (12 sides)</option>
                <option value={20}>d20 (D&D 20 sides)</option>
                <option value={100}>d100 (Percentile)</option>
              </select>
            </div>
          </div>

          <button
            onClick={rollDice}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Dices className="w-5 h-5" /> Roll Dice!
          </button>

          {diceRolls.length > 0 && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex justify-center gap-3 flex-wrap">
                {diceRolls.map((r, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center font-black text-2xl text-blue-600 dark:text-blue-400 shadow-sm"
                  >
                    {r}
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Total Sum: {diceRolls.reduce((a, b) => a + b, 0)}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 6. Random Number Generator */}
      {tool.slug === 'random-number-generator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6 max-w-lg mx-auto">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Min</label>
              <input
                type="number"
                value={randMin}
                onChange={(e) => setRandMin(Number(e.target.value))}
                className="w-full py-2 border rounded-lg text-center font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Max</label>
              <input
                type="number"
                value={randMax}
                onChange={(e) => setRandMax(Number(e.target.value))}
                className="w-full py-2 border rounded-lg text-center font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Count</label>
              <input
                type="number"
                min="1"
                max="50"
                value={randCount}
                onChange={(e) => setRandCount(Number(e.target.value))}
                className="w-full py-2 border rounded-lg text-center font-bold"
              />
            </div>
          </div>

          <button
            onClick={() => {
              const res: number[] = [];
              for (let i = 0; i < randCount; i++) {
                res.push(Math.floor(Math.random() * (randMax - randMin + 1)) + randMin);
              }
              setRandResults(res);
            }}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Generate Random Numbers
          </button>

          {randResults.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border flex flex-wrap gap-2 justify-center">
              {randResults.map((n, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border font-mono font-bold text-base text-blue-600"
                >
                  {n}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 7. Color Picker & Palette */}
      {tool.slug === 'color-picker' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-16 h-16 rounded-xl border cursor-pointer"
            />
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Selected HEX Code
              </label>
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-32 px-3 py-2 rounded-lg border font-mono text-sm uppercase"
              />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Harmonious Color Palette</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Dominant', hex: primaryColor },
                { label: 'Complementary', hex: '#f59e0b' },
                { label: 'Analogous 1', hex: '#06b6d4' },
                { label: 'Analogous 2', hex: '#8b5cf6' },
              ].map((p, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="h-16 w-full" style={{ backgroundColor: p.hex }} />
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-800 text-xs flex justify-between items-center">
                    <span className="font-semibold text-slate-600 dark:text-slate-300">{p.label}</span>
                    <span className="font-mono text-slate-400">{p.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
