import React from 'react';

interface AdSlotProps {
  position: 'top' | 'between-content' | 'sidebar' | 'bottom';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ position, className = '' }) => {
  const slotClassMap = {
    top: 'ad-slot-top min-h-[90px] max-w-4xl',
    'between-content': 'ad-slot-between-content min-h-[90px] max-w-4xl',
    sidebar: 'ad-slot-sidebar min-h-[250px] w-full',
    bottom: 'ad-slot-bottom min-h-[90px] max-w-4xl',
  };

  const isBanner728x90 = position === 'top' || position === 'bottom' || position === 'between-content';

  return (
    <div
      className={`mx-auto my-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/40 p-2 text-center transition-colors overflow-hidden ${slotClassMap[position]} ${className}`}
      aria-label="Advertisement Space"
    >
      <div className="w-full flex items-center justify-between px-2 mb-1">
        <span className="text-[10px] font-medium tracking-wider text-slate-400 dark:text-slate-500 uppercase">
          Advertisement
        </span>
      </div>

      {isBanner728x90 ? (
        <div className="w-full flex justify-center items-center overflow-x-auto min-h-[90px]">
          <iframe
            title="Advertisement 728x90"
            width={728}
            height={90}
            scrolling="no"
            className="border-0 max-w-full overflow-hidden"
            srcDoc={`<!DOCTYPE html><html><head><base target="_blank"><style>body{margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style></head><body><script>atOptions={'key':'21f81a6038cf0574c5243bbbbf189033','format':'iframe','height':90,'width':728,'params':{}};</script><script src="https://bibleearthquake.com/21f81a6038cf0574c5243bbbbf189033/invoke.js"></script></body></html>`}
          />
        </div>
      ) : (
        <p className="py-8 text-xs text-slate-400 dark:text-slate-500">
          Non-intrusive banner zone reserved for sponsor placement.
        </p>
      )}
    </div>
  );
};
