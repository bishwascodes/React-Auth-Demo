import type { LogEntry } from '../../types/auth';
export function ApiLogPanel({ logs, expired, onExpiredChange, onClear, signedIn }: {
  logs: LogEntry[]; expired: boolean; onExpiredChange: (value: boolean) => void; onClear: () => void; signedIn: boolean;
}) {
  return <section className="panel p-6">
    <div className="flex flex-wrap justify-between items-center gap-2"><h2 className="font-bold text-lg">3. Mock API response log</h2><button className="text-sm text-indigo-700 font-semibold" onClick={onClear}>Clear log</button></div>
    <p className="text-sm text-slate-500 mt-1">401 = not authenticated · 403 = authenticated but forbidden · 200 = allowed</p>
    <label className="flex gap-2 items-center mt-4 text-sm"><input type="checkbox" checked={expired} onChange={e => onExpiredChange(e.target.checked)} disabled={!signedIn}/> Simulate expired session</label>
    <div className="mt-4 space-y-2">{logs.length === 0 ? <div className="text-sm text-slate-400 bg-slate-50 rounded-xl p-5">Click a dashboard action to simulate a request.</div> : logs.map((log, i) => <div key={i} className="bg-slate-50 rounded-xl p-3">
      <div className="flex gap-2 items-center flex-wrap"><span className={`font-bold text-xs px-2 py-1 rounded-md ${log.status === 200 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>{log.status}</span><code className="text-xs break-all">{log.method} {log.path}</code></div>
      <p className="text-xs text-slate-600 mt-2">{log.explanation}</p>
    </div>)}</div>
  </section>;
}
