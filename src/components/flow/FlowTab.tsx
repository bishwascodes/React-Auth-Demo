import { useState } from 'react';
import { ArrowRight, KeyRound, Monitor, Server } from 'lucide-react';
import { flowSteps } from '../../data/demoData';
const participants = [{ label: 'Browser', Icon: Monitor }, { label: 'Identity Service', Icon: KeyRound }, { label: 'Protected API', Icon: Server }];
export function FlowTab() {
  const [selectedStep, setSelectedStep] = useState(0);
  const example = selectedStep === 3 ? 'GET /api/grades/me\nAuthorization: Bearer <access-token>' : selectedStep === 4 ? 'if (!validToken) return 401;\nif (!allowedToReadGrades) return 403;\nreturn 200;' : '// Conceptual flow: no real network request is made here.';
  return <section className="panel p-6 space-y-6">
    <div><h2 className="text-xl font-bold">A token-based authentication flow</h2><p className="text-sm text-slate-500 mt-1">Select each step to see why it exists.</p></div>
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2">
      {participants.map(({ label, Icon }, i) => <div key={label} className="flex items-center flex-1 gap-2"><div className="flex-1 border border-indigo-200 rounded-xl bg-indigo-50 text-indigo-950 p-5 flex flex-col items-center gap-2 text-sm font-bold"><Icon size={26}/>{label}</div>{i < 2 && <ArrowRight className="hidden md:block shrink-0 text-slate-400"/>}</div>)}
    </div>
    <div className="grid sm:grid-cols-5 gap-2">{flowSteps.map((step, i) => <button key={step.title} onClick={() => setSelectedStep(i)} className={`rounded-xl p-3 text-xs font-semibold border ${selectedStep === i ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>{step.title}</button>)}</div>
    <div className="rounded-xl bg-slate-50 p-5"><h3 className="font-bold">{flowSteps[selectedStep].title}</h3><p className="text-sm mt-2 text-slate-600">{flowSteps[selectedStep].detail}</p></div>
    <pre className="code">{example}</pre>
  </section>;
}
