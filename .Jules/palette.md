## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.
## 2026-05-08 - Semantic Clickable Regions
**Learning:** Using non-interactive elements like `<div>` for clickable regions (e.g., search triggers) misses out on native accessibility features like tab indexing and focus visibility, making keyboard navigation difficult.
**Action:** Always use semantic interactive elements like `<button>` instead of `<div>` for actionable regions to ensure out-of-the-box keyboard accessibility and unified focus states across the application.
