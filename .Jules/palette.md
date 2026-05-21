## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-21 - Custom Input Outline Replacements
**Learning:** When custom input fields (like search bars with an icon) are wrapped in a `<label>` or container, the inner `<input>`'s outline is often removed (`outline-none`) to maintain aesthetics. This inadvertently breaks keyboard navigation accessibility as focus indicators disappear entirely.
**Action:** Whenever applying `outline-none` to a custom `<input>`, always ensure the parent wrapper uses `focus-within:ring-2 focus-within:ring-alpine` (or similar design system tokens) so the interactive region clearly indicates keyboard focus.
