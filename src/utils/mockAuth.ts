import { permissions } from '../data/demoData';
import type { Action, Identity, LogEntry } from '../types/auth';

// This check runs in the browser for demonstration only. It is NOT secure.
export function simulateApiRequest(action: Action, identity: Identity | null, expired: boolean): LogEntry {
  const status = !identity || expired
    ? 401
    : permissions[identity.role].includes(action.permission) ? 200 : 403;
  const explanation = status === 401
    ? 'No valid session. Authentication required.'
    : status === 403
      ? 'Identity recognized, but this role lacks the required permission.'
      : 'Simulated API granted access based on the role permission.';
  return { status, method: action.method, path: action.path, explanation };
}

// Base64URL encoding is not encryption or a cryptographic signature.
export function encodeBase64Url(value: object): string {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  let binary = '';
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
