import type { Tab } from '../../types/auth';
const tabs: { id: Tab; label: string }[] = [
  { id: 'portal', label: 'Interactive Portal' },
  { id: 'flow', label: 'Authentication Flow' },
  { id: 'token', label: 'JWT Inspector' },
];
export function TabNavigation({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  return <nav className="flex flex-wrap gap-2" aria-label="Demo sections">
    {tabs.map(tab => <button key={tab.id} onClick={() => onChange(tab.id)} className={`btn ${active === tab.id ? 'btn-primary' : 'btn-soft'}`}>{tab.label}</button>)}
  </nav>;
}
