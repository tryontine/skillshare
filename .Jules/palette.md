## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.
## 2026-04-16 - Custom Input Focus Accessibility
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` to strip browser defaults, the keyboard focus styling is completely lost. This is a common accessibility trap in this app's design system.
**Action:** Always apply `focus-within:ring-*` (e.g., `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none`) to the parent container (usually a `<label>`) that wraps the custom input. This restores WCAG-compliant keyboard focus visibility while maintaining the non-focused visual design.
