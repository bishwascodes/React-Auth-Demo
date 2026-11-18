import { useState } from 'react';
import { AppHeader } from './components/layout/AppHeader';
import { TabNavigation } from './components/layout/TabNavigation';
import { PortalTab } from './components/portal/PortalTab';
import { FlowTab } from './components/flow/FlowTab';
import { TokenTab } from './components/token/TokenTab';
import { users } from './data/demoData';
import { simulateApiRequest } from './utils/mockAuth';
import type { Action, Identity, LogEntry, Role, Tab } from './types/auth';

export default function App() {
  const [tab, setTab] = useState<Tab>('portal');
  const [selectedRole, setSelectedRole] = useState<Role>('student');
  const [identity, setIdentity] = useState<Identity | null>(null);
  const [showHidden, setShowHidden] = useState(false);
  const [expired, setExpired] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);

  function login() {
    setIdentity(users[selectedRole]);
    setExpired(false);
    setLogs([]);
  }

  function logout() {
    setIdentity(null);
    setExpired(false);
    setLogs([]);
  }

  function request(action: Action) {
    const entry = simulateApiRequest(action, identity, expired);
    setLogs(previous => [entry, ...previous].slice(0, 6));
  }

  return <div className="min-h-screen">
    <AppHeader/>
    <main className="max-w-6xl mx-auto px-5 py-8 space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Who are you, and what can you do?</h1><p className="text-slate-600 mt-2">Explore authentication, authorization, JWT structure, and role-based permissions.</p></div>
      <TabNavigation active={tab} onChange={setTab}/>
      {tab === 'portal' && <PortalTab selectedRole={selectedRole} setSelectedRole={setSelectedRole} identity={identity} onLogin={login} onLogout={logout} showHidden={showHidden} setShowHidden={setShowHidden} onRequest={request} logs={logs} expired={expired} setExpired={setExpired} onClear={() => setLogs([])}/>}
      {tab === 'flow' && <FlowTab/>}
      {tab === 'token' && <TokenTab identity={identity}/>}
      <footer className="text-center text-xs text-slate-500 py-3">Classroom demo only. No passwords, external requests, real JWT signing, or secure backend are included.</footer>
    </main>
  </div>;
}
