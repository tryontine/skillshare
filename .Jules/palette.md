## 2025-04-09 - Accessible Focus Rings for Custom Inputs
**Learning:** When creating custom styled inputs that strip the native outline (using `outline-none`) from the inner `<input>` element, the surrounding container (like a `<label>`) needs to manually handle focus styling. Otherwise, keyboard users lose the visual indicator of where their focus is.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` (or similar design token equivalents) to the wrapping container of any custom input component that removes the native input outline.
