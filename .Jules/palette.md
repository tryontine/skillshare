## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-06-08 - Accessible Focus States for Custom Inputs
**Learning:** When creating custom inputs where the inner input uses `outline-none`, adjacent non-custom interactive elements (like native `<select>` dropdowns) may lack consistent focus styles, resulting in poor WCAG-compliant keyboard focus visibility.
**Action:** Always verify that when `focus-within:ring-*` styles are used on custom input wrapper elements, adjacent native interactive elements similarly receive corresponding `focus-visible:ring-*` styles to maintain a unified and accessible keyboard navigation experience.
