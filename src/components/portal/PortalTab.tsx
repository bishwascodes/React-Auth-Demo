import type { Action, Identity, LogEntry, Role } from '../../types/auth';
import { SignInPanel } from './SignInPanel';
import { DashboardPanel } from './DashboardPanel';
import { ApiLogPanel } from './ApiLogPanel';
export function PortalTab({ selectedRole, setSelectedRole, identity, onLogin, onLogout, showHidden, setShowHidden, onRequest, logs, expired, setExpired, onClear }: {
  selectedRole: Role; setSelectedRole: (role: Role) => void; identity: Identity | null;
  onLogin: () => void; onLogout: () => void; showHidden: boolean; setShowHidden: (value: boolean) => void;
  onRequest: (action: Action) => void; logs: LogEntry[]; expired: boolean; setExpired: (value: boolean) => void; onClear: () => void;
}) {
  return <div className="grid lg:grid-cols-[340px_1fr] gap-5 items-start">
    <SignInPanel selectedRole={selectedRole} onRoleChange={setSelectedRole} identity={identity} onLogin={onLogin} onLogout={onLogout}/>
    <div className="space-y-5">
      <DashboardPanel identity={identity} showHidden={showHidden} onShowHiddenChange={setShowHidden} onRequest={onRequest}/>
      <ApiLogPanel logs={logs} expired={expired} onExpiredChange={setExpired} onClear={onClear} signedIn={!!identity}/>
    </div>
  </div>;
}
