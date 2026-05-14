## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-05-14 - Custom Input Focus States
**Learning:** When building custom input components that wrap a native input element (using outline-none to hide the native focus ring), keyboard accessibility is often completely lost. This was observed in the SearchBar component.
**Action:** Always apply Tailwind's focus-within:ring-2 focus-within:outline-none to the parent wrapping container (like the label) when the child input uses outline-none. This restores WCAG-compliant focus visibility for keyboard users while maintaining the custom design.
