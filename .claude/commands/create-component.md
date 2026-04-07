Scaffold a new React component based on the name and description provided by the user.

Follow these rules:
- Output the file at `src/components/<Name>.tsx` (or inside `ui/` or `three/` subfolder if appropriate)
- Use TypeScript with a named `Props` interface exported alongside the component
- Use Tailwind CSS utility classes for all styling — no inline styles
- If the component is animated, include Framer Motion `variants` and `motion.*` elements
- If the component renders 3D content, use `@react-three/fiber` Canvas and `@react-three/drei` helpers
- Export the component as a named export AND as the default export
- Add a short JSDoc comment above the component describing what it does

Ask the user for:
1. Component name (PascalCase)
2. Short description of what it does
3. Whether it needs animation (Framer Motion), 3D (R3F), both, or neither

Then generate the complete file and write it to the correct path.
