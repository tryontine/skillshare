## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-04-12 - Custom Input Wrapper Focus Visibility
**Learning:** When building custom inputs that wrap a native `<input>` inside a `<label>` (like search bars with icons), applying `outline-none` to the inner input removes the browser's default focus ring, making keyboard navigation inaccessible. The focus state must be lifted to the parent container.
**Action:** When a custom input design requires hiding the default focus ring on the `<input>` element via `outline-none`, always apply `focus-within:outline-none focus-within:ring-2 focus-within:ring-*` (e.g., `focus-within:ring-alpine`) to the parent container (e.g., `<label>`) to maintain WCAG-compliant keyboard focus visibility.
