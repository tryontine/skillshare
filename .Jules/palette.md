## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-24 - Custom Input Focus Rings
**Learning:** Custom inputs built by wrapping unstyled `<input className="outline-none">` tags within a styled `<label>` container lose native keyboard focus visibility, causing WCAG compliance failures for keyboard users.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` to the parent container (like a `<label>`) when the inner input uses `outline-none`. Furthermore, apply `focus-visible:ring-2 focus-visible:ring-alpine focus-visible:outline-none` to adjacent native form elements like `<select>` to maintain a cohesive focus style across mixed custom and native form groups.
