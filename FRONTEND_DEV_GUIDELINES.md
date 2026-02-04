# Frontend Development Guidelines

Welcome to the **Bem-Estar-Digital** project. This document outlines the standards, best practices, and design philosophy we follow to ensure a consistent, high-quality, and premium user experience.

---

## 🛠 Tech Stack

- **Core**: React 18 (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6)
- **State/Data**: TanStack Query (v5) + React Hook Form + Zod
- **Deployment**: Vercel

---

## 📂 Architecture & File Structure

Adhere to the following folder structure to maintain project organization:

- **`src/App.tsx`**: Centralized routing hub. Keep all routes here.
- **`src/pages/`**: Full-page components (Entry points).
  - The main entry page must be **`src/pages/Index.tsx`**.
- **`src/components/`**: Reusable UI components.
  - Sub-folders for complex components are encouraged.
- **`src/hooks/`**: Custom React hooks.
- **`src/lib/`**: External library configurations (e.g., Lucide, Shadcn utils).
- **`src/utils/`**: Helper functions and business logic.
- **`public/`**: Static assets like images and fonts.

---

## 🎨 Design Philosophy: "Premium Digital Well-being"

Our goal is to create an interface that feels **alive, immersive, and premium**.

### 1. Visual Excellence
- **Vibrant Color Palettes**: Use harmonious gradients and HSL-based colors. Avoid flat, generic colors (e.g., basic `#FF0000`).
- **Glassmorphism**: Utilize backdrop-blur, subtle borders, and translucent overlays to create depth.
- **Modern Typography**: Use clean, highly readable fonts (e.g., Inter, Outfit).
- **Dark Mode First**: Ensure the design looks stunning in dark mode by default.

### 2. Interaction & Feedback
- **Micro-animations**: Use Framer Motion for subtle hover effects, entrance animations, and state transitions.
- **Tactile Responses**: Interactive elements should have clear, smooth hover and active states.
- **Loading States**: Always provide premium-feeling skeletons or progress indicators (from Shadcn).

### 3. Consistency
- **Shadcn/UI**: Always prioritize pre-built Shadcn components.
- **Component Integrity**: Do not edit files inside `src/components/ui/` directly. If a change is needed, wrap them in a new component.
- **Tailwind CSS**: Use utility classes for 100% of the styling. Avoid inline `style` props unless dynamic values are required.

---

## 💻 Coding Standards

### TypeScript
- Always define interfaces/types for component props.
- Use `z.infer` with Zod for form schemas.
- Avoid the `any` type at all costs.

### React Practices
- **Functional Components**: Use `const Component = () => { ... }`.
- **Hooks**: Follow the Rules of Hooks strictly.
- **Performance**: Use `useMemo` and `useCallback` for expensive operations or when stability is needed for animations.

### SEO & Accessibility
- **Semantic HTML**: Use `<header>`, `<main>`, `<footer>`, `<section>`, and `<article>` correctly.
- **Headings**: Ensure a single `<h1>` per page with a logical hierarchy (`<h2>`, `<h3>`).
- **Meta Tags**: Include descriptive titles and meta descriptions for every page.
- **Accessibility**: Ensure all interactive elements have unique IDs and proper ARIA labels.

---

## 🚀 Workflow

1. **Plan**: Define the component/page requirements and visual style.
2. **Build**: Create the component using Tailwind and Shadcn.
3. **Animate**: Add Framer Motion triggers for polish.
4. **Test**: Verify responsive behavior across Mobile and Desktop.
5. **SEO**: Add metadata and semantic structure.

---

*Remember: Aesthetics are not just a feature; they are the core of our brand identity. Aim to WOW the user with every interaction.*
