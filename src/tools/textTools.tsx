import React, { useState, useMemo } from 'react';
import { Copy, Check, RotateCcw, ArrowRight, AlignLeft, Sparkles } from 'lucide-react';
import { ToolDefinition } from '../types';

interface TextToolsProps {
  tool: ToolDefinition;
}

export const TextTools: React.FC<TextToolsProps> = ({ tool }) => {
  const [inputText, setInputText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Specific tool parameters
  const [findText, setFindText] = useState<string>('');
  const [replaceText, setReplaceText] = useState<string>('');
  const [matchCase, setMatchCase] = useState<boolean>(false);
  const [repeatCount, setRepeatCount] = useState<number>(5);
  const [repeatSeparator, setRepeatSeparator] = useState<string>('\\n');
  const [loremType, setLoremType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');
  const [loremCount, setLoremCount] = useState<number>(3);

  const stats = useMemo(() => {
    const text = inputText;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
    const paragraphs = text.trim() ? text.split(/\n+/).filter((p) => p.trim().length > 0).length : 0;
    const readingTimeMinutes = (words / 200).toFixed(1);
    const speakingTimeMinutes = (words / 130).toFixed(1);
    const byteSize = new Blob([text]).size;

    return {
      chars,
      charsNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTimeMinutes,
      speakingTimeMinutes,
      byteSize,
    };
  }, [inputText]);

  // Transform text depending on active tool
  const outputText = useMemo(() => {
    if (!inputText && tool.slug !== 'lorem-ipsum-generator') return '';

    switch (tool.slug) {
      case 'uppercase-converter':
        return inputText.toUpperCase();

      case 'lowercase-converter':
        return inputText.toLowerCase();

      case 'title-case-converter':
        return inputText.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());

      case 'case-converter':
        return inputText;

      case 'remove-extra-spaces':
        return inputText.replace(/[ \t]+/g, ' ').replace(/^\s+|\s+$/gm, '').trim();

      case 'remove-duplicate-lines': {
        const lines = inputText.split('\n');
        const seen = new Set<string>();
        const unique = lines.filter((line) => {
          if (seen.has(line)) return false;
          seen.add(line);
          return true;
        });
        return unique.join('\n');
      }

      case 'alphabetical-line-sorter': {
        const lines = inputText.split('\n');
        return lines.sort((a, b) => a.localeCompare(b)).join('\n');
      }

      case 'reverse-text':
        return inputText.split('').reverse().join('');

      case 'text-cleaner': {
        let cleaned = inputText;
        // Normalize quotes
        cleaned = cleaned.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
        // Remove weird whitespace
        cleaned = cleaned.replace(/[\u200B-\u200D\uFEFF]/g, '');
        // Collapse spaces
        cleaned = cleaned.replace(/[ \t]+/g, ' ').trim();
        return cleaned;
      }

      case 'find-and-replace': {
        if (!findText) return inputText;
        try {
          const flags = matchCase ? 'g' : 'gi';
          const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
          return inputText.replace(regex, replaceText);
        } catch {
          return inputText;
        }
      }

      case 'text-to-slug-converter':
        return inputText
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');

      case 'text-repeater': {
        const sep = repeatSeparator === '\\n' ? '\n' : repeatSeparator;
        return Array(Math.max(1, Math.min(1000, repeatCount)))
          .fill(inputText)
          .join(sep);
      }

      case 'line-break-remover':
        return inputText.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s+/g, ' ');

      case 'lorem-ipsum-generator': {
        const standardLorem = [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
        ];
        if (loremType === 'paragraphs') {
          const paras: string[] = [];
          for (let i = 0; i < loremCount; i++) {
            paras.push(standardLorem.join(' '));
          }
          return paras.join('\n\n');
        } else if (loremType === 'sentences') {
          const sents = standardLorem.flatMap((s) => s.split('. '));
          return sents.slice(0, loremCount).join('. ') + '.';
        } else {
          const wordsList = standardLorem.join(' ').split(' ');
          return wordsList.slice(0, loremCount).join(' ') + '.';
        }
      }

      default:
        return inputText;
    }
  }, [inputText, tool.slug, findText, replaceText, matchCase, repeatCount, repeatSeparator, loremType, loremCount]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyCase = (type: string) => {
    let result = inputText;
    if (type === 'upper') result = inputText.toUpperCase();
    else if (type === 'lower') result = inputText.toLowerCase();
    else if (type === 'title')
      result = inputText.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
    else if (type === 'camel') {
      result = inputText
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    } else if (type === 'snake') {
      result = inputText
        .trim()
        .toLowerCase()
        .replace(/[\s\W]+/g, '_');
    } else if (type === 'kebab') {
      result = inputText
        .trim()
        .toLowerCase()
        .replace(/[\s\W]+/g, '-');
    }
    setInputText(result);
  };

  const isInspectorTool =
    tool.slug === 'word-counter' ||
    tool.slug === 'character-counter' ||
    tool.slug === 'sentence-counter' ||
    tool.slug === 'paragraph-counter' ||
    tool.slug === 'reading-time-estimator' ||
    tool.slug === 'text-length-checker';

  return (
    <div className="space-y-6 text-left">
      {/* Real-time stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="p-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Words</span>
          <p className="text-xl font-black text-blue-600 dark:text-blue-400">{stats.words}</p>
        </div>
        <div className="p-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Characters</span>
          <p className="text-xl font-black text-slate-800 dark:text-slate-100">{stats.chars}</p>
        </div>
        <div className="p-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase">No Spaces</span>
          <p className="text-lg font-bold text-slate-700 dark:text-slate-300">{stats.charsNoSpaces}</p>
        </div>
        <div className="p-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Sentences</span>
          <p className="text-lg font-bold text-slate-700 dark:text-slate-300">{stats.sentences}</p>
        </div>
        <div className="p-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Paragraphs</span>
          <p className="text-lg font-bold text-slate-700 dark:text-slate-300">{stats.paragraphs}</p>
        </div>
        <div className="p-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase">Read Time</span>
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">~{stats.readingTimeMinutes} min</p>
        </div>
      </div>

      {/* Specific tool configuration inputs */}
      {tool.slug === 'find-and-replace' && (
        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Find text</label>
            <input
              type="text"
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
              placeholder="Text to match..."
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Replace with</label>
            <input
              type="text"
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
              placeholder="Replacement string..."
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
            />
          </div>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 sm:col-span-2">
            <input
              type="checkbox"
              checked={matchCase}
              onChange={(e) => setMatchCase(e.target.checked)}
              className="rounded text-blue-600"
            />
            Match case sensitive
          </label>
        </div>
      )}

      {tool.slug === 'text-repeater' && (
        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Repeat Count</label>
            <input
              type="number"
              min="1"
              max="500"
              value={repeatCount}
              onChange={(e) => setRepeatCount(Number(e.target.value))}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Separator</label>
            <select
              value={repeatSeparator}
              onChange={(e) => setRepeatSeparator(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
            >
              <option value="\n">New Line (\n)</option>
              <option value=" ">Space</option>
              <option value=", ">Comma (, )</option>
              <option value=" - ">Dash ( - )</option>
            </select>
          </div>
        </div>
      )}

      {tool.slug === 'lorem-ipsum-generator' && (
        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Generate Type</label>
            <div className="flex gap-2">
              {(['paragraphs', 'sentences', 'words'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setLoremType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize ${
                    loremType === t ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Count</label>
            <input
              type="number"
              min="1"
              max="50"
              value={loremCount}
              onChange={(e) => setLoremCount(Number(e.target.value))}
              className="w-24 px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold"
            />
          </div>
        </div>
      )}

      {tool.slug === 'case-converter' && (
        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
          <button
            onClick={() => handleApplyCase('upper')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
          >
            UPPERCASE
          </button>
          <button
            onClick={() => handleApplyCase('lower')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
          >
            lowercase
          </button>
          <button
            onClick={() => handleApplyCase('title')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
          >
            Title Case
          </button>
          <button
            onClick={() => handleApplyCase('camel')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
          >
            camelCase
          </button>
          <button
            onClick={() => handleApplyCase('snake')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
          >
            snake_case
          </button>
          <button
            onClick={() => handleApplyCase('kebab')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors"
          >
            kebab-case
          </button>
        </div>
      )}

      {/* Dual Workspace (Input / Output) */}
      <div className={`grid gap-4 ${isInspectorTool ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {tool.slug === 'lorem-ipsum-generator' ? 'Sample Text' : 'Input Text'}
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setInputText('')}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setInputText('The quick brown fox jumps over the lazy dog. Online tools should be fast, private, and free!')
                  }
                  className="text-xs text-blue-600 hover:underline"
                >
                  Sample Text
                </button>
              </div>
            </div>
            <textarea
              rows={isInspectorTool ? 10 : 8}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste or type your text here..."
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans leading-relaxed"
            />
          </div>
        </div>

        {!isInspectorTool && (
          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Processed Output</label>
                <button
                  type="button"
                  onClick={() => copyToClipboard(outputText)}
                  disabled={!outputText}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline disabled:opacity-40"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy Result'}
                </button>
              </div>
              <textarea
                readOnly
                rows={8}
                value={outputText}
                placeholder="Transformed text will appear here immediately..."
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 font-sans leading-relaxed"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
