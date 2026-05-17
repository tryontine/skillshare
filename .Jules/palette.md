## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-05-17 - Focus visibility for outline-none inputs
**Learning:** Custom inputs that use `outline-none` on an inner `<input>` (for layout reasons) lose their default keyboard focus indicator, which breaks WCAG accessibility.
**Action:** When building custom inputs, always apply `focus-within:ring-*` and `focus-within:outline-none` to the parent container (like a `<label>`) to maintain clear focus visibility when the inner input receives focus.
