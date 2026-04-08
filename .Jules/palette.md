## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-04-08 - Custom Input Focus States
**Learning:** Using `outline-none` on an inner `<input>` element removes the default browser focus ring, rendering it invisible to keyboard users and violating WCAG focus visibility requirements.
**Action:** When building custom inputs that wrap an un-outlined `<input>` inside a parent container (like a `<label>`), apply `focus-within:ring-2` and `focus-within:outline-none` to the parent container to ensure keyboard focus remains distinctly visible while styling the input seamlessly.