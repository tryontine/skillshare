## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-03 - Custom Input Focus States
**Learning:** When building custom input containers (like an icon + `<input>` inside a `<label>`) where the inner input has `outline-none`, keyboard users lose focus visibility, leading to accessibility issues.
**Action:** Apply `focus-within:outline-none focus-within:ring-2 focus-within:ring-[theme-color]` to the parent container to ensure WCAG-compliant focus visibility is maintained for the entire visual input block.
