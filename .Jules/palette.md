## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-12 - Keyboard Accessibility for Custom Input Wrappers
**Learning:** When using `outline-none` on native child `<input>` elements to style custom parent wrappers (like `<label>`), the native keyboard focus indicator is suppressed. This creates a critical WCAG accessibility violation.
**Action:** Always apply `focus-within:outline-none focus-within:ring-2` (and appropriate ring color like `focus-within:ring-alpine`) to the parent container when the child input's outline is disabled to ensure consistent focus visibility.
