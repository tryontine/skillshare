## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Focus States for Custom Input Components
**Learning:** Custom inputs that use `outline-none` on the inner `<input>` need `focus-within:ring-*` and `focus-within:outline-none` on their parent container (like `<label>`) to maintain WCAG-compliant keyboard focus visibility. Additionally, adjacent native `<select>` dropdowns must be given `focus-visible:ring-*` and `focus-visible:outline-none` to match this custom style.
**Action:** When creating custom form inputs or modifying non-native looking dropdowns, always ensure they are fully navigable via keyboard by adding the proper `focus-within` to custom wrappers and `focus-visible` to adjacent interactive elements, using the primary design system focus ring (e.g., `ring-alpine`).
