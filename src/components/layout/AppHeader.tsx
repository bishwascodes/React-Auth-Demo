import { ShieldCheck } from 'lucide-react';
export function AppHeader() {
  return <header className="bg-slate-950 text-white">
    <div className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-500 p-2.5 rounded-xl"><ShieldCheck size={23} /></div>
        <div><div className="font-bold text-lg">Authentication Lab</div><div className="text-xs text-slate-400">Advanced Front-End · College Portal Demo</div></div>
      </div>
      <span className="text-xs px-3 py-1.5 rounded-full bg-amber-400/15 text-amber-200 border border-amber-400/30">SIMULATION · No real authentication</span>
    </div>
  </header>;
}
