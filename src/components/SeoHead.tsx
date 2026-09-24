import React, { useEffect } from 'react';
import { ToolDefinition, Category, PageView } from '../types';

interface SeoHeadProps {
  currentView?: PageView;
  tool?: ToolDefinition;
  category?: Category;
  pageTitle?: string;
  pageDesc?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ currentView, tool, category, pageTitle, pageDesc }) => {
  useEffect(() => {
    let title = 'FreeToolsHub — 100+ Free Online Tools for Everyday Tasks';
    let description =
      'Fast, simple, and 100% free online tools for images, PDFs, text, calculations, converters, and developers. Browser-side processing with zero uploads.';
    let canonicalUrl = window.location.origin + window.location.pathname;

    if (tool) {
      title = `${tool.name} - Free Online Tool | FreeToolsHub`;
      description = tool.description.slice(0, 155);
      canonicalUrl = `${window.location.origin}/tools/${tool.slug}`;
    } else if (category) {
      title = `${category.name} - Free Online Tools | FreeToolsHub`;
      description = `Explore free online ${category.name.toLowerCase()} for browser-side file processing, conversions, and productivity without installation.`;
      canonicalUrl = `${window.location.origin}/categories/${category.slug}`;
    } else if (currentView === 'popular') {
      title = 'Most Popular Free Online Tools | FreeToolsHub';
      description = 'Top-rated, trending free browser utilities including Image Compressors, PDF Mergers, Word Counters, and Calculators.';
    } else if (currentView === 'all-tools') {
      title = 'All 100+ Free Online Tools Directory | FreeToolsHub';
      description = 'Browse our complete catalog of 100+ client-side utility tools categorized by discipline.';
    } else if (currentView === 'categories') {
      title = 'Categories Overview | FreeToolsHub';
      description = 'Explore all online tool collections by category: Image, PDF, Text, Calculations, Converters, and more.';
    } else if (currentView === 'about') {
      title = 'About Us & Privacy Philosophy | FreeToolsHub';
      description = 'Learn about our mission to provide high-speed, 100% private, client-side web utility tools without subscriptions.';
    } else if (currentView === 'contact') {
      title = 'Contact & Tool Feedback | FreeToolsHub';
      description = 'Get in touch with the FreeToolsHub engineering team for suggestions, bug reports, and partnership inquiries.';
    } else if (currentView === 'privacy') {
      title = 'Privacy Policy | FreeToolsHub';
      description = 'Read how FreeToolsHub respects your data privacy with 100% in-browser processing.';
    } else if (currentView === 'terms') {
      title = 'Terms of Service | FreeToolsHub';
      description = 'Terms of service and usage conditions for FreeToolsHub online utilities.';
    } else if (currentView === 'disclaimer') {
      title = 'Disclaimer | FreeToolsHub';
      description = 'Medical, financial, and operational disclaimers for FreeToolsHub tools and calculations.';
    } else if (pageTitle) {
      title = `${pageTitle} | FreeToolsHub`;
      if (pageDesc) description = pageDesc;
    }

    // Update document title
    document.title = title;

    // Update meta description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', description);

    // Update og:title
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', title);

    // Update og:description
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', description);

    // Update canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl);
    }

    // Update dynamic JSON-LD
    const existingLd = document.getElementById('dynamic-json-ld');
    if (existingLd) existingLd.remove();

    const script = document.createElement('script');
    script.id = 'dynamic-json-ld';
    script.type = 'application/ld+json';

    if (tool) {
      const ldData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebApplication',
            name: tool.name,
            url: canonicalUrl,
            applicationCategory: 'UtilitiesApplication',
            operatingSystem: 'All',
            description: tool.description,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: window.location.origin,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: tool.category.replace('-', ' '),
                item: `${window.location.origin}/categories/${tool.category}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: tool.name,
                item: canonicalUrl,
              },
            ],
          },
          ...(tool.faqs && tool.faqs.length > 0
            ? [
                {
                  '@type': 'FAQPage',
                  mainEntity: tool.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.answer,
                    },
                  })),
                },
              ]
            : []),
        ],
      };
      script.textContent = JSON.stringify(ldData);
      document.head.appendChild(script);
    }
  }, [tool, category, pageTitle, pageDesc]);

  return null;
};
