import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { ToolDefinition } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface ToolCardProps {
  tool: ToolDefinition;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelect: (tool: ToolDefinition) => void;
  className?: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  tool,
  isFavorite,
  onToggleFavorite,
  onSelect,
  className = '',
}) => {
  return (
    <div
      onClick={() => onSelect(tool)}
      id={`tool-card-${tool.slug}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(tool);
        }
      }}
      className={`group relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 p-5 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className}`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
            <DynamicIcon name={tool.iconName} className="w-5 h-5" />
          </div>

          <button
            type="button"
            onClick={(e) => onToggleFavorite(tool.id, e)}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-label={isFavorite ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`}
            className={`p-1.5 rounded-md transition-colors ${
              isFavorite
                ? 'text-amber-500 hover:text-amber-600 bg-amber-50 dark:bg-amber-950/40'
                : 'text-slate-300 dark:text-slate-600 hover:text-amber-500 dark:hover:text-amber-400'
            }`}
          >
            <Star className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-1.5">
          {tool.name}
        </h3>

        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {tool.shortDesc}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 dark:text-slate-500">
        <span className="capitalize">{tool.category.replace('-', ' ')}</span>
        <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
          Open tool <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </span>
      </div>
    </div>
  );
};
