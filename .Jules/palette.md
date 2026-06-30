## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-06-30 - Accessible Search Triggers
**Learning:** Non-interactive elements (`div`) were used for search triggers, breaking keyboard navigation. Also, visual keyboard shortcut hints (like `/`) are announced confusingly by screen readers ("slash") if not explicitly hidden.
**Action:** Always use `<button>` for interactive triggers to ensure native tab indexing and focus visibility. Apply `aria-hidden="true"` to visual hints and icons contained within accessible buttons.
