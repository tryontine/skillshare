## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-11-20 - Focus Management on Custom Input Containers
**Learning:** When using custom input designs that rely on a container element (like `<label>`) visually framing an inner `<input>` with `outline-none` (to remove default browser rings), keyboard navigation focus indicators are completely lost. This results in severe WCAG compliance issues as users cannot tell which field is active.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-[theme-color] focus-within:outline-none` to the parent container element whenever stripping out the default focus ring of a child `<input>`.
