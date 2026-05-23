export default function AverageReferenceTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="min-w-full bg-white text-left text-sm">
        <thead className="bg-slate-50 text-slate-700">
          <tr>
            <th className="px-4 py-3 font-semibold">Measurement type</th>
            <th className="px-4 py-3 font-semibold">Average (cm)</th>
            <th className="px-4 py-3 font-semibold">Average (in)</th>
          </tr>
        </thead>
        <tbody className="text-slate-700">
          <tr className="border-t"><td className="px-4 py-3">Erect length</td><td className="px-4 py-3">13.12</td><td className="px-4 py-3">5.16</td></tr>
          <tr className="border-t"><td className="px-4 py-3">Erect girth</td><td className="px-4 py-3">11.66</td><td className="px-4 py-3">4.59</td></tr>
          <tr className="border-t"><td className="px-4 py-3">Flaccid length</td><td className="px-4 py-3">9.16</td><td className="px-4 py-3">3.61</td></tr>
        </tbody>
      </table>
    </div>
  );
}
