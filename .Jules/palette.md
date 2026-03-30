## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2025-03-30 - Custom Input Wrapper Focus Visibility
**Learning:** When creating custom styled inputs by wrapping a raw `<input className="outline-none">` inside a styled `<label>` container (like a search bar pill), the parent label loses keyboard focus indicators by default. This causes a severe WCAG accessibility violation for keyboard users.
**Action:** When using `outline-none` on an inner input for custom styling, always apply `focus-within:ring-*` and `focus-within:outline-none` (or similar focus classes) to the parent container to maintain clear, visible focus states during keyboard navigation.
