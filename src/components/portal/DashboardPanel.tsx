import { LockKeyhole } from 'lucide-react';
import { actions, permissions } from '../../data/demoData';
import type { Action, Identity } from '../../types/auth';
import { ActionCard } from './ActionCard';
export function DashboardPanel({ identity, showHidden, onShowHiddenChange, onRequest }: {
  identity: Identity | null; showHidden: boolean; onShowHiddenChange: (value: boolean) => void; onRequest: (action: Action) => void;
}) {
  const hasPermission = (action: Action) => !!identity && permissions[identity.role].includes(action.permission);
  const visibleActions = actions.filter(action => showHidden || hasPermission(action));
  return <section className="panel p-6">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div><h2 className="font-bold text-lg">2. Explore the dashboard</h2><p className="text-sm text-slate-500 mt-1">Buttons reflect the signed-in user's role.</p></div>
      <label className="flex items-center gap-2 text-xs font-semibold text-slate-600"><input type="checkbox" checked={showHidden} onChange={e => onShowHiddenChange(e.target.checked)}/> Show hidden actions</label>
    </div>
    <div className="grid sm:grid-cols-2 gap-3 mt-5">
      {visibleActions.map(action => <ActionCard key={action.title} action={action} allowed={hasPermission(action)} disabled={!identity && !showHidden} onClick={() => onRequest(action)}/>)}
      {!identity && !showHidden && <div className="col-span-full text-center py-10 text-slate-500"><LockKeyhole className="mx-auto mb-3"/>Sign in to view your available actions.</div>}
    </div>
    <p className="text-xs text-slate-500 mt-4">Try “Show hidden actions,” then click an action your role does not allow. Visibility is not authorization.</p>
  </section>;
}
