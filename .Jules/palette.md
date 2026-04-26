## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-04-26 - Custom Input Focus Visibility Pattern
**Learning:** When building custom form inputs (like a search bar with an icon inside a wrapper) where the native inner `<input>` has `outline-none` applied to hide its default focus ring, the overall component loses keyboard focus visibility. This breaks WCAG compliance for keyboard navigation.
**Action:** Always apply `focus-within:outline-none focus-within:ring-2 focus-within:ring-[theme-color]` to the parent container (typically a `<label>`) of such inputs. This restores a clear, accessible focus indicator for the entire composite component when the internal input receives focus.
