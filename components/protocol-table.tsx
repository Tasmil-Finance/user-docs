export function ProtocolTable({
  data,
}: {
  data: { protocol: string; type: string; assets: string; strategy: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-800">
      <table className="w-full text-sm">
        <thead className="border-b border-neutral-800 bg-neutral-900/50">
          <tr>
            {["Protocol", "Type", "Assets", "Strategy"].map((h) => (
              <th key={h} className="px-4 py-2.5 text-left font-semibold text-neutral-300">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.protocol} className="border-b border-neutral-800/50 last:border-0">
              <td className="px-4 py-2.5 font-medium">{row.protocol}</td>
              <td className="px-4 py-2.5 text-neutral-400">{row.type}</td>
              <td className="px-4 py-2.5 text-neutral-400">{row.assets}</td>
              <td className="px-4 py-2.5 text-neutral-400">{row.strategy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
