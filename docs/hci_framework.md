# Empirical HCI & UX Design Framework

This framework defines the empirical Human-Computer Interaction (HCI) and accessibility constraints for Raf Matoza's portfolio application, as mandated by [.agents/AGENT_INSTRUCTIONS.md](file:///d:/3/myportfolio/.agents/AGENT_INSTRUCTIONS.md).

---

## 1. Core Interaction & Usability Laws

### 1.1 Sweller (1988) & Mayer (2002) — Cognitive Load Theory & Signaling Principle
- **Empirical Foundation:** Working memory capacity is strictly limited. Recruiter and engineering manager visual attention spans for initial screening typically average 10–30 seconds.
- **Implementation Constraints:**
  - Zero extraneous load: no auto-playing media, intrusive sound effects, splash screens, or nested dropdown menus.
  - Strong visual signaling: bold key technologies, structured summary badges, clear distinction between professional experience and academic coursework.
  - Dual-coding / multimedia principle: accompany key technical achievements with concise contextual tags without redundant visual clutter.

### 1.2 Hick-Hyman Law (Hick, 1952; Hyman, 1953) — Decision Time Optimization
- **Empirical Model:** $T = b \cdot \log_2(n + 1)$ where decision time scales logarithmically with choices $n$.
- **Implementation Constraints:**
  - Restrict the primary navigation to a maximum of 4 anchor targets:
    `[About, Experience, Projects, Contact]`.
  - Filter controls for technical projects must provide immediate single-click toggles without complex nested category trees.

### 1.3 Fitts's Law (Fitts, 1954) — Target Acquisition & Motor Efficiency
- **Empirical Model:** $MT = a + b \cdot \log_2\left(\frac{2D}{W}\right)$ where movement time decreases as target size $W$ increases and distance $D$ decreases.
- **Implementation Constraints:**
  - Interactive targets (buttons, links, icon toggles, copy actions) must maintain a minimum touch/click hit zone of **48×48 px** (WCAG 2.2 Target Size 2.5.8 and 2.5.5).
  - Clear spatial margins between adjacent interactive elements (minimum 8px spacing) to avoid misclicks.
  - Sticky or readily accessible top navigation to minimize travel distance across long viewports.

### 1.4 Tractinsky, Katz, & Ikar (2000) — Aesthetic-Usability Effect
- **Empirical Foundation:** "What is beautiful is usable." Users perceive visually structured, aesthetically harmonious interfaces as more usable and exhibit higher tolerance for minor operational friction.
- **Implementation Constraints:**
  - Strict typographic hierarchy and spacing system based on a disciplined 4px / 8px modular scale.
  - Harmonious, curated color palette with dark/light mode support using CSS variables and Tailwind tokens.
  - Intentional visual hierarchy: typography, whitespace, and elevation guide reader gaze directly to primary achievements (Mapúa Cum Laude, USHER Tech internship, IEEE publication).

### 1.5 Shneiderman (1986; 2016) — Direct Manipulation & Informative Feedback
- **Empirical Foundation:** Every user interaction must produce immediate, comprehensible, and non-disruptive system feedback.
- **Implementation Constraints:**
  - Interactive buttons and links must provide immediate hover, active, and focus transformations.
  - Copy-to-clipboard action for contact information (e.g. email) provides an accessible toast / micro-badge confirmation.
  - Visual scroll indicators or active nav link states inform user location within the document structure.

---

## 2. Accessibility & Web Standards (WCAG 2.2 AA)

- **Contrast Ratios (1.4.3 & 1.4.11):** Minimum contrast ratio of 4.5:1 for standard text (3:1 for large headings) and 3:1 for UI components and focus boundaries.
- **Semantic HTML5:** Strict structural landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`).
- **Heading Order (1.3.1):** Single logical `<h1>`, followed strictly by sequential `<h2>` and `<h3>` tags without skipping heading ranks.
- **Keyboard Navigation & Visible Focus (2.4.7 & 2.4.13):** Every interactive control is reachable via keyboard (`Tab`/`Shift+Tab`) with a distinctive 2px high-contrast outline focus ring.
- **Reduced Motion (2.3.3):** Honor `prefers-reduced-motion: reduce` by disabling transitions and animations for users with vestibular sensitivities.
- **Screen Reader Support:** Meaningful `aria-label` attributes on icon-only links and clear text alternatives for images (`alt` attributes).

---

## 3. Ground Truth Verification Protocol
- All technical skills, dates, companies, institutions, publications, and projects rendered in the UI must strictly match [docs/resume.md](file:///d:/3/myportfolio/docs/resume.md).
- Academic thesis work (`e-Simul8`), group coursework (`Budget Buddy`), and class projects (`Full-Stack E-Commerce`) are explicitly demarcated as Academic Projects, separate from commercial/professional experience (`USHER Technologies Inc.`, `Mapúa University Instructor`).
- Any skill or project not in the verified source of truth must not appear in the interface.
