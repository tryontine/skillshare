## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.
## 2024-03-25 - Custom Input and Select Focus Rings
**Learning:** Custom input wrappers and adjacent native selects lacked explicit focus rings, breaking WCAG-compliant keyboard accessibility.
**Action:** Always apply focus-within:ring-2 and focus-within:ring-alpine to custom input wrappers, and focus-visible variants to native selects.
