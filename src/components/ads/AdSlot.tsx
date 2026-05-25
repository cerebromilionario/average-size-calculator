import type { ReactNode } from 'react';

type AdSlotProps = {
  children: ReactNode;
  className?: string;
  minHeight?: string;
};

export default function AdSlot({ children, className = '', minHeight = 'min-h-[180px]' }: AdSlotProps) {
  return (
    <aside
      className={`my-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-center shadow-sm ${minHeight} ${className}`}
      aria-label="Advertisement"
    >
      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Advertisement</div>
      <div className="flex justify-center">{children}</div>
    </aside>
  );
}
