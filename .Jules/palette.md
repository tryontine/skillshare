## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-06-01 - Focus Accessibility for Custom Inputs
**Learning:** Custom inputs that use `outline-none` on the inner `<input>` element lose visible focus states. Applying `focus:ring` directly to the inner input often looks detached from the visual container (like a search bar with an icon).
**Action:** When building custom inputs, apply `focus-within:ring-*` and `focus-within:outline-none` to the parent container (like a `<label>` wrapper) to maintain WCAG-compliant keyboard focus visibility.
