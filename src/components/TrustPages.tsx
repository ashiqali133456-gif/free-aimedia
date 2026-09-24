import React, { useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import {
  Shield,
  Mail,
  CheckCircle2,
  AlertCircle,
  Info,
  Lock,
  ArrowLeft,
  Copy,
  Check,
  Send,
  ExternalLink,
  FileText,
  ServerOff,
  Database,
  HelpCircle,
  Sparkles,
  Layers,
  Scale,
  MessageSquare,
} from 'lucide-react';
import { PageView } from '../types';

interface TrustPageProps {
  onBackHome: () => void;
  onNavigate?: (view: PageView) => void;
}

const SUPPORT_EMAIL = 'ashiqali133456@gmail.com';

/* =========================================================================
   1. PRIVACY POLICY PAGE (/privacy-policy)
   ========================================================================= */
export const PrivacyPolicyPage: React.FC<TrustPageProps> = ({ onBackHome, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Accessible Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} onHome={onBackHome} />

      {/* Page Header with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Official Privacy Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Last Updated & Effective Date: <span className="font-medium text-slate-700 dark:text-slate-300">September 2026</span>
          </p>
        </div>

        <button
          onClick={onBackHome}
          id="privacy-back-home-top"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors self-start sm:self-auto shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Privacy Architecture Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2.5">
            <ServerOff className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">In-Browser Processing</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Your images, PDFs, text, and files are processed inside your device RAM. No file uploads.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2.5">
            <Database className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">Zero File Retention</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            We maintain zero server storage for user documents. Closing the tab purges memory completely.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2.5">
            <Lock className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">Local Preferences Only</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            LocalStorage is used strictly for non-sensitive theme (dark/light) and favorite tool bookmarks.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2.5">
            <Shield className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">No Accounts Required</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            No signup forms, passwords, or personal profiling. Instant utility access for everyone.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <article className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm text-left">
        {/* Table of Contents Quick Nav */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Table of Contents</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-blue-600 dark:text-blue-400">
            <a href="#section-1" className="hover:underline">1. Introduction & Overview</a>
            <a href="#section-2" className="hover:underline">2. Information We Collect (and Do Not Collect)</a>
            <a href="#section-3" className="hover:underline">3. Client-Side Processing Architecture</a>
            <a href="#section-4" className="hover:underline">4. How Collected Information Is Used</a>
            <a href="#section-5" className="hover:underline">5. Cookies & Local Storage Technologies</a>
            <a href="#section-6" className="hover:underline">6. Analytics & Performance Measurements</a>
            <a href="#section-7" className="hover:underline">7. Third-Party Services & Content Delivery</a>
            <a href="#section-8" className="hover:underline">8. Advertising & Advertising Cookies</a>
            <a href="#section-9" className="hover:underline">9. Data Security Practices</a>
            <a href="#section-10" className="hover:underline">10. Children&apos;s Online Privacy (COPPA)</a>
            <a href="#section-11" className="hover:underline">11. Links to External Websites</a>
            <a href="#section-12" className="hover:underline">12. User Privacy Choices & Opt-Outs</a>
            <a href="#section-13" className="hover:underline">13. Policy Updates & Revision History</a>
            <a href="#section-14" className="hover:underline">14. How to Contact Us</a>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-8 leading-relaxed text-sm">
          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              1. Introduction & Overview
            </h2>
            <p>
              FreeToolsHub (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;, or &ldquo;the platform&rdquo;) operates this online suite of web utilities, calculators, converters, image processors, and developer tools. We are firmly committed to user privacy and radical data minimization.
            </p>
            <p className="mt-2">
              This Privacy Policy details the types of information that may be gathered when you visit or interact with FreeToolsHub, how such information is handled, and the technical safeguards implemented to protect your privacy. By using FreeToolsHub, you consent to the data practices described herein.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              2. Information We Collect (and Do Not Collect)
            </h2>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              A. User Content & Files (Zero Server Collection):
            </p>
            <p>
              When you use our PDF tools, image compressors, converters, text formatters, or code validators, <strong>your documents, files, images, code snippets, and strings are never uploaded, transmitted, or saved to our servers</strong>. All transformations execute strictly on your device using client-side JavaScript, Web Workers, HTML5 Canvas, and WebAssembly.
            </p>

            <p className="font-semibold text-slate-800 dark:text-slate-200 mt-4">
              B. Personal Information:
            </p>
            <p>
              We do not require user accounts, email registration, credit cards, or profile creation to use our tools. The only instance where you may voluntarily provide personal information is when you choose to submit an inquiry through our <button onClick={() => onNavigate ? onNavigate('contact') : undefined} className="text-blue-600 dark:text-blue-400 underline font-medium">Contact Us page</button> or email us directly at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 dark:text-blue-400 font-mono underline">{SUPPORT_EMAIL}</a>.
            </p>

            <p className="font-semibold text-slate-800 dark:text-slate-200 mt-4">
              C. Standard Technical Log Data:
            </p>
            <p>
              Like virtually all websites delivered over the World Wide Web, our content delivery network (CDN) and web hosting infrastructure may automatically receive standard server log entries from your browser. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Internet Protocol (IP) address (used transiently for geolocation routing and DDoS protection)</li>
              <li>Browser type, version, and operating system</li>
              <li>Referring website address and HTTP request timestamps</li>
              <li>Requested page URLs and asset resource paths</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              3. Client-Side Browser Processing Architecture
            </h2>
            <p>
              FreeToolsHub was intentionally engineered using an offline-capable, client-side first architecture. By leveraging modern Web APIs:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>PDF Operations:</strong> Compiled in memory using client-side WebAssembly and JavaScript (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">pdf-lib</code>).</li>
              <li><strong>Image Processing:</strong> Rendered directly onto an off-screen HTML5 Canvas without network calls.</li>
              <li><strong>Cryptographic & Password Generation:</strong> Uses the secure <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">crypto.getRandomValues</code> API built into your browser.</li>
              <li><strong>Calculations & Conversions:</strong> Computed via local JavaScript execution.</li>
            </ul>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">
              Once you close or refresh your browser tab, volatile memory allocated by your browser for these operations is immediately released and freed.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              4. How Collected Information Is Used
            </h2>
            <p>Any technical or voluntarily provided information is used exclusively to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Operate, deliver, and maintain the functionality of FreeToolsHub.</li>
              <li>Preserve your on-device display theme preference and bookmarked favorite tools.</li>
              <li>Diagnose technical bugs, protect against cyber attacks, and maintain platform stability.</li>
              <li>Respond to direct messages, feature requests, or bug reports submitted by users.</li>
            </ul>
            <p className="mt-2 font-medium text-slate-800 dark:text-slate-200">
              We never sell, rent, monetize, or disclose user data to data brokers or marketing firms.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              5. Cookies & Local Storage Technologies
            </h2>
            <p>
              FreeToolsHub does not set proprietary first-party tracking cookies. However, we utilize HTML5 Web Storage (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">localStorage</code>) to enhance your browsing experience:
            </p>
            <div className="overflow-x-auto my-3">
              <table className="w-full text-xs text-left border border-slate-200 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  <tr>
                    <th className="p-2.5 font-semibold">Key Identifier</th>
                    <th className="p-2.5 font-semibold">Purpose</th>
                    <th className="p-2.5 font-semibold">Storage Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="p-2.5 font-mono text-blue-600 dark:text-blue-400">theme</td>
                    <td className="p-2.5">Remembers your preference for Dark Mode or Light Mode</td>
                    <td className="p-2.5">Client Browser (LocalStorage)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono text-blue-600 dark:text-blue-400">freetoolshub_favorites</td>
                    <td className="p-2.5">Stores the list of tool IDs you have starred as favorites</td>
                    <td className="p-2.5">Client Browser (LocalStorage)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono text-blue-600 dark:text-blue-400">freetoolshub_recents</td>
                    <td className="p-2.5">Holds IDs of your recently opened tools for quick access</td>
                    <td className="p-2.5">Client Browser (LocalStorage)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              These values remain strictly inside your browser and can be deleted at any time through your browser settings by clearing site data.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              6. Analytics & Performance Measurements
            </h2>
            <p>
              To ensure our website remains fast and reliable across different continents and devices, we may review high-level, aggregate web traffic metrics (such as aggregate page views, browser compatibility reports, and CDN cache hit ratios).
            </p>
            <p className="mt-2">
              We do not use invasive keystroke recorders, mouse-tracking heatmaps, or cross-site fingerprinting technologies. Any telemetry used is strictly aggregated and non-identifiable.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              7. Third-Party Services & Content Delivery
            </h2>
            <p>
              To deliver our web assets with optimal speed and security, FreeToolsHub utilizes trusted third-party infrastructure providers:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Hosting & Edge Delivery:</strong> Cloud infrastructure (such as Netlify or Google Cloud) provides global edge SSL termination and asset delivery.</li>
              <li><strong>Web Fonts & Icons:</strong> Modern typography and SVG vector libraries loaded securely via standard web standards.</li>
            </ul>
            <p className="mt-2">
              These infrastructure partners operate under strict privacy compliance frameworks (including GDPR, CCPA, and ISO 27001 standards).
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              8. Advertising & Advertising Cookies
            </h2>
            <p>
              To maintain FreeToolsHub as a 100% free resource for everyone without charging subscription fees or paywalling tools, we may display third-party advertisements across non-intrusive ad placements on our website.
            </p>
            
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 my-4 text-xs sm:text-sm">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5 mb-2">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>Third-Party Advertising Vendors (e.g. Google AdSense & Partners)</span>
              </h3>
              <p className="text-blue-900/90 dark:text-blue-200/90 leading-relaxed">
                Third-party vendors, including Google, may use cookies to serve ads based on a user&apos;s prior visits to our website or other websites on the internet. Google&apos;s use of advertising cookies (such as the DART cookie) enables it and its partners to serve ads based on your visit to FreeToolsHub and/or other sites across the Internet.
              </p>
              <p className="mt-2 text-blue-900/90 dark:text-blue-200/90 leading-relaxed">
                Users may opt out of personalized advertising by visiting{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline inline-flex items-center gap-0.5"
                >
                  Google Ads Settings <ExternalLink className="w-3 h-3" />
                </a>{' '}
                or through the Digital Advertising Alliance at{' '}
                <a
                  href="https://www.aboutads.info/choices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline inline-flex items-center gap-0.5"
                >
                  aboutads.info <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs">
              <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                Advertising Network Disclosure & Updates:
              </span>
              <p className="text-slate-500 dark:text-slate-400">
                If additional advertising networks or affiliate partners are integrated in the future, this section will be promptly updated with the specific network names, operational guidelines, and relevant privacy policy opt-out links.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              9. Data Security Practices
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards. However, our strongest security feature is architectural: <strong>we cannot leak, lose, or expose data that we never collect</strong>.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>All web traffic is enforced over Hypertext Transfer Protocol Secure (HTTPS) using TLS 1.3 encryption.</li>
              <li>Modern security headers (Content Security Policy, X-Content-Type-Options, Referrer-Policy) are enabled to mitigate cross-site scripting (XSS) and clickjacking.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              10. Children&apos;s Online Privacy (COPPA)
            </h2>
            <p>
              FreeToolsHub complies with the Children&apos;s Online Privacy Protection Act (COPPA) and similar global statutes. We do not knowingly target or collect personal identifiable information from children under 13 years of age. If you believe a child has provided us with personal information via direct contact, please reach out to <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 dark:text-blue-400 font-mono underline">{SUPPORT_EMAIL}</a> and we will delete it immediately.
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              11. Links to External Websites
            </h2>
            <p>
              FreeToolsHub may contain hyperlinks to third-party web resources (such as RFC specifications, privacy opt-out portals, or social platforms). We have no control over and assume no responsibility for the privacy policies or content of third-party websites. We encourage you to review their independent privacy terms.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              12. User Privacy Choices & Opt-Outs
            </h2>
            <p>You have full autonomy over your privacy when using FreeToolsHub:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Clearing Saved Preferences:</strong> You can clear your theme and favorite tools at any time by wiping cookies and LocalStorage via your browser&apos;s settings.</li>
              <li><strong>Blocking Cookies:</strong> You can configure your browser to reject all third-party cookies or alert you when cookies are being set.</li>
              <li><strong>Global Privacy Control (GPC) & Do Not Track:</strong> We honor browser-level privacy signals and do not override user-agent privacy settings.</li>
              <li><strong>Ad Personalization Opt-Out:</strong> Visit <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">aboutads.info</a> or <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">networkadvertising.org</a> to manage personalized ad choices.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section id="section-13" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              13. Policy Updates & Revision History
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect technological changes, new tool capabilities, or evolving legal frameworks. Any revisions will be published on this page along with an updated &ldquo;Last Updated&rdquo; date at the top. We encourage you to review this page occasionally.
            </p>
          </section>

          {/* Section 14 */}
          <section id="section-14" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              14. How to Contact the Website Owner
            </h2>
            <p>
              If you have any questions, suggestions, or concerns regarding this Privacy Policy or our client-side processing practices, please contact us directly:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">FreeToolsHub Support & Privacy Inquiries</p>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 dark:text-blue-400 font-mono text-sm underline">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <button
                onClick={() => onNavigate ? onNavigate('contact') : undefined}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Go to Contact Form
              </button>
            </div>
          </section>
        </div>
      </article>

      {/* Bottom Back to Home */}
      <div className="mt-8 text-center">
        <button
          onClick={onBackHome}
          id="privacy-back-home-bottom"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   2. TERMS OF SERVICE PAGE (/terms)
   ========================================================================= */
export const TermsPage: React.FC<TrustPageProps> = ({ onBackHome, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Accessible Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} onHome={onBackHome} />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>User Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Effective Date: <span className="font-medium text-slate-700 dark:text-slate-300">September 2026</span>
          </p>
        </div>

        <button
          onClick={onBackHome}
          id="terms-back-home-top"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors self-start sm:self-auto shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Key Terms Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">Free To Use</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            All 100+ utilities are accessible free of charge for personal and professional tasks.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2.5">
            <Shield className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">You Own Your Data</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            You retain 100% full intellectual property and ownership in any content you process.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2.5">
            <AlertCircle className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">Backup Your Files</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Always keep original copies before running compression, cropping, or conversion operations.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2.5">
            <FileText className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">&ldquo;As-Is&rdquo; Utility</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Calculations and tools are provided for general productivity without professional warranties.
          </p>
        </div>
      </div>

      {/* Main Content Article */}
      <article className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm text-left">
        {/* Table of Contents Quick Nav */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Table of Contents</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-blue-600 dark:text-blue-400">
            <a href="#terms-1" className="hover:underline">1. Acceptance of Terms</a>
            <a href="#terms-2" className="hover:underline">2. Description of Services & Use of Website</a>
            <a href="#terms-3" className="hover:underline">3. Acceptable Use Policy & Restrictions</a>
            <a href="#terms-4" className="hover:underline">4. Tool Limitations & Accuracy</a>
            <a href="#terms-5" className="hover:underline">5. User Responsibility & File Integrity</a>
            <a href="#terms-6" className="hover:underline">6. Intellectual Property Rights</a>
            <a href="#terms-7" className="hover:underline">7. Third-Party Services, Links & Ads</a>
            <a href="#terms-8" className="hover:underline">8. Website Availability & Maintenance</a>
            <a href="#terms-9" className="hover:underline">9. Disclaimer of Warranties</a>
            <a href="#terms-10" className="hover:underline">10. Limitation of Liability</a>
            <a href="#terms-11" className="hover:underline">11. Changes to the Service</a>
            <a href="#terms-12" className="hover:underline">12. Changes to the Terms</a>
            <a href="#terms-13" className="hover:underline">13. Governing Law & Severability</a>
            <a href="#terms-14" className="hover:underline">14. Contact Information</a>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-8 leading-relaxed text-sm">
          {/* Section 1 */}
          <section id="terms-1" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              1. Acceptance of Terms
            </h2>
            <p>
              Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before accessing or using FreeToolsHub (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;, or &ldquo;the website&rdquo;). By accessing, browsing, or utilizing any online tools, converters, calculators, or content on this website, you agree to be bound by these Terms.
            </p>
            <p className="mt-2">
              If you do not agree to all the terms and conditions set forth in this agreement, you must immediately discontinue your use of FreeToolsHub.
            </p>
          </section>

          {/* Section 2 */}
          <section id="terms-2" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              2. Description of Services & Use of Website
            </h2>
            <p>
              FreeToolsHub provides an interactive catalog of 100+ free online utilities across categories including Image Manipulation, PDF Management, Text Engineering, Mathematical & Financial Calculators, Unit Converters, Developer Syntax Tools, Barcode/QR Generation, and Everyday Timers.
            </p>
            <p className="mt-2">
              We grant you a personal, non-exclusive, non-transferable, revocable license to access and use the website and tools strictly in accordance with these Terms.
            </p>
          </section>

          {/* Section 3 */}
          <section id="terms-3" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              3. Acceptable Use Policy & Restrictions
            </h2>
            <p>You agree to use FreeToolsHub only for lawful, legitimate purposes. You explicitly agree NOT to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use any tool to process, modify, decrypt, or distribute content that infringes upon third-party intellectual property, privacy, or proprietary rights.</li>
              <li>Attempt to crack, decrypt, or unlock documents or PDFs for which you do not have explicit legal authorization or ownership.</li>
              <li>Use our developer or regex utilities to synthesize malware, exploit payloads, or malicious scripts.</li>
              <li>Launch automated denial-of-service (DoS) attacks, flood requests, or attempt to overwhelm or degrade website infrastructure.</li>
              <li>Circumvent or tamper with client-side security controls or content delivery protections.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="terms-4" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              4. Tool Limitations & Accuracy
            </h2>
            <p>
              Because FreeToolsHub runs client-side inside your browser:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Hardware & Memory Limitations:</strong> Tool performance (such as processing high-resolution images or 500-page PDF files) is contingent upon your device&apos;s available RAM, CPU speed, and browser capabilities. Very large files may be constrained by your browser&apos;s memory limit.</li>
              <li><strong>Calculations & Formulations:</strong> Financial, tax, loan, calorie, and health calculators provide mathematical estimates based on generalized models and user-supplied numbers. They do not account for individual escrow agreements, localized municipal taxes, or medical conditions.</li>
              <li><strong>No Professional Advice:</strong> No tool output should be considered certified accounting, legal, architectural, engineering, or medical advice.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="terms-5" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              5. User Responsibility & File Integrity
            </h2>
            <p>
              You are solely responsible for ensuring the backup, preservation, and integrity of your files. While our client-side tools operate non-destructively in browser RAM and generate separate output downloads:
            </p>
            <p className="mt-2 font-medium text-slate-800 dark:text-slate-200">
              You must always maintain an original, unaltered backup copy of your source images, PDF documents, and datasets prior to executing compression, resizing, merging, or format conversion.
            </p>
          </section>

          {/* Section 6 */}
          <section id="terms-6" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              6. Intellectual Property Rights
            </h2>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              A. FreeToolsHub Intellectual Property:
            </p>
            <p>
              All website source code, visual layouts, branding, logos, documentation, custom icons, styling, and software architecture are the exclusive property of FreeToolsHub and its creators, protected by international copyright and intellectual property laws.
            </p>

            <p className="font-semibold text-slate-800 dark:text-slate-200 mt-4">
              B. Your User Content & Uploaded Assets:
            </p>
            <p>
              <strong>You retain 100% full, uncompromised ownership and copyright over any files, images, documents, text, or code you process using our tools.</strong> FreeToolsHub claims zero ownership, license, or rights in your content. Furthermore, because files are processed client-side and never saved to a server, we do not inspect or store your intellectual property.
            </p>
          </section>

          {/* Section 7 */}
          <section id="terms-7" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              7. Third-Party Services, Links & Advertisements
            </h2>
            <p>
              FreeToolsHub may display links to external websites, technical standards, or third-party advertisements (such as Google AdSense). We do not endorse, investigate, or assume legal liability for any goods, services, representations, or content offered by third-party advertisers or websites. Your interactions with third parties are solely between you and the respective third party.
            </p>
          </section>

          {/* Section 8 */}
          <section id="terms-8" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              8. Website Availability & Maintenance
            </h2>
            <p>
              FreeToolsHub is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. While we endeavor to maintain 99.9% uptime and rapid CDN delivery:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>We do not guarantee uninterrupted, error-free, or continuous operation.</li>
              <li>We may perform routine maintenance, updates, or infrastructure improvements at any time without prior notice.</li>
              <li>We shall not be liable for service disruptions caused by telecommunications failures, internet outages, or browser incompatibilities.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="terms-9" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              9. Disclaimer of Warranties
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 uppercase leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, FREETOOLSHUB AND ITS OPERATORS EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, AND NON-INFRINGEMENT. NO ADVICE OR INFORMATION OBTAINED FROM THE WEBSITE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.
            </div>
          </section>

          {/* Section 10 */}
          <section id="terms-10" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              10. Limitation of Liability
            </h2>
            <p>
              To the fullest extent allowed by applicable law, in no event shall FreeToolsHub, its operators, creators, affiliates, or contributors be liable for any indirect, incidental, special, consequential, or punitive damages (including, without limitation, damages for loss of profits, data, business interruption, system failure, or loss of goodwill) arising out of or in connection with your use or inability to use our tools, even if advised of the possibility of such damages.
            </p>
          </section>

          {/* Section 11 */}
          <section id="terms-11" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              11. Changes to the Service
            </h2>
            <p>
              We reserve the right to add, modify, enhance, or discontinue any specific tool, algorithm, feature, or component of FreeToolsHub at any time, temporarily or permanently, with or without notice, in our sole discretion.
            </p>
          </section>

          {/* Section 12 */}
          <section id="terms-12" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              12. Changes to the Terms
            </h2>
            <p>
              We may revise these Terms of Service from time to time. When updates are published, the &ldquo;Effective Date&rdquo; at the top of this page will be revised. Your continued use of FreeToolsHub following the posting of revised Terms constitutes your acceptance of such changes.
            </p>
          </section>

          {/* Section 13 */}
          <section id="terms-13" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              13. Governing Law & Severability
            </h2>
            <p>
              These Terms shall be interpreted and governed in accordance with general contract principles and applicable laws, without regard to conflict of law principles. If any provision of these Terms is determined by a court of competent jurisdiction to be invalid or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          {/* Section 14 */}
          <section id="terms-14" className="scroll-mt-20">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              14. Contact Information
            </h2>
            <p>
              If you have any questions or clarifications regarding these Terms of Service, please contact us:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">FreeToolsHub Terms & Inquiries</p>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 dark:text-blue-400 font-mono text-sm underline">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <button
                onClick={() => onNavigate ? onNavigate('contact') : undefined}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Go to Contact Form
              </button>
            </div>
          </section>
        </div>
      </article>

      {/* Bottom Back to Home */}
      <div className="mt-8 text-center">
        <button
          onClick={onBackHome}
          id="terms-back-home-bottom"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   3. CONTACT US PAGE (/contact)
   ========================================================================= */
export const ContactPage: React.FC<TrustPageProps> = ({ onBackHome }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isCopied, setIsCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<null | 'opened' | 'copied'>(null);

  // Field validation helper
  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Your name is required.';
      else if (value.trim().length < 2) error = 'Name must be at least 2 characters.';
    } else if (name === 'email') {
      if (!value.trim()) error = 'Email address is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        error = 'Please enter a valid email address (e.g. name@example.com).';
      }
    } else if (name === 'subject') {
      if (!value.trim()) error = 'Subject line is required.';
      else if (value.trim().length < 3) error = 'Subject must be at least 3 characters.';
    } else if (name === 'message') {
      if (!value.trim()) error = 'Message body is required.';
      else if (value.trim().length < 10) error = 'Message must be at least 10 characters.';
    }
    return error;
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formState[field as keyof typeof formState]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const validateAll = () => {
    const newErrors: { [key: string]: string } = {
      name: validateField('name', formState.name),
      email: validateField('email', formState.email),
      subject: validateField('subject', formState.subject),
      message: validateField('message', formState.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    return !Object.values(newErrors).some((e) => e !== '');
  };

  // Prepares the mailto link
  const buildMailtoUrl = () => {
    const subjectLine = `[FreeToolsHub - ${formState.topic}] ${formState.subject}`;
    const bodyContent = `Sender: ${formState.name} (${formState.email})\nTopic: ${formState.topic}\n\nMessage:\n${formState.message}\n\n---\nSent via FreeToolsHub Contact Form`;
    return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
  };

  // Form submit -> opens mailto
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    const mailto = buildMailtoUrl();
    window.location.href = mailto;
    setSubmittedStatus('opened');
  };

  // Copy message to clipboard helper
  const handleCopyMessage = async () => {
    if (!validateAll()) return;

    const textToCopy = `To: ${SUPPORT_EMAIL}\nSubject: [FreeToolsHub - ${formState.topic}] ${formState.subject}\nFrom: ${formState.name} (${formState.email})\n\n${formState.message}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setSubmittedStatus('copied');
      setTimeout(() => setIsCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Contact Us' }]} onHome={onBackHome} />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Community & Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Have a tool suggestion, found a bug, or have feedback? We read every submission and appreciate your help making FreeToolsHub better.
          </p>
        </div>

        <button
          onClick={onBackHome}
          id="contact-back-home-top"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors self-start sm:self-auto shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Direct Contact Details & Privacy Transparency Notice */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {/* Direct Support Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-bold text-slate-900 dark:text-slate-100 text-base">Direct Email Contact</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Send an email directly from your preferred email provider anytime.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2">
              <code className="text-xs sm:text-sm font-mono font-semibold text-blue-600 dark:text-blue-400 truncate">
                {SUPPORT_EMAIL}
              </code>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors flex-shrink-0"
              >
                Email
              </a>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              We typically review and reply to verified user suggestions, tool defect reports, and collaboration inquiries within 24–48 business hours.
            </p>
          </div>

          {/* Transparent Architecture Callout */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-xs uppercase tracking-wider">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Transparent & Serverless Messaging</span>
            </div>
            <p className="text-xs text-emerald-950 dark:text-emerald-200/90 leading-relaxed">
              Because FreeToolsHub operates 100% in-browser with zero tracking databases, this form does not store your message on an unencrypted server. Instead, it securely prepares your note to send via your verified email client (<code className="font-mono font-semibold">mailto:</code>) or lets you copy the formatted text in one click.
            </p>
          </div>

          {/* Quick FAQ / Common Topics */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>What Can You Contact Us About?</span>
            </h3>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Tool Requests:</strong> Suggest a new converter, generator, or calculation tool you would like added to FreeToolsHub.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Bug Reports:</strong> Report unexpected calculation results, browser quirks, or formatting glitches.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span><strong>Advertising & Partnerships:</strong> Inquire about contextual ad placements, site sponsorships, or integrations.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Validated Contact Composer Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm text-left">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Send Us a Message</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Fill out the fields below. All fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
            </p>

            {/* Success / Dispatched Confirmation Banner */}
            {submittedStatus && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 mb-6 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                    {submittedStatus === 'opened' ? 'Email Client Launched!' : 'Message Copied to Clipboard!'}
                  </span>
                  <p className="text-emerald-800 dark:text-emerald-300 leading-relaxed">
                    {submittedStatus === 'opened'
                      ? `Your default email software opened with your message addressed to ${SUPPORT_EMAIL}. Simply hit "Send" in your email client to complete transmission.`
                      : `The structured message has been copied to your clipboard. You can now paste it directly into webmail (Gmail, Outlook, Yahoo) to send to ${SUPPORT_EMAIL}.`}
                  </p>
                  <button
                    onClick={() => setSubmittedStatus(null)}
                    className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 underline"
                  >
                    Edit Message / Send Another
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                      touched.name && errors.name
                        ? 'border-red-500 bg-red-50/20 focus:ring-red-400'
                        : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-blue-500'
                    } text-slate-900 dark:text-slate-100`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                      touched.email && errors.email
                        ? 'border-red-500 bg-red-50/20 focus:ring-red-400'
                        : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-blue-500'
                    } text-slate-900 dark:text-slate-100`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Inquiry Topic Dropdown */}
              <div>
                <label htmlFor="contact-topic" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Inquiry Topic
                </label>
                <select
                  id="contact-topic"
                  value={formState.topic}
                  onChange={(e) => handleChange('topic', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Feature Request / New Tool">Feature Request / New Tool Suggestion</option>
                  <option value="Bug Report / Tool Defect">Bug Report / Tool Defect</option>
                  <option value="General Feedback">General Feedback & Usability</option>
                  <option value="Advertising & Partnerships">Advertising & Sponsorship Inquiry</option>
                  <option value="Privacy / Legal Inquiry">Privacy & Legal Inquiry</option>
                  <option value="General Inquiry">Other General Question</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Subject Line <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  onBlur={() => handleBlur('subject')}
                  placeholder="e.g. Suggestion for adding a WEBP animated converter"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                    touched.subject && errors.subject
                      ? 'border-red-500 bg-red-50/20 focus:ring-red-400'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-blue-500'
                  } text-slate-900 dark:text-slate-100`}
                />
                {touched.subject && errors.subject && (
                  <p className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium">{errors.subject}</p>
                )}
              </div>

              {/* Message Body */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {formState.message.length} character{formState.message.length === 1 ? '' : 's'} (min 10)
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  placeholder="Please describe your suggestion, question, or issue in detail..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                    touched.message && errors.message
                      ? 'border-red-500 bg-red-50/20 focus:ring-red-400'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-blue-500'
                  } text-slate-900 dark:text-slate-100`}
                />
                {touched.message && errors.message && (
                  <p className="text-red-500 dark:text-red-400 text-xs mt-1 font-medium">{errors.message}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.99] transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  id="contact-copy-btn"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy to Clipboard</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center pt-2">
                Clicking &ldquo;Send via Email Client&rdquo; opens your system or webmail app with pre-filled content addressed to <span className="font-mono">{SUPPORT_EMAIL}</span>.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Back to Home */}
      <div className="mt-10 text-center">
        <button
          onClick={onBackHome}
          id="contact-back-home-bottom"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   4. ABOUT US PAGE (/about)
   ========================================================================= */
export const AboutPage: React.FC<TrustPageProps> = ({ onBackHome }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'About Us' }]} onHome={onBackHome} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mission & Values</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            About FreeToolsHub
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Fast, private, and 100% free web utilities built for creators, developers, and everyday tasks.
          </p>
        </div>

        <button
          onClick={onBackHome}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors self-start sm:self-auto shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm text-left">
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6 leading-relaxed text-sm">
          <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200">
            FreeToolsHub was created to solve a common frustration: everyday web tools shouldn&apos;t require forced user registrations, intrusive email collection, or paywalled daily limits.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Our Three Architectural Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm mb-2.5">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">Local Processing</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Your images, PDFs, text, and data are processed entirely inside your browser memory using HTML5 APIs. Zero uploads.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm mb-2.5">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">Zero Friction</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                No account registrations, no passwords, no email gates, and no artificial daily limits. Open and use immediately.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm mb-2.5">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">High Performance</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Engineered with modern TypeScript, accessible Tailwind styling, and instant keyboard shortcuts (<kbd className="font-mono text-[10px] bg-white dark:bg-slate-900 px-1 py-0.5 rounded border border-slate-300 dark:border-slate-700">Ctrl+K</kbd>).
              </p>
            </div>
          </div>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Who Maintains FreeToolsHub?</h2>
          <p>
            FreeToolsHub is maintained by independent software engineers who believe the web should be open, private, and fast. If you have any feedback or wish to suggest a tool, please reach out via our contact page.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   5. DISCLAIMER PAGE (/disclaimer)
   ========================================================================= */
export const DisclaimerPage: React.FC<TrustPageProps> = ({ onBackHome }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'Disclaimer' }]} onHome={onBackHome} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Important Notices & Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Legal & Operational Disclaimer
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Please review these critical disclaimers regarding health, financial, and technical calculations.
          </p>
        </div>

        <button
          onClick={onBackHome}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors self-start sm:self-auto shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm text-left">
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6 leading-relaxed text-sm">
          <section className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80">
            <h2 className="text-base font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              1. Health & Medical Information Disclaimer
            </h2>
            <p className="text-amber-900/90 dark:text-amber-300 text-xs sm:text-sm">
              All health, fitness, and wellness calculators on FreeToolsHub (including BMI Calculator, BMR Calculator, and Calorie Calculator) are provided strictly for general informational and educational purposes. They do not constitute clinical diagnosis, medical advice, dietary prescription, or treatment plans. Always consult a qualified physician or healthcare provider before beginning any diet, exercise, or weight loss program.
            </p>
          </section>

          <section className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80">
            <h2 className="text-base font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              2. Financial, Tax, & Legal Calculations
            </h2>
            <p className="text-blue-900/90 dark:text-blue-300 text-xs sm:text-sm">
              Financial calculators (such as Loan Amortization, Compound Interest, Sales Tax, VAT, and Profit Margins) provide mathematical approximations based upon user inputs and standard formulas. Real-world financial figures vary based upon local tax jurisdiction, bank fees, escrow requirements, and rounding rules. FreeToolsHub is not a registered financial advisor, CPA, or law firm.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">3. Password & Cryptography Utilities</h2>
            <p>
              Password generator tools provide high-entropy randomized strings generated on your local device. While designed to resist dictionary and brute-force attacks, FreeToolsHub cannot guarantee absolute security against social engineering, keyloggers, or phishing. Users are solely responsible for securely storing their credentials.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">4. No Earnings or Traffic Guarantees</h2>
            <p>
              FreeToolsHub makes no guarantees regarding search engine rankings, advertising earnings, AdSense approvals, or website traffic.
            </p>
          </section>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onBackHome}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   6. MAIN ROUTER WRAPPER FOR TRUST PAGES
   ========================================================================= */
export interface TrustPagePropsWrapper {
  type: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';
  onNavigateHome: () => void;
  onNavigate?: (view: PageView) => void;
}

export const TrustPage: React.FC<TrustPagePropsWrapper> = ({ type, onNavigateHome, onNavigate }) => {
  switch (type) {
    case 'about':
      return <AboutPage onBackHome={onNavigateHome} onNavigate={onNavigate} />;
    case 'contact':
      return <ContactPage onBackHome={onNavigateHome} onNavigate={onNavigate} />;
    case 'privacy':
      return <PrivacyPolicyPage onBackHome={onNavigateHome} onNavigate={onNavigate} />;
    case 'terms':
      return <TermsPage onBackHome={onNavigateHome} onNavigate={onNavigate} />;
    case 'disclaimer':
      return <DisclaimerPage onBackHome={onNavigateHome} onNavigate={onNavigate} />;
    default:
      return <AboutPage onBackHome={onNavigateHome} onNavigate={onNavigate} />;
  }
};
