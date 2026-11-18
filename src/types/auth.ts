export type Role = 'student' | 'instructor' | 'admin';
export type Permission = 'grades:own:read' | 'grades:class:read' | 'grades:class:write' | 'users:manage';
export type Identity = { name: string; id: string; role: Role };
export type Action = { title: string; description: string; permission: Permission; method: string; path: string };
export type LogEntry = { status: number; method: string; path: string; explanation: string };
export type Tab = 'portal' | 'flow' | 'token';
