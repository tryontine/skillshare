## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-04-21 - Custom Input Focus Visibility
**Learning:** Custom inputs built with `outline-none` on the inner `<input>` element and relying on a parent container (like `<label>`) for styling fail to show keyboard focus indicators by default, breaking WCAG compliance for keyboard navigation.
**Action:** When building custom inputs that use `outline-none` on the inner `<input>`, apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` (using the relevant theme color) to the parent container to maintain WCAG-compliant keyboard focus visibility.
