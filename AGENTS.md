# Agent Playbook

## Working Standard

- Use `npm`, not `yarn`, for installs and scripts in this repository.
- Prefer focused changes that preserve the current Nuxt 3 structure and styling patterns.
- Do not finish user-visible changes without browser verification.

## Playwright Verification Rule

- For any change that affects rendered UI, layout, styling, navigation, page content, or interactive behavior, always verify with Playwright before concluding the task.
- If the existing Playwright coverage does not verify the changed behavior, add or update a test in `tests/e2e/` first, then run it.
- Prefer the smallest targeted Playwright command that proves the change, and use the full suite when the change has broader impact.
- Treat a failing Playwright check as a real regression until proven otherwise.

## Verification Commands

- Run the full Playwright suite with `npm run test:e2e`.
- Run a single spec with `npx playwright test tests/e2e/<spec-name>.spec.ts`.
- Use interactive debugging when needed with `npm run test:e2e:ui`.

## Completion Criteria

- A task that changes the visible product is not complete until the relevant Playwright check passes.
- If Playwright cannot be run, state the blocker explicitly and describe what remains unverified.