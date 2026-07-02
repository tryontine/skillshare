## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Consistent Focus Rings on Custom Inputs
**Learning:** When building custom input wrappers (like a styled label around a borderless input), the wrapper needs `focus-within` styles to show focus, but adjacent native elements like `<select>` still need `focus-visible` to match. If we only style the custom wrapper and forget the native elements, keyboard navigators experience a jarring, inconsistent focus trail.
**Action:** When implementing custom focus rings (e.g., `focus-within:ring-alpine`) for custom inputs, also apply corresponding `focus-visible:ring-*` and `focus-visible:outline-none` utility classes to adjacent native interactive elements like `<select>` dropdowns to maintain a consistent accessibility experience.
