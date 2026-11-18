import { AlertTriangle, Check, LogIn, LogOut } from 'lucide-react';
import { permissions, users } from '../../data/demoData';
import type { Identity, Role } from '../../types/auth';

type Props = {
  selectedRole: Role;
  onRoleChange: (role: Role) => void;
  identity: Identity | null;
  onLogin: () => void;
  onLogout: () => void;
};

export function SignInPanel({ selectedRole, onRoleChange, identity, onLogin, onLogout }: Props) {
  return <section className="panel p-6 space-y-5">
    <div><h2 className="font-bold text-lg">1. Simulate sign-in</h2><p className="text-sm text-slate-500 mt-1">Choose an identity and start a mock session.</p></div>
    <div className="space-y-2">
      <label className="block text-sm font-semibold" htmlFor="role">Demo account</label>
      <select id="role" value={selectedRole} onChange={e => onRoleChange(e.target.value as Role)} className="w-full border border-slate-300 rounded-xl p-3 bg-white" disabled={!!identity}>
        {Object.values(users).map(user => <option key={user.role} value={user.role}>{user.name} · {user.role}</option>)}
      </select>
    </div>
    {identity ? <>
      <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-4"><div className="text-xs font-semibold text-indigo-600 uppercase">Signed in as</div><div className="font-bold mt-1">{identity.name}</div><div className="text-sm capitalize text-indigo-700">{identity.role}</div></div>
      <button className="btn btn-soft w-full flex items-center justify-center gap-2" onClick={onLogout}><LogOut size={17}/> Log out</button>
    </> : <button className="btn btn-primary w-full flex items-center justify-center gap-2" onClick={onLogin}><LogIn size={17}/> Simulate Login</button>}
    <div className="border-t border-slate-200 pt-5">
      <h3 className="font-bold text-sm mb-3">Permissions for this role</h3>
      {identity ? <div className="space-y-2">{permissions[identity.role].map(permission => <div key={permission} className="text-xs flex items-center gap-2"><Check size={15} className="text-emerald-600"/>{permission}</div>)}</div> : <p className="text-sm text-slate-500">Sign in to view permissions.</p>}
    </div>
    <div className="rounded-xl bg-amber-50 p-3 text-xs text-amber-900 flex gap-2"><AlertTriangle size={19} className="shrink-0"/>This role selector is for teaching. Real applications must not let users assign themselves roles.</div>
  </section>;
}
