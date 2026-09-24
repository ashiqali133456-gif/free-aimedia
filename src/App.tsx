import React, { useState, useEffect, useCallback } from 'react';
import { PageView, ToolDefinition, Category } from './types';
import { CATEGORIES } from './data/categories';
import { TOOLS } from './data/tools';

// Layout & Navigation Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { SeoHead } from './components/SeoHead';

// Page Views
import { HomePage } from './components/HomePage';
import { ToolPage } from './components/ToolPage';
import { CategoryPage } from './components/CategoryPage';
import { AllToolsPage } from './components/AllToolsPage';
import { CategoriesOverviewPage } from './components/CategoriesOverviewPage';
import { PopularToolsPage } from './components/PopularToolsPage';
import { TrustPage } from './components/TrustPages';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedTool, setSelectedTool] = useState<ToolDefinition | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('freetoolshub_dark');
      return saved !== null ? saved === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('freetoolshub_dark', darkMode.toString());
    } catch {
      // Storage unavailable
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('freetoolshub_favorites');
      return saved ? JSON.parse(saved) : ['image-compressor', 'merge-pdf', 'word-counter', 'age-calculator'];
    } catch {
      return ['image-compressor', 'merge-pdf', 'word-counter', 'age-calculator'];
    }
  });

  const toggleFavorite = useCallback((toolId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = prev.includes(toolId) ? prev.filter((id) => id !== toolId) : [...prev, toolId];
      try {
        localStorage.setItem('freetoolshub_favorites', JSON.stringify(next));
      } catch {
        // Storage unavailable
      }
      return next;
    });
  }, []);

  // Recents state
  const [recentToolIds, setRecentToolIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('freetoolshub_recents');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const addToRecents = useCallback((toolId: string) => {
    setRecentToolIds((prev) => {
      const next = [toolId, ...prev.filter((id) => id !== toolId)].slice(0, 10);
      try {
        localStorage.setItem('freetoolshub_recents', JSON.stringify(next));
      } catch {
        // Storage unavailable
      }
      return next;
    });
  }, []);

  // Sync state with URL pathname & hash
  const parseRoute = useCallback(() => {
    // Check hash first (ideal for GitHub Pages subpath hosting e.g. /repo/#/tool/slug)
    const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase().replace(/\/+$/, '');
    const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, '');

    let route = '';
    if (rawHash) {
      route = rawHash;
    } else if (rawPath && rawPath !== '' && rawPath !== '/') {
      // Extract the last path segments if hosted on a subpath (e.g. /username/repo/tool/slug)
      const segments = rawPath.split('/').filter(Boolean);
      // Check if known route keywords appear in segments
      const toolIdx = segments.indexOf('tool');
      const toolsIdx = segments.indexOf('tools');
      const catIdx = segments.indexOf('category');
      const catsIdx = segments.indexOf('categories');

      if (toolIdx !== -1 && toolIdx + 1 < segments.length) {
        route = `tool/${segments[toolIdx + 1]}`;
      } else if (toolsIdx !== -1 && toolsIdx + 1 < segments.length) {
        route = `tools/${segments[toolsIdx + 1]}`;
      } else if (catIdx !== -1 && catIdx + 1 < segments.length) {
        route = `category/${segments[catIdx + 1]}`;
      } else if (catsIdx !== -1 && catsIdx + 1 < segments.length) {
        route = `categories/${segments[catsIdx + 1]}`;
      } else {
        const last = segments[segments.length - 1] || '';
        route = last;
      }
    }

    if (!route) {
      setCurrentView('home');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    // Direct Privacy Policy route
    if (route === 'privacy-policy' || route === 'privacy') {
      setCurrentView('privacy');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    // Direct Terms of Service route
    if (route === 'terms' || route === 'terms-of-service') {
      setCurrentView('terms');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    // Direct Contact Us route
    if (route === 'contact' || route === 'contact-us') {
      setCurrentView('contact');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    // Direct About route
    if (route === 'about' || route === 'about-us') {
      setCurrentView('about');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    // Direct Disclaimer route
    if (route === 'disclaimer') {
      setCurrentView('disclaimer');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    // Core directory routes
    if (route === 'all-tools' || route === 'tools') {
      setCurrentView('all-tools');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    if (route === 'categories') {
      setCurrentView('categories');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    if (route === 'popular') {
      setCurrentView('popular');
      setSelectedTool(null);
      setSelectedCategory(null);
      return;
    }

    // Tools route: /tool/slug or /tools/slug
    if (route.startsWith('tool/') || route.startsWith('tools/')) {
      const slug = route.replace(/^tools?\//, '');
      const matched = TOOLS.find((t) => t.slug === slug);
      if (matched) {
        setSelectedTool(matched);
        const cat = CATEGORIES.find((c) => c.id === matched.category);
        setSelectedCategory(cat || null);
        setCurrentView('tool');
        addToRecents(matched.id);
        return;
      }
    }

    // Category route: /category/slug or /categories/slug
    if (route.startsWith('category/') || route.startsWith('categories/')) {
      const catSlug = route.replace(/^categor(y|ies)\//, '');
      const matched = CATEGORIES.find((c) => c.slug === catSlug || c.id === catSlug);
      if (matched) {
        setSelectedCategory(matched);
        setCurrentView('category');
        return;
      }
    }

    setCurrentView('home');
  }, [addToRecents]);

  useEffect(() => {
    parseRoute();
    window.addEventListener('popstate', parseRoute);
    window.addEventListener('hashchange', parseRoute);
    return () => {
      window.removeEventListener('popstate', parseRoute);
      window.removeEventListener('hashchange', parseRoute);
    };
  }, [parseRoute]);

  // Navigation handlers
  const navigateTo = (view: PageView, customPath: string = '') => {
    setCurrentView(view);
    let targetPath = customPath;
    if (!targetPath) {
      switch (view) {
        case 'home':
          targetPath = '';
          break;
        case 'privacy':
          targetPath = 'privacy-policy';
          break;
        case 'terms':
          targetPath = 'terms';
          break;
        case 'contact':
          targetPath = 'contact';
          break;
        case 'about':
          targetPath = 'about';
          break;
        case 'disclaimer':
          targetPath = 'disclaimer';
          break;
        case 'all-tools':
          targetPath = 'all-tools';
          break;
        case 'categories':
          targetPath = 'categories';
          break;
        case 'popular':
          targetPath = 'popular';
          break;
        default:
          targetPath = `${view}`;
      }
    } else {
      targetPath = targetPath.replace(/^\//, '');
    }

    // Support both root domain and subpath (e.g., https://username.github.io/repo/)
    if (window.location.hash || window.location.pathname.split('/').filter(Boolean).length > 1) {
      window.location.hash = `#/${targetPath}`;
    } else {
      window.history.pushState(null, '', targetPath ? `/${targetPath}` : '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTool = (tool: ToolDefinition) => {
    setSelectedTool(tool);
    const cat = CATEGORIES.find((c) => c.id === tool.category);
    setSelectedCategory(cat || null);
    setCurrentView('tool');
    addToRecents(tool.id);
    if (window.location.hash || window.location.pathname.split('/').filter(Boolean).length > 1) {
      window.location.hash = `#/tool/${tool.slug}`;
    } else {
      window.history.pushState(null, '', `/tool/${tool.slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView('category');
    if (window.location.hash || window.location.pathname.split('/').filter(Boolean).length > 1) {
      window.location.hash = `#/category/${category.slug}`;
    } else {
      window.history.pushState(null, '', `/category/${category.slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* SEO Document Head Injection */}
      <SeoHead
        currentView={currentView}
        tool={selectedTool || undefined}
        category={selectedCategory || undefined}
      />

      {/* Global Header */}
      <Header
        currentView={currentView}
        isDarkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            categories={CATEGORIES}
            tools={TOOLS}
            favorites={favorites}
            recentToolIds={recentToolIds}
            onToggleFavorite={toggleFavorite}
            onSelectTool={handleSelectTool}
            onSelectCategory={handleSelectCategory}
            onOpenSearch={() => setIsSearchOpen(true)}
            onViewAllTools={() => navigateTo('all-tools')}
          />
        )}

        {currentView === 'tool' && selectedTool && (
          <ToolPage
            tool={selectedTool}
            category={selectedCategory || undefined}
            allTools={TOOLS}
            isFavorite={favorites.includes(selectedTool.id)}
            onToggleFavorite={toggleFavorite}
            onSelectTool={handleSelectTool}
            onSelectCategory={handleSelectCategory}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {currentView === 'category' && selectedCategory && (
          <CategoryPage
            category={selectedCategory}
            tools={TOOLS.filter((t) => t.category === selectedCategory.id)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectTool={handleSelectTool}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {currentView === 'all-tools' && (
          <AllToolsPage
            categories={CATEGORIES}
            tools={TOOLS}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectTool={handleSelectTool}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentView === 'categories' && (
          <CategoriesOverviewPage
            categories={CATEGORIES}
            tools={TOOLS}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectTool={handleSelectTool}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentView === 'popular' && (
          <PopularToolsPage
            categories={CATEGORIES}
            tools={TOOLS}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectTool={handleSelectTool}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {['about', 'contact', 'privacy', 'terms', 'disclaimer'].includes(currentView) && (
          <TrustPage
            type={currentView as 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer'}
            onNavigateHome={() => navigateTo('home')}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Command/Search Palette (Ctrl+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        tools={TOOLS}
        onSelectTool={handleSelectTool}
      />
    </div>
  );
}
