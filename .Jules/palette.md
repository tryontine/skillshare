## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-10-24 - Consistent Mixed Input Focus States
**Learning:** When mixing custom input wrappers with native interactive elements like `<select>` dropdowns, standard focus outlines become visually disjointed. The custom wrapper lacks focus indicators while native elements use default browser outlines.
**Action:** Apply `focus-within:ring-2 focus-within:ring-alpine` to custom input wrappers, and manually override adjacent native elements (e.g., `<select>`) with `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine` to maintain a cohesive, accessible focus ring across the entire form.
