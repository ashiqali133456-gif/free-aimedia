import React from 'react';
import { Category, ToolDefinition } from '../types';
import { Breadcrumbs } from './Breadcrumbs';
import { ToolCard } from './ToolCard';
import { AdSlot } from './AdSlot';
import { Sparkles } from 'lucide-react';

interface PopularToolsPageProps {
  categories: Category[];
  tools: ToolDefinition[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectTool: (tool: ToolDefinition) => void;
  onSelectCategory: (category: Category) => void;
}

export const PopularToolsPage: React.FC<PopularToolsPageProps> = ({
  tools,
  favorites,
  onToggleFavorite,
  onSelectTool,
}) => {
  const popularTools = tools.filter((t) => t.popular || t.isPopular);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left space-y-6">
      <Breadcrumbs items={[{ label: 'Popular Tools' }]} />

      <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900/60 mb-2">
          <Sparkles className="w-3.5 h-3.5" /> High Demand Utilities
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Most Popular Online Tools
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
          The most visited, tried, and trusted web utilities across FreeToolsHub. Bookmarked by students, developers,
          writers, and digital creators worldwide.
        </p>
      </div>

      <AdSlot position="top" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {popularTools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            isFavorite={favorites.includes(tool.id)}
            onToggleFavorite={onToggleFavorite}
            onSelect={onSelectTool}
          />
        ))}
      </div>

      <AdSlot position="bottom" />
    </div>
  );
};
