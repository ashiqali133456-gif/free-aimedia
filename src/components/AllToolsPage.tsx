import React, { useState, useMemo } from 'react';
import { Category, ToolDefinition } from '../types';
import { Breadcrumbs } from './Breadcrumbs';
import { ToolCard } from './ToolCard';
import { AdSlot } from './AdSlot';
import { Search, Filter, Sparkles, SlidersHorizontal } from 'lucide-react';

interface AllToolsPageProps {
  categories: Category[];
  tools: ToolDefinition[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectTool: (tool: ToolDefinition) => void;
  onSelectCategory: (category: Category) => void;
}

export const AllToolsPage: React.FC<AllToolsPageProps> = ({
  categories,
  tools,
  favorites,
  onToggleFavorite,
  onSelectTool,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'alpha' | 'category'>('popular');

  const filteredTools = useMemo(() => {
    let list = tools.filter((t) => {
      const matchCat = selectedCatId === 'all' || t.category === selectedCatId;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (t.keywords && t.keywords.some((k) => k.toLowerCase().includes(q)));
      return matchCat && matchQuery;
    });

    if (sortBy === 'alpha') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'popular') {
      list = [...list].sort((a, b) => ((b.popular || b.isPopular) ? 1 : 0) - ((a.popular || a.isPopular) ? 1 : 0));
    } else if (sortBy === 'category') {
      list = [...list].sort((a, b) => a.category.localeCompare(b.category));
    }

    return list;
  }, [tools, selectedCatId, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left space-y-6">
      <Breadcrumbs items={[{ label: 'All Tools Directory' }]} />

      <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Complete Tools Directory ({tools.length} Free Tools)
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
          Browse, filter, and search our comprehensive library of browser-based utilities. All tools are 100% free with
          no registration required.
        </p>

        {/* Filters Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools by name, keyword or tag..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Controls: Category & Sort dropdowns */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Filter className="w-3.5 h-3.5" />
              <select
                value={selectedCatId}
                onChange={(e) => setSelectedCatId(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                <option value="all">All Categories ({tools.length})</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({tools.filter((t) => t.category === c.id).length})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'popular' | 'alpha' | 'category')}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                <option value="popular">Sort: Popular First</option>
                <option value="alpha">Sort: Alphabetical (A-Z)</option>
                <option value="category">Sort: By Category</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <AdSlot position="top" />

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorite={favorites.includes(tool.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectTool}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 text-sm">No tools found matching your current filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCatId('all');
            }}
            className="mt-3 px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      <AdSlot position="bottom" />
    </div>
  );
};
