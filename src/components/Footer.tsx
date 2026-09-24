import React from 'react';
import { Shield, Lock, Zap, Heart } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors text-slate-600 dark:text-slate-400">
      {/* Privacy Promise Banner */}
      <div className="border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">100% In-Browser Privacy</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Your files never touch external servers.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Instant Execution</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">High-speed client-side processing.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex-shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">No Sign-up Required</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Every single tool is freely accessible.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm">
              FT
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white">
              FreeTools<span className="text-blue-600 dark:text-blue-400">Hub</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-4 leading-relaxed">
            Free online tools for everyday tasks. Fast, clean, accessible, and privacy-first browser utilities for creators, developers, students, and professionals.
          </p>
          <div className="text-xs text-slate-400 dark:text-slate-500">
            Engineered for modern web standards and client-side processing.
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/all-tools"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('all-tools');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                All Tools
              </a>
            </li>
            <li>
              <a
                href="/categories"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('categories');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="/popular"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('popular');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                Popular Tools
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-3">Top Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/categories"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('categories');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                Image Tools
              </a>
            </li>
            <li>
              <a
                href="/categories"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('categories');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                PDF Tools
              </a>
            </li>
            <li>
              <a
                href="/categories"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('categories');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                Text Tools
              </a>
            </li>
            <li>
              <a
                href="/categories"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('categories');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                Calculators & Converters
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-3">Legal & Trust</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('privacy');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium inline-block"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('terms');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium inline-block"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium inline-block"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('about');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/disclaimer"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('disclaimer');
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Sub-bar */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} FreeToolsHub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              id="partner-smartlink"
              href="https://bibleearthquake.com/abksrfbt0?key=452653f76eff9a1a6a951ba8a349bf8e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Recommended Links
            </a>
            <p className="flex items-center gap-1">
              Built for privacy, speed, and open utility.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
