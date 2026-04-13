# Contributing Guide

Thanks for contributing to this project!

## Prerequisites

- Node.js 20+
- npm 10+

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.sample .env
```

3. Start the API in watch mode:

```bash
npm run dev
```

## Project Structure

- `src/`: application source code
- `src/common/`: shared middleware and reusable utilities
- `src/modules/`: feature modules (for example `auth`, `dashboard`)
- `test/`: end-to-end test setup

## Development Workflow

1. Create a branch from `main` for your change.
2. Keep each pull request focused on a single concern.
3. Add or update tests when behavior changes.
4. Run quality checks before opening a PR.

## Quality Checks

Run these commands before submitting:

```bash
npm run lint
npm run test
npm run test:e2e
npm run build
```

Optional formatting command:

```bash
npm run format
```

## Testing Expectations

- Unit tests should live next to implementation files as `*.spec.ts`.
- E2E tests should live in `test/`.
- New endpoints or business logic should include relevant tests.

## Pull Request Checklist

- [ ] Code compiles with `npm run build`
- [ ] Lint passes with `npm run lint`
- [ ] Unit tests pass with `npm run test`
- [ ] E2E tests pass with `npm run test:e2e`
- [ ] API behavior changes are covered by tests
- [ ] PR description clearly explains what changed and why

## Commit Message Tips

Use clear, imperative commit messages, for example:

- `feat(auth): add token refresh endpoint`
- `fix(dashboard): handle empty widget state`
- `test(auth): add login failure scenarios`

## Questions

If anything is unclear, open an issue or start a discussion in your pull request.