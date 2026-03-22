## 2024-03-22 - Standard HTML Buttons Lack Design System Accessibility
**Learning:** Standard HTML `<button>` elements bypass the design system's default accessibility features (like `focus-visible` focus rings) and interactive feedback, making them inaccessible for keyboard users and inconsistent with the UI.
**Action:** Always use the `@/components/ui/button` `Button` component instead of standard HTML `<button>` elements across the codebase to maintain consistent design system styling, accessibility (like focus states), and interactive feedback.
