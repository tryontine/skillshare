## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-06-26 - Consistent Keyboard Focus Across Input Types
**Learning:** Custom inputs (like a <label> wrapping an outline-none input) require focus-within:ring-* to show focus, while adjacent native inputs (like <select>) need focus-visible:ring-*. Mixing these without standardizing creates an inconsistent keyboard navigation experience where some fields silently trap focus.
**Action:** When building forms, always pair focus-within on custom wrappers with explicit focus-visible on adjacent native elements to ensure an unbroken, visible tab sequence across the entire form.
