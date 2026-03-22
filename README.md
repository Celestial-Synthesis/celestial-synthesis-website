# Celestial Synthesis Website

Company website built with Nuxt 3 and Nuxt Content.

## Current pages

- `/` Home
- `/about` About Us
- `/products` Product list
- `/product/[slug]` Product detail
- `/contact` Contact

## Content structure

- `content/pages/home.md` Home page content and SEO metadata
- `content/products/*.md` Product entries used by `/products` and `/product/[slug]`

## Main UI structure

- `layouts/default.vue` Global layout shell
- `components/layout/header.vue` Site header
- `components/layout/logo.vue` Company logo block
- `components/navigation/mainMenu.vue` Main navigation
- `components/layout/footer.vue` Footer and quick links

## Run locally

1. Install dependencies:

  ```bash
  npm install
  ```

2. Start development server:

  ```bash
  npm run dev
  ```

3. Build for production:

  ```bash
  npm run build
  ```

## End-to-end checks

Run the Playwright regression suite:

```bash
npm run test:e2e
```

Open Playwright UI mode:

```bash
npm run test:e2e:ui
```

## Content editing (Decap)

Decap config lives at `public/admin/config.yml`.

Current editable collections:

- Home page (`content/pages/home.md`)
- Products (`content/products/*.md`)

## Notes

- Boilerplate extras and unused template pages/files were removed.
- Placeholder assets are currently used for the company logo and FlowR product visual.

## Agent playbook

- Repository agent instructions live in `AGENTS.md`.
- For user-visible changes, agents are expected to verify behavior with Playwright before treating the task as complete.