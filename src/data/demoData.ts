import type { Action, Identity, Permission, Role } from '../types/auth';

export const users: Record<Role, Identity> = {
  student: { name: 'Alex Student', id: 'student-101', role: 'student' },
  instructor: { name: 'Jordan Instructor', id: 'instructor-202', role: 'instructor' },
  admin: { name: 'Morgan Admin', id: 'admin-303', role: 'admin' },
};

export const permissions: Record<Role, Permission[]> = {
  student: ['grades:own:read'],
  instructor: ['grades:class:read', 'grades:class:write'],
  admin: ['users:manage'],
};

export const actions: Action[] = [
  { title: 'View my grades', description: 'Read your own grade report', permission: 'grades:own:read', method: 'GET', path: '/api/grades/me' },
  { title: 'View class grades', description: 'Read grades for your class', permission: 'grades:class:read', method: 'GET', path: '/api/classes/42/grades' },
  { title: 'Edit class grades', description: 'Update a student grade', permission: 'grades:class:write', method: 'PATCH', path: '/api/classes/42/grades' },
  { title: 'Manage users', description: 'Create or edit user accounts', permission: 'users:manage', method: 'POST', path: '/api/users' },
];

export const flowSteps = [
  { title: '1. Sign in', detail: 'The browser submits credentials to a trusted authentication service.' },
  { title: '2. Verify identity', detail: 'The authentication service verifies the user. React should not validate passwords itself.' },
  { title: '3. Receive a token', detail: 'The client obtains an access token through an appropriate secure flow.' },
  { title: '4. Request data', detail: 'The client sends the access token in an Authorization: Bearer header.' },
  { title: '5. Enforce access', detail: 'The API validates the token and checks permissions and record ownership.' },
];
