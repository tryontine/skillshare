## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-13 - Focus Styles on Input Wrappers
**Learning:** When custom input components wrap a native `<input>` element (which often uses `outline-none`) inside a container (like a `<label>` or `<div>`), keyboard users lose focus visibility.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-*` (e.g., `focus-within:ring-alpine`) to the parent container wrapping the inner `outline-none` `<input>` to ensure the entire component shows focus state correctly for keyboard navigation.
