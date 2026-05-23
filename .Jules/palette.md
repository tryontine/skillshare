## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Semantic Triggers & Focus-Within Accessibility
**Learning:** Using `<div>` for interactive triggers (like command searches) breaks native keyboard navigation (`Tab` indexing) and makes it harder to apply standard focus styles. Also, when building custom inputs that strip default outlines from the inner `<input>`, keyboard focus visibility is lost if not applied to the container.
**Action:** Always use `<button>` for non-navigational interactive elements to maintain accessibility. When an inner `<input>` has `outline-none`, apply `focus-within:ring-*` and `focus-within:outline-none` to its wrapper (like `<label>`) to ensure WCAG-compliant focus visibility.
