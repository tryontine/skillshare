## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Semantic Trigger Conversion
**Learning:** Non-interactive elements (`<div>`) used as search triggers lack native keyboard accessibility and focus visibility.
**Action:** Convert structural triggers to `<button>` elements with `focus-visible:ring-2` and apply `aria-hidden="true"` to internal icons or shortcut keys to prevent redundant screen reader announcements.
