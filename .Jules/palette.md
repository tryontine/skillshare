## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Keyboard Focus on Custom Input Containers
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` (like the SearchBar), the keyboard focus visibility is lost, breaking WCAG compliance for keyboard users.
**Action:** Always apply `focus-within:ring-*` (e.g., `focus-within:ring-2 focus-within:ring-alpine`) and `focus-within:outline-none` to the parent container (like the wrapping `<label>`) to maintain visible keyboard focus while keeping the custom styling intact.
