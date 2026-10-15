# Empirical HCI & Web Usability Research References

This document records peer-reviewed and standards-body research informing the design, layout, interaction dynamics, and accessibility of the portfolio, adhering to the requirements of [.agents/AGENT_INSTRUCTIONS.md](file:///d:/3/myportfolio/.agents/AGENT_INSTRUCTIONS.md).

---

## 1. Accessibility & Interface Foundations

### 1.1 World Wide Web Consortium (W3C) — WCAG 2.2
- **Citation:** World Wide Web Consortium (W3C). (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation.
- **Stable URL:** https://www.w3.org/TR/WCAG22/
- **Key Findings:**
  - Guideline 2.5.8 (Target Size - Minimum): The size of the target for pointer inputs is at least 24×24 CSS pixels, but enhanced usability (2.5.5 AAA and mobile ergonomics) dictates 44×44 to 48×48 CSS pixels.
  - Guideline 2.4.11 / 2.4.13 (Focus Appearance): Focus indicators must have an area with at least 3:1 contrast ratio against adjacent colors and a minimum perimeter thickness.
  - Guideline 1.4.3 (Contrast - Minimum): Text and images of text must maintain a contrast ratio of at least 4.5:1 (3:1 for large scale text).
- **Practical Implications:** Buttons and anchor badges must feature minimum 48×48 px touch bounds with explicit outline focus rings and tested contrast ratios.

---

## 2. Cognitive Load & Information Architecture

### 2.1 Sweller, J. (1988); Sweller, van Merriënboer, & Paas (2019)
- **Citation:** Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). Cognitive Architecture and Instructional Design: 20 Years Later. *Educational Psychology Review*, 31(2), 261–292.
- **DOI:** https://doi.org/10.1007/s10648-019-09465-5
- **Key Findings:** Intrinsic, extraneous, and germane cognitive loads directly modulate task comprehension and memory recall. Interfaces cluttered with irrelevant visual stimuli diminish user comprehension of core competencies.
- **Practical Implications:** Eliminate visual noise (excessive animations, decorative widgets, auto-scrolling tickers). Emphasize clear visual signaling (bolding, tags, consistent visual grouping) to enable rapid scanning.

### 2.2 Mayer, R. E. (2021)
- **Citation:** Mayer, R. E. (2021). *Multimedia Learning* (3rd ed.). Cambridge University Press.
- **DOI:** https://doi.org/10.1017/9781316941355
- **Key Findings:** Signaling principle (people learn and retain information better when cues point to the organization of essential material) and Coherence principle (excluding extraneous words, pictures, and symbols enhances learning).
- **Practical Implications:** Use clean, concise summary cards where key achievements (Cum Laude, USHER internship, IEEE publications) are visually signaled through disciplined hierarchy.

---

## 3. Decision Time & Motor Control

### 3.1 Hick, W. E. (1952); Hyman, R. (1953)
- **Citation:** Hick, W. E. (1952). On the rate of gain of information. *Quarterly Journal of Experimental Psychology*, 4(1), 11–26. / Hyman, R. (1953). Stimulus information as a determinant of reaction time. *Journal of Experimental Psychology*, 45(3), 188–196.
- **Key Findings:** Reaction/decision time increases logarithmically as the number of available alternatives increases ($T = b \log_2(n + 1)$).
- **Practical Implications:** Constrain top navigation to four primary destinations (`About`, `Experience`, `Projects`, `Contact`). Avoid deep multi-tier navigation menus.

### 3.2 MacKenzie, I. S. (1992); Fitts, P. M. (1954)
- **Citation:** MacKenzie, I. S. (1992). Fitts' law as a research and design tool in human-computer interaction. *Human-Computer Interaction*, 7(1), 91–139.
- **Key Findings:** Rapid aimed movements conform to Shannon formulation of Fitts's law: movement time is a linear function of the index of difficulty $\log_2(2D / W)$.
- **Practical Implications:** Primary interactive calls-to-action (e.g. "View Project", "Copy Email", "Download Resume", "GitHub") must be generously sized with clear margins to reduce target acquisition errors.

---

## 4. Visual Aesthetics & Perceived Usability

### 4.1 Tractinsky, N., Katz, A. S., & Ikar, D. (2000)
- **Citation:** Tractinsky, N., Katz, A. S., & Ikar, D. (2000). What is beautiful is usable. *Interacting with Computers*, 13(2), 127–145.
- **DOI:** https://doi.org/10.1016/S0953-5438(00)00031-X
- **Key Findings:** Aesthetic perceptions formed during pre-interaction phases correlate strongly with perceived usability during and after actual interaction.
- **Practical Implications:** A modern, polished layout with consistent typography, harmonious color palettes, and balanced whitespace fosters trust and communicates engineering rigor to technical recruiters.

### 4.2 Miniukovich, A., & De Angeli, A. (2015); Reinecke et al. (2013)
- **Citation:** Miniukovich, A., & De Angeli, A. (2015). Computation of Interface Aesthetics. In *Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems (CHI '15)* (pp. 1163–1172). ACM.
- **DOI:** https://doi.org/10.1145/2702123.2702575
- **Key Findings:** Visual complexity and layout symmetry are primary determinants of initial visual appeal and scanning efficiency. Interfaces with balanced alignment and high visual order yield significantly lower cognitive fatigue.
- **Practical Implications:** Adhere to an explicit 4px/8px modular grid, align textual baselines, and maintain visual symmetry across responsive breakpoints.

---

## 5. Modern Web Performance & Interaction Perceptions (2021+)

### 5.1 Google Chrome Team — Core Web Vitals (2023–2024)
- **Citation:** Google Chrome Developers. (2024). *Interaction to Next Paint (INP) & Largest Contentful Paint (LCP)*. web.dev.
- **Stable URL:** https://web.dev/articles/inp
- **Key Findings:** INP assesses overall page responsiveness by measuring the latency of all click, tap, and keyboard interactions throughout a user's visit. Latencies below 200 milliseconds are perceived as instantaneous direct manipulation.
- **Practical Implications:** Avoid heavy runtime frameworks or blocking main-thread calculations. Use lightweight vanilla React components, CSS-driven transitions, and zero unneeded third-party libraries.
