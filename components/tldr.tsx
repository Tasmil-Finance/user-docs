import type { ReactNode } from "react";

export function TLDR({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-400">
        TL;DR
      </p>
      <div className="text-sm leading-relaxed text-blue-100">{children}</div>
    </div>
  );
}
