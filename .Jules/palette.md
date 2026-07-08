## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.
## 2024-07-08 - Accessible Search Triggers
**Learning:** Global command search triggers are often visually designed as non-interactive `<divs>`, but they function as buttons that open modals. This lacks native keyboard focus, screen reader accessibility, and appropriate interactive feedback states.
**Action:** Always convert global functional visual elements like search bars into `<button type="button">` wrappers, ensuring proper focus states (`focus-visible:ring-2`), hover transitions, and using `aria-hidden` on purely visual internal elements like shortcut key indicators.
