export type CategoryId =
  | 'image'
  | 'pdf'
  | 'text'
  | 'calculator'
  | 'developer'
  | 'qr-barcode'
  | 'utility'
  | 'social'
  | 'file'
  | 'color'
  | 'date-time'
  | 'converter';

export interface Category {
  id: CategoryId;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  shortDesc: string;
  description: string;
  keywords: string[];
  tags?: string[];
  popular?: boolean;
  isPopular?: boolean;
  iconName: string;
  howTo: string[];
  faqs: FAQItem[];
  supportedFormats?: string | string[];
  notice?: string;
}

export type PageView =
  | 'home'
  | 'all-tools'
  | 'categories'
  | 'category'
  | 'popular'
  | 'tool'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | '404';
