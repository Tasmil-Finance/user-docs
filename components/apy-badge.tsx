export function ApyBadge({ protocol, apy }: { protocol: string; apy: number }) {
  const color =
    apy >= 10
      ? "bg-green-500/15 text-green-400 border-green-500/30"
      : apy >= 5
        ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
        : "bg-neutral-500/15 text-neutral-400 border-neutral-500/30";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${color}`}
    >
      {protocol}
      <span className="font-semibold">{apy}%</span>
    </span>
  );
}
