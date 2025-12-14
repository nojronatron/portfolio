# Jon's Portfolio Site #

This site began as a lab assignment while attending Code Fellows in Seattle, WA. It is now a handy space to showcase my projects and experiences, and to experiment with various web-design concepts and tools.

[![Netlify Status](https://api.netlify.com/api/v1/badges/79c5e328-bd0c-4214-840d-89c6e19b230f/deploy-status)](https://app.netlify.com/sites/portfolio-jon-rumsey/deploys)

## Table of Contents ##

- [Current Version](#current-version)
- [Starter Code Source](#starter-code-source)
- [Custom Code Updates](#custom-code-updates)
- [GitHub Actions Updates](#github-actions-updates)
- [Contributors](#contributors)

## Current Version ##

[v1.0.0] - 16-October-2024

- Add recent projects.
- Apply custom color palette.
- Refactor styling to improve accessibility.
- Convert icons to Iconify
- Update data-fetching to support other (future) data source(s).
- Refactor layout and style for responsive design supporting large screens (desktops) and smart phone.
- Fix various implementation issues (probably caused by me) in the vertical timeline, switch, and other imported components.
- Convert class-based components to functional components and implement React Hooks instead.

[v0.3.0] - 2-October-2024

- Fixed many dependency issues.
- Moved to [Vite](https://vitejs.dev/) tooling system.
- Updated Netlify deploy for automated publication with Vite tooling.

Check out the live site on [Netlify](https://portfolio-jon-rumsey.netlify.app).

## Starter Code Source ##

The starter code for this project was cloned from project [Dorota1997/react-frontend-dev-portfolio](https://github.com/Dorota1997/react-frontend-dev-portfolio), and customized from there. Thanks to Dorota Gil, great work!

## Custom Code Updates ##

- Moved away from Create React App, replaced with Vite.
- Moved files and updated JS files to JSX for Vite processing.
- Fixed SCSS `@import` issues with `@use` or `stylesheet` refs in `index.html` instead.

## GitHub Actions Updates ##

Revision: 14-Dec-2025

- Minimal GITHUB_TOKEN permissions (`contents: read`): restricts the token to read-only to follow least-privilege (mitigates CWE-275).
- Use `npm ci` and project `devDependencies`: reproducible, lockfile-based installs are faster and keep CI consistent with local development.
- Enable npm cache via `actions/setup-node` (`cache: 'npm'`): reduces network calls and speeds CI runs.
- Remove explicit checkout `ref: ${{ github.head_ref }}` and use `fetch-depth: 0`: avoids incorrect ref checkout for push/PR events and allows full history when needed.
- Add `concurrency` to cancel redundant runs: prevents duplicate lint jobs for the same ref and saves CI minutes.
- Recommend pinning actions (or enable Dependabot for actions): pin to commit SHAs to reduce supply-chain risk (CWE-494); note this requires periodic maintenance or Dependabot automation.

## Contributors ##

Content Creator, UX and Accessibility Design, JS/React Developer, Test Engineer, and DevOps Engineer: Jon Rumsey [nojronatron](https://github.com/nojronatron).

This site uses [Iconify-React](https://iconify.design/) for some language and tools icons.

This site also uses free versions of [FontAwesome v.5 Icons](https://fontawesome.com/v5/search)

Dev Icons ~~are~~ were courtesy of [Devicon.dev](https://devicon.dev) (thanks, it was fun while it lasted).
