# CSS consolidation notes

Follow-up work after the `components/portfolio` and `components/shared` restructure (merged styles into [`src/assets/css/portfolio.css`](../src/assets/css/portfolio.css) and [`src/assets/css/App.css`](../src/assets/css/App.css)).

## Duplicate or overlapping selectors

- **`.project-title-section` / `.project-type-icon`**: Card markup uses `.project-card .project-title-section` and `.project-card .project-type-icon`. The project modal uses `.modal-header .project-title-section` and `.modal-header .project-type-icon` so rules do not fight. If you add another surface with the same class names, scope under a parent block.

- **`.project-description`**: Card copy uses `.project-card .project-description`. Modal body copy uses `.modal-section .project-description`.

- **`.complexity-icon`**: Shared name on cards (`.complexity-badge .complexity-icon`) and in the modal detail block (`.modal-section .complexity-icon`). Keep parent scoping when changing either.

## Orphan / unused stylesheets

- [`src/assets/css/applications.css`](../src/assets/css/applications.css) is not imported by any JS/JSX entry. Either wire it where needed or remove it to avoid drift.

## Unused React components (no imports)

- [`src/components/Footer/index.jsx`](../src/components/Footer/index.jsx)
- [`src/components/Extracurricular/index.jsx`](../src/components/Extracurricular/index.jsx)

Decide whether to delete, move under a feature folder, or integrate; until then they can confuse contributors.

## Global vs page scope

- **App.css**: design tokens, layout utilities, header/nav, and **shared** `TechStack` / `TechBadge` styles.
- **portfolio.css**: Portfolio layout, project cards, **ProjectsList**, **ProjectModal**, **FilterBar**.
- **about.css**: About layout plus **Contact** link row (`#contact-links`, `.icon`, `.icon-symbol`) from [`components/about/Contact.jsx`](../src/components/about/Contact.jsx).
- **resume.css**: Resume page only; sub-components live under [`components/resume/`](../src/components/resume/). **cover-letter.css** and **references.css** stay separate page stylesheets (not merged into `resume.css`).

When extracting another page’s components into a folder, follow the same pattern: merge that page’s component CSS into the existing page stylesheet under a labeled section.

## About / Resume notes

- **`.icon`** on the About Contact list is a generic class name; it only appears under `#about` / `#contact-links`. If you add another `.icon` elsewhere on the About page, consider renaming to `.about-contact__link` (BEM) to avoid clashes.
