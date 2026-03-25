## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-18 - Missing ARIA Labels on Select Elements
**Learning:** The application had <select> elements without associated <label> or aria-label attributes, making them inaccessible to screen readers. While wrapping <label> elements are used elsewhere, standalone select elements (like SortSelect) were missing labels entirely.
**Action:** Always verify that interactive elements, especially <select> dropdowns, have an associated <label> or an aria-label attribute to ensure screen reader accessibility.
