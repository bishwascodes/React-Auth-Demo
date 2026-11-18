# Authentication Lab

A small, organized React + TypeScript + Tailwind CSS classroom demo of authentication concepts. **This is a simulation, not a secure authentication implementation.**

## Run

```bash
npm install
npm run dev
```

## Project structure

```text
src/
  App.tsx                         App state and tab selection
  main.tsx                        React entry point
  style.css                       Tailwind and shared styles
  types/auth.ts                   Shared TypeScript types
  data/demoData.ts                Demo users, roles, permissions, actions, flow steps
  utils/mockAuth.ts               Mock authorization response and Base64URL helper
  components/
    layout/
      AppHeader.tsx               Header and simulation warning
      TabNavigation.tsx           Tab buttons
    portal/
      PortalTab.tsx               Portal layout
      SignInPanel.tsx             Fake sign-in and role selection
      DashboardPanel.tsx          Visible and hidden actions
      ActionCard.tsx              Reusable action button
      ApiLogPanel.tsx             Mock 200 / 401 / 403 responses
    flow/
      FlowTab.tsx                 Authentication flow explanation
    token/
      TokenTab.tsx                JWT structure and claims
```

## Teaching walkthrough

1. Choose a demo account and click **Simulate Login**.
2. Observe how the available actions differ by role.
3. Enable **Show hidden actions**, then attempt a forbidden action to see a mock **403**.
4. Enable **Simulate expired session** to see a mock **401**.
5. Visit **Authentication Flow** to discuss browser, identity service, and API.
6. Visit **JWT Inspector** to see Base64URL-encoded claims and an intentionally missing signature.

## Security caveat

There is no backend, no actual login, no real JWT, and no network request. The role selector and mock permission check run entirely in the browser. **They cannot enforce security.** Real systems use a trusted identity provider or backend, secure token/session handling, and backend validation of identity, permissions, and record ownership. Never use this mock implementation as production authentication.
