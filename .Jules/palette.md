## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-18 - Keyboard Accessibility for Custom Input Wrappers
**Learning:** When creating custom styled inputs that use `outline-none` on the native `<input>` element (often done to wrap the input with icons inside a styled `<label>` or `<div>`), the native keyboard focus indicator is lost. This makes it impossible for keyboard users to know when the input has focus.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine` (and `focus-within:outline-none`) to the parent container wrapping the `outline-none` input. This restores clear, WCAG-compliant visual focus indication whenever the inner input is active.
