import React, { useState } from 'react';
import { ToolDefinition, Category, PageView } from '../types';
import { Breadcrumbs } from './Breadcrumbs';
import { DynamicIcon } from './DynamicIcon';
import { ToolCard } from './ToolCard';
import { AdSlot } from './AdSlot';
import { Shield, ChevronDown, ChevronUp, Star, Info, CheckCircle2, ArrowRight } from 'lucide-react';

// Tool Runner Implementations
import { ImageTools } from '../tools/imageTools';
import { PDFTools } from '../tools/pdfTools';
import { TextTools } from '../tools/textTools';
import { CalculatorTools } from '../tools/calculatorTools';
import { ConverterTools } from '../tools/converterTools';
import { DeveloperTools } from '../tools/developerTools';
import { UtilityTools } from '../tools/utilityTools';
import { SocialTools } from '../tools/socialTools';

interface ToolPageProps {
  tool: ToolDefinition;
  category?: Category;
  allTools: ToolDefinition[];
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectTool: (tool: ToolDefinition) => void;
  onSelectCategory: (category: Category) => void;
  onNavigateHome: () => void;
}

export const ToolPage: React.FC<ToolPageProps> = ({
  tool,
  category,
  allTools,
  isFavorite,
  onToggleFavorite,
  onSelectTool,
  onSelectCategory,
  onNavigateHome,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Related tools from the same category
  const relatedTools = allTools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  // Render proper tool runner based on category
  const renderToolComponent = () => {
    switch (tool.category) {
      case 'image':
        return <ImageTools tool={tool} />;
      case 'pdf':
        return <PDFTools tool={tool} />;
      case 'text':
        return <TextTools tool={tool} />;
      case 'calculator':
        return <CalculatorTools tool={tool} />;
      case 'converter':
        return <ConverterTools tool={tool} />;
      case 'developer':
        return <DeveloperTools tool={tool} />;
      case 'utility':
      case 'qr-barcode':
      case 'file':
      case 'color':
      case 'date-time':
        return <UtilityTools tool={tool} />;
      case 'social':
        return <SocialTools tool={tool} />;
      default:
        return <TextTools tool={tool} />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          {
            label: category ? category.name : tool.category.replace('-', ' '),
            onClick: () => category && onSelectCategory(category),
          },
          { label: tool.name },
        ]}
      />

      {/* Tool Header Section */}
      <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm mb-6 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex-shrink-0 shadow-sm">
              <DynamicIcon name={tool.iconName} className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 capitalize">
                  {tool.category.replace('-', ' ')}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <Shield className="w-3.5 h-3.5" /> Client-Side Privacy
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                {tool.name}
              </h1>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={(e) => onToggleFavorite(tool.id, e)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                isFavorite
                  ? 'border-amber-300 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              <Star className={`w-4 h-4 ${isFavorite ? 'fill-current text-amber-500' : ''}`} />
              <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
            </button>
          </div>
        </div>

        {/* Warning / Notice banner if defined */}
        {tool.notice && (
          <div className="mt-4 p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
            <span>{tool.notice}</span>
          </div>
        )}
      </div>

      {/* Top Ad Slot */}
      <AdSlot position="top" />

      {/* Active Interactive Tool Workspace */}
      <div className="my-6">{renderToolComponent()}</div>

      {/* Middle Ad Slot */}
      <AdSlot position="between-content" />

      {/* How to Use & Documentation Section */}
      <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm my-8 text-left space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            How to Use the {tool.name}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Follow these straightforward steps to get instant results directly in your web browser:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tool.howTo.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                {idx + 1}
              </div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>

        {tool.supportedFormats && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Supported Formats & Standards:
            </span>
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(tool.supportedFormats)
                ? tool.supportedFormats
                : tool.supportedFormats.split(',').map((s) => s.trim())
              ).map((fmt, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FAQs Section */}
      {tool.faqs && tool.faqs.length > 0 && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm my-8 text-left">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {tool.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Ad Slot */}
      <AdSlot position="bottom" />

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <div className="my-12 text-left">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Related {category ? category.name : 'Tools'}
              </h3>
              <p className="text-xs text-slate-500">Discover more utilities in this collection.</p>
            </div>
            {category && (
              <button
                onClick={() => onSelectCategory(category)}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                View all in {category.name} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedTools.map((rel) => (
              <ToolCard
                key={rel.id}
                tool={rel}
                isFavorite={false}
                onToggleFavorite={onToggleFavorite}
                onSelect={onSelectTool}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
