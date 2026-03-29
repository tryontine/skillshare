## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-29 - Inline Input Focus States
**Learning:** Adding custom CSS rules for generic focus states in a Tailwind-driven project violates utility-first principles and boundary rules ("Use existing classes"). Furthermore, input fields across multiple auth pages were completely missing explicit visual focus feedback for keyboard navigation.
**Action:** Always apply the design system's focus utilities (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine`) explicitly on form elements (e.g., `<input>`) rather than defining global pseudo-selectors in standard CSS.
