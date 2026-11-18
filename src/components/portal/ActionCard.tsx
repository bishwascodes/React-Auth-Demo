import { Check, LockKeyhole } from 'lucide-react';
import type { Action } from '../../types/auth';
export function ActionCard({ action, allowed, disabled, onClick }: { action: Action; allowed: boolean; disabled: boolean; onClick: () => void }) {
  return <button onClick={onClick} disabled={disabled} className="text-left border border-slate-200 rounded-xl p-4 hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
    <div className="flex justify-between items-center gap-2"><span className="font-bold text-sm">{action.title}</span>{allowed ? <Check size={17} className="text-emerald-600 shrink-0"/> : <LockKeyhole size={17} className="text-rose-500 shrink-0"/>}</div>
    <p className="text-xs text-slate-500 mt-1">{action.description}</p>
    <span className="inline-block mt-3 text-[11px] font-mono text-slate-500 break-all">{action.method} {action.path}</span>
  </button>;
}
