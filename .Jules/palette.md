## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-26 - Custom Input Focus States
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` element (e.g. within a search bar label), the keyboard focus visibility is lost, breaking WCAG guidelines.
**Action:** Apply `focus-within:ring-2` (and your design system's ring color, like `focus-within:ring-alpine`) to the parent container (e.g., `<label>`) to properly maintain keyboard focus visibility. Additionally, ensure all form fields like `<select>` have either an associated `<label>` or an `aria-label` attribute.
