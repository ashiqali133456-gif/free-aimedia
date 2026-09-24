import React, { useState } from 'react';
import { Category, ToolDefinition } from '../types';
import { CategoryCard } from './CategoryCard';
import { ToolCard } from './ToolCard';
import { AdSlot } from './AdSlot';
import { Search, Shield, Zap, Lock, Sparkles, ArrowRight, Star } from 'lucide-react';

interface HomePageProps {
  categories: Category[];
  tools: ToolDefinition[];
  favorites: string[];
  recentToolIds: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectTool: (tool: ToolDefinition) => void;
  onSelectCategory: (category: Category) => void;
  onOpenSearch: () => void;
  onViewAllTools: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  categories,
  tools,
  favorites,
  recentToolIds,
  onToggleFavorite,
  onSelectTool,
  onSelectCategory,
  onOpenSearch,
  onViewAllTools,
}) => {
  const [heroSearch, setHeroSearch] = useState('');

  // Trending / Popular tools
  const popularTools = tools.filter((t) => t.popular || t.isPopular).slice(0, 8);

  // Favorite tools
  const favoriteTools = tools.filter((t) => favorites.includes(t.id));

  // Quick keywords
  const popularKeywords = ['Compress Image', 'Merge PDF', 'Word Counter', 'Age Calculator', 'JSON Formatter', 'QR Code'];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Over 100+ Free Browser Utilities — Always Free</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            Fast, Free Online Tools <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Directly in Your Browser
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Convert, calculate, compress, and edit with zero software installations. All file processing is performed
            100% client-side for maximum privacy and lightning speed.
          </p>

          {/* Interactive Search Bar Trigger */}
          <div className="max-w-2xl mx-auto pt-2">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-white dark:bg-slate-850 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-lg shadow-slate-200/50 dark:shadow-none text-left transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 text-slate-400">
                <Search className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Search 100+ tools (e.g. PDF merge, resize image, JSON format)...
                </span>
              </div>
              <kbd className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-bold font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                Ctrl + K
              </kbd>
            </button>

            {/* Popular quick searches */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              <span className="text-xs text-slate-400 font-medium">Trending searches:</span>
              {popularKeywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => {
                    const matched = tools.find((t) => t.name.toLowerCase().includes(kw.toLowerCase()));
                    if (matched) onSelectTool(matched);
                    else onOpenSearch();
                  }}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-colors"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Value Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>100% Client-Side Privacy</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Instant Local Processing</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <Lock className="w-4 h-4 text-blue-500" />
              <span>No Sign-Up Required</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>Always Free Forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Banner AdSlot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot position="top" />
      </div>

      {/* Favorites Section if any */}
      {favoriteTools.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Your Favorite Tools</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favoriteTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                onSelect={onSelectTool}
              />
            ))}
          </div>
        </section>
      )}

      {/* Popular / Most Used Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Popular & Trending Tools</h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              The most frequently utilized daily utilities by designers, developers, and creators.
            </p>
          </div>
          <button
            onClick={onViewAllTools}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Explore all 100+ tools <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </section>

      {/* Browse by Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Explore by Category</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Organized collections spanning file management, computation, conversions, and web utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              toolCount={tools.filter((t) => t.category === cat.id).length}
              onSelect={onSelectCategory}
            />
          ))}
        </div>
      </section>

      {/* Middle In-feed AdSlot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot position="between-content" />
      </div>

      {/* Sample Highlights Per Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        {categories.slice(0, 4).map((cat) => {
          const catTools = tools.filter((t) => t.category === cat.id).slice(0, 4);
          return (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{cat.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{cat.description}</p>
                </div>
                <button
                  onClick={() => onSelectCategory(cat)}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  View all ({tools.filter((t) => t.category === cat.id).length}) <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catTools.map((tool) => (
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
      </section>

      {/* Platform Features / Why Choose FreeToolsHub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 text-left">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">Built for Privacy & Performance</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Why Millions Rely on In-Browser Tools
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Most online conversion portals upload your personal documents and images to remote cloud servers, storing
              copies or charging subscription fees. FreeToolsHub is engineered differently: all operations happen
              locally on your device inside your browser sandbox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-800">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                🔒
              </div>
              <h4 className="font-bold text-base">Zero Server Uploads</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Images, PDFs, and code remain entirely within your computer memory. Nothing is transmitted over the wire.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                ⚡
              </div>
              <h4 className="font-bold text-base">Zero Waiting Queues</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience instant results without waiting in conversion queues or dealing with file size limit paywalls.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold">
                💻
              </div>
              <h4 className="font-bold text-base">Works Everywhere</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fully responsive for iPhone, iPad, Android, macOS, Windows, and Linux. No apps or plugins required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom AdSlot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot position="bottom" />
      </div>
    </div>
  );
};
