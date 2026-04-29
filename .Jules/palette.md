## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-04-29 - Focus visibility for composite inputs
**Learning:** When building composite input components (like a search bar with an icon) where the actual `<input>` has `outline-none` and the visual borders are handled by a parent wrapper (like `<label>`), keyboard focus becomes invisible to users.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` (and an appropriate transition) to the parent container when the child input suppresses its native outline, ensuring WCAG-compliant keyboard focus visibility.
