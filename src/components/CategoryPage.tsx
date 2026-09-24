import React, { useState } from 'react';
import { Category, ToolDefinition } from '../types';
import { Breadcrumbs } from './Breadcrumbs';
import { ToolCard } from './ToolCard';
import { AdSlot } from './AdSlot';
import { DynamicIcon } from './DynamicIcon';
import { Search } from 'lucide-react';

interface CategoryPageProps {
  category: Category;
  tools: ToolDefinition[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectTool: (tool: ToolDefinition) => void;
  onNavigateHome: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  tools,
  favorites,
  onToggleFavorite,
  onSelectTool,
  onNavigateHome,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.keywords && t.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
      <Breadcrumbs items={[{ label: category.name }]} />

      {/* Category Hero */}
      <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 shadow-sm">
            <DynamicIcon name={category.iconName} className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Tool Category
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mt-0.5">
              {category.name}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
              {category.description}
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                {tools.length} Tools Available
              </span>
              <span>• 100% Free & Browser-Based</span>
            </div>
          </div>
        </div>
      </div>

      <AdSlot position="top" />

      {/* In-category Search bar */}
      <div className="my-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Filter in ${category.name}...`}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <span className="text-xs text-slate-400">
          Showing {filteredTools.length} of {tools.length} tools
        </span>
      </div>

      {/* Grid of Tools */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
          {filteredTools.map((t) => (
            <ToolCard
              key={t.id}
              tool={t}
              isFavorite={favorites.includes(t.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectTool}
            />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500">No tools found matching &quot;{searchQuery}&quot;.</p>
        </div>
      )}

      <AdSlot position="bottom" />
    </div>
  );
};
