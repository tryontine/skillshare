## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-01 - Focus Visible Styles for Custom Composite Inputs
**Learning:** When building custom composite input fields where a wrapper element (like `<label>`) visually acts as the input and the actual `<input>` element has `outline-none` applied to remove its default focus styling, the entire component loses keyboard focus visibility. This violates WCAG accessibility guidelines.
**Action:** Always apply `focus-within:outline-none focus-within:ring-2 focus-within:ring-alpine` to the container/wrapper of custom composite inputs where the inner input uses `outline-none`. This restores WCAG-compliant keyboard focus visibility to the visual bounds of the composite component.
