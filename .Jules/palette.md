## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Custom Input Focus Accessibility
**Learning:** When building custom inputs that use `outline-none` on an inner `<input>` to remove default styling, adjacent elements or wrapper labels often lack focus visibility, breaking WCAG keyboard navigation compliance.
**Action:** Always apply `focus-within:ring-*` and `focus-within:outline-none` to the parent container (like a `<label>`) when the inner input is styled with `outline-none`. Additionally, ensure native interactive elements adjacent to the custom input (like `<select>`) have matching `focus-visible:ring-*` styling to maintain a consistent accessibility experience.
