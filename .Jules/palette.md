## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-04-20 - Custom Input Focus States
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` element (often done to style a parent container as the "input field" like in SearchBar), native focus indicators are lost, making the component inaccessible to keyboard users.
**Action:** Apply `focus-within:ring-2 focus-within:ring-alpine` to the parent container (typically a `<label>`) when stripping outlines from inner input elements. This ensures WCAG-compliant keyboard focus visibility while maintaining custom UI designs.
