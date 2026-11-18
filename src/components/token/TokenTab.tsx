import { AlertTriangle, Eye } from 'lucide-react';
import type { Identity } from '../../types/auth';
import { encodeBase64Url } from '../../utils/mockAuth';
const header = { alg: 'HS256', typ: 'JWT' };
const tokenParts = [
  { title: 'Header', description: 'Describes token type and signing algorithm.' },
  { title: 'Payload', description: 'Carries claims, such as user ID, issuer, audience, and role.' },
  { title: 'Signature', description: 'Lets a verifier detect unauthorized changes.' },
];
export function TokenTab({ identity }: { identity: Identity | null }) {
  const payload = identity ? { sub: identity.id, name: identity.name, role: identity.role, iss: 'https://auth.college.example', aud: 'college-api', exp: 1800000000 } : null;
  return <section className="panel p-6 space-y-5">
    <div><h2 className="text-xl font-bold">Inside a JWT</h2><p className="text-sm text-slate-500 mt-1">A signed JWT has a header, payload, and signature.</p></div>
    {!payload ? <div className="bg-slate-50 rounded-xl p-5 text-sm text-slate-600">Sign in on the Interactive Portal tab to generate a sample payload.</div> : <>
      <div className="code break-all whitespace-pre-wrap"><span className="text-sky-400">{encodeBase64Url(header)}</span><span className="text-white">.</span><span className="text-emerald-400">{encodeBase64Url(payload)}</span><span className="text-white">.</span><span className="text-amber-400">&lt;signature-not-generated&gt;</span></div>
      <div className="grid md:grid-cols-2 gap-4"><div><h3 className="font-bold text-sm mb-2 text-sky-700">Header</h3><pre className="code">{JSON.stringify(header, null, 2)}</pre></div><div><h3 className="font-bold text-sm mb-2 text-emerald-700">Payload</h3><pre className="code">{JSON.stringify(payload, null, 2)}</pre></div></div>
    </>}
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><div className="font-bold flex items-center gap-2"><AlertTriangle size={17}/>Educational illustration, not a real JWT</div><p className="mt-2">The header and payload are Base64URL-encoded, but this demo does not generate a cryptographic signature. The displayed expiration is a fixed example, not a real session expiration. Never use this example token for authentication.</p></div>
    <div className="grid sm:grid-cols-3 gap-3">{tokenParts.map(part => <div key={part.title} className="bg-slate-50 rounded-xl p-4"><h3 className="font-bold text-sm">{part.title}</h3><p className="text-xs text-slate-600 mt-2">{part.description}</p></div>)}</div>
    <div className="text-sm flex gap-2 text-slate-600"><Eye size={18} className="shrink-0"/><p>JWT payloads are usually readable by anyone holding the token. Signed does not mean encrypted.</p></div>
  </section>;
}
