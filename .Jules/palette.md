## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.
## 2024-04-11 - Custom Input Focus States
**Learning:** The custom search bar used a structural pattern where a parent `<label>` styled as a container wrapped an inner `<input>` that had its outline removed (`outline-none`). This caused the search input to lack any visual focus indicator when navigating via keyboard, violating WCAG requirements.
**Action:** When building custom inputs that strip default outlines, always apply `focus-within:ring-*` and `focus-within:outline-none` to the parent container (e.g., `<label>`) to ensure robust, compliant focus states without custom CSS.
