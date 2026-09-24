import React, { useState } from 'react';
import { Share2, Image, Copy, Check, AlertCircle, Eye, ExternalLink } from 'lucide-react';
import { ToolDefinition } from '../types';

interface SocialToolsProps {
  tool: ToolDefinition;
}

export const SocialTools: React.FC<SocialToolsProps> = ({ tool }) => {
  // YouTube Title
  const [ytTitle, setYtTitle] = useState<string>('How to Build 100+ Free Online Web Tools in Modern React');

  // YouTube Description
  const [ytDesc, setYtDesc] = useState<string>(
    'In this comprehensive tutorial, explore how to build fast, client-side browser utilities.\n\nSubscribe for weekly software engineering tutorials!'
  );

  // Open Graph
  const [ogTitle, setOgTitle] = useState<string>('FreeToolsHub — 100+ Free Online Tools');
  const [ogDesc, setOgDesc] = useState<string>(
    'Fast, simple, and 100% free online tools for images, PDFs, calculators, and developers.'
  );
  const [ogImage, setOgImage] = useState<string>('https://images.unsplash.com/photo-1518770660439-4636190af475');
  const [ogUrl, setOgUrl] = useState<string>('https://freetoolshub.com');

  // Hashtags
  const [hashtagInput, setHashtagInput] = useState<string>('#webdev #javascript #coding #react #software #tools');

  // Instagram
  const [igCaption, setIgCaption] = useState<string>(
    'Supercharge your everyday workflow with fast in-browser utilities. Zero file uploads, complete privacy.\n\n#coding #developer #software #productivity'
  );

  // Twitter/X
  const [tweetText, setTweetText] = useState<string>(
    'Just launched FreeToolsHub: 100+ free online web tools running 100% in your browser. No sign-ups, no ads clutter, complete privacy!'
  );

  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 text-left">
      {/* 1. YouTube Thumbnail Size Tool */}
      {tool.slug === 'youtube-thumbnail-size-tool' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 text-xs space-y-1">
            <h4 className="font-bold text-blue-900 dark:text-blue-200">Official YouTube Thumbnail Specifications:</h4>
            <p className="text-slate-600 dark:text-slate-300">
              • Resolution: <strong>1280 × 720 pixels</strong> (minimum width 640 pixels)
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              • Aspect Ratio: <strong>16:9</strong>
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              • Max File Size: <strong>2 MB</strong>
            </p>
            <p className="text-slate-600 dark:text-slate-300">• Supported Formats: JPG, GIF, PNG</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden max-w-xl mx-auto bg-slate-900 relative aspect-video flex items-center justify-center text-white">
            <div className="text-center p-4">
              <Image className="w-12 h-12 mx-auto mb-2 text-slate-400" />
              <p className="font-bold text-sm">16:9 Thumbnail Canvas (1280 × 720 px)</p>
              <p className="text-xs text-slate-400 mt-1">
                Ensure crucial text is centered away from bottom-right timestamp badge
              </p>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono font-bold">
              12:45
            </div>
          </div>
        </div>
      )}

      {/* 2. YouTube Title Length Checker */}
      {tool.slug === 'youtube-title-length-checker' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <span>YouTube Video Title</span>
              <span className={ytTitle.length > 70 ? 'text-amber-500 font-bold' : 'text-slate-400'}>
                {ytTitle.length} / 100 characters
              </span>
            </div>
            <input
              type="text"
              value={ytTitle}
              onChange={(e) => setYtTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-medium text-sm"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase">Search & Mobile Truncation Preview</span>
            <div className="flex gap-3 items-start">
              <div className="w-32 h-20 rounded-lg bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center text-xs text-slate-500">
                Thumbnail
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 line-clamp-2">
                  {ytTitle || 'Your title here'}
                </h4>
                <p className="text-xs text-slate-400 mt-1">Channel Name • 12K views • 2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Open Graph Preview */}
      {tool.slug === 'open-graph-preview-generator' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">OG Title</label>
              <input
                type="text"
                value={ogTitle}
                onChange={(e) => setOgTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Target URL</label>
              <input
                type="text"
                value={ogUrl}
                onChange={(e) => setOgUrl(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                OG Description
              </label>
              <textarea
                rows={2}
                value={ogDesc}
                onChange={(e) => setOgDesc(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm"
              />
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden max-w-lg mx-auto bg-white dark:bg-slate-900 shadow-md">
            <div className="h-48 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
              <img src={ogImage} alt="OG Card" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-[11px] text-slate-400 uppercase font-semibold">freetoolshub.com</span>
              <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 mt-1 line-clamp-1">{ogTitle}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{ogDesc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. Twitter / X Character Counter */}
      {tool.slug === 'twitter-character-counter' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4 max-w-lg mx-auto">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Draft Post</label>
            <span
              className={`text-xs font-bold ${
                tweetText.length > 280 ? 'text-red-500' : tweetText.length > 260 ? 'text-amber-500' : 'text-blue-600'
              }`}
            >
              {280 - tweetText.length} characters left
            </span>
          </div>
          <textarea
            rows={5}
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-sans"
          />
        </div>
      )}

      {/* 5. Instagram & Hashtags */}
      {(tool.slug === 'instagram-caption-counter' ||
        tool.slug === 'youtube-hashtag-counter' ||
        tool.slug === 'youtube-description-counter') && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <textarea
            rows={6}
            value={tool.slug === 'youtube-hashtag-counter' ? hashtagInput : igCaption}
            onChange={(e) =>
              tool.slug === 'youtube-hashtag-counter' ? setHashtagInput(e.target.value) : setIgCaption(e.target.value)
            }
            className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-sans"
          />
        </div>
      )}

      {/* 6. Social Media Size Guide */}
      {tool.slug === 'social-media-image-size-guide' && (
        <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { platform: 'YouTube', type: 'Thumbnail', size: '1280 × 720 px (16:9)' },
              { platform: 'YouTube', type: 'Banner', size: '2560 × 1440 px' },
              { platform: 'Instagram', type: 'Square Post', size: '1080 × 1080 px (1:1)' },
              { platform: 'Instagram', type: 'Portrait Post', size: '1080 × 1350 px (4:5)' },
              { platform: 'Instagram', type: 'Stories & Reels', size: '1080 × 1920 px (9:16)' },
              { platform: 'Twitter / X', type: 'Header Banner', size: '1500 × 500 px' },
              { platform: 'Twitter / X', type: 'Single Post', size: '1600 × 900 px (16:9)' },
              { platform: 'LinkedIn', type: 'Company Banner', size: '1128 × 191 px' },
              { platform: 'TikTok', type: 'Video Screen', size: '1080 × 1920 px (9:16)' },
            ].map((g, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border">
                <span className="text-xs font-bold text-blue-600 block">{g.platform}</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 block mt-0.5">{g.type}</span>
                <span className="text-xs font-mono text-slate-500 mt-1 block">{g.size}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
