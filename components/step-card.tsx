import type { ReactNode } from "react";

export function StepCard({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group flex gap-4 rounded-lg border border-neutral-800 p-4 transition-colors hover:border-blue-500/50">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-400">
        {step}
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <div className="mt-1 text-sm text-neutral-400">{children}</div>
      </div>
    </div>
  );
}
