## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-06-30 - Accessible Command Search Trigger
**Learning:** When converting non-interactive elements like <div>s to semantic <button>s, decorative items like shortcut hints (/) and icons can create noisy screen reader announcements.
**Action:** Use aria-hidden="true" on purely visual elements inside buttons to prevent them from being announced improperly by screen readers, and apply appropriate focus-visible utility classes.
