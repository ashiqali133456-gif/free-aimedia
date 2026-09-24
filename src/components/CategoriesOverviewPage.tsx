import React from 'react';
import { Category, ToolDefinition } from '../types';
import { Breadcrumbs } from './Breadcrumbs';
import { CategoryCard } from './CategoryCard';
import { ToolCard } from './ToolCard';
import { AdSlot } from './AdSlot';
import { ArrowRight } from 'lucide-react';

interface CategoriesOverviewPageProps {
  categories: Category[];
  tools: ToolDefinition[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectTool: (tool: ToolDefinition) => void;
  onSelectCategory: (category: Category) => void;
}

export const CategoriesOverviewPage: React.FC<CategoriesOverviewPageProps> = ({
  categories,
  tools,
  favorites,
  onToggleFavorite,
  onSelectTool,
  onSelectCategory,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left space-y-10">
      <Breadcrumbs items={[{ label: 'Browse Categories' }]} />

      <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Browse Tools by Category
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
          Find the exact browser utility you need grouped by specialized discipline: images, PDF documents, text
          processing, calculators, converters, developer utilities, everyday productivity, and social media tools.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((c) => (
          <CategoryCard
            key={c.id}
            category={c}
            toolCount={tools.filter((t) => t.category === c.id).length}
            onSelect={onSelectCategory}
          />
        ))}
      </div>

      <AdSlot position="top" />

      {/* Each category section */}
      <div className="space-y-12">
        {categories.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat.id);
          return (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{cat.name}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cat.description}</p>
                </div>
                <button
                  onClick={() => onSelectCategory(cat)}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  View all ({catTools.length}) <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catTools.slice(0, 4).map((tool) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    isFavorite={favorites.includes(tool.id)}
                    onToggleFavorite={onToggleFavorite}
                    onSelect={onSelectTool}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <AdSlot position="bottom" />
    </div>
  );
};
