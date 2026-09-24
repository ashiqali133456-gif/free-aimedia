import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onHome?: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onHome }) => {
  return (
    <nav aria-label="Breadcrumbs" className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-6 flex-wrap">
      <button
        onClick={onHome || items[0]?.onClick || (() => { window.location.hash = ''; })}
        className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:underline"
        aria-label="Home"
      >
        <Home className="w-4 h-4 mr-1" />
        <span>Home</span>
      </button>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" />
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:underline font-medium text-slate-600 dark:text-slate-300"
            >
              {item.label}
            </button>
          ) : (
            <span className="font-semibold text-slate-800 dark:text-slate-100 truncate max-w-[240px] sm:max-w-none" aria-current="page">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
