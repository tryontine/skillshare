## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-06-09 - Custom Input Focus Accessibility Pattern
**Learning:** Custom inputs that use `outline-none` on the inner `<input>` need focus rings applied to their parent container (like a `<label>`) using `focus-within:ring-*` to maintain WCAG-compliant keyboard focus visibility. Furthermore, adjacent native interactive elements like `<select>` dropdowns must also have explicit `focus-visible:ring-*` classes to match this styling.
**Action:** When building custom input wrappers, apply `focus-within:outline-none focus-within:ring-2 focus-within:ring-[theme-color]` to the parent, and ensure sibling elements (like `<select>`) use matching `focus-visible` utility classes for a consistent keyboard navigation experience.
