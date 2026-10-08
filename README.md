# UPSC ZONE AI — Smart UPSC Preparation Platform

An AI-powered preparation command center for UPSC Civil Services Examination (CSE) aspirants, engineered for the Hackathon UI Challenge.

Built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide React**.

---

## 🏛️ Design Philosophy & Aesthetics

- **Calm, High-Yield Workspace**: Eliminates syllabus anxiety using a soothing warm cream palette (`#FDF9F1` / `#FAF6EE`), deep ink forest green (`#133026`), and purposeful saffron/amber accents (`#F59E0B`).
- **Editorial Typography**: High-impact editorial serif headlines (`Playfair Display`) paired with clean, ultra-readable body text (`Inter`).
- **100% Original & Content Safe**: Zero commercial coaching brand names, zero copyrighted book titles, zero political bias, and non-affiliated official disclaimer.

---

## 🌟 Key Features & Signature Interactive Elements

1. **Live Prelims Countdown Ticker & Stoic Quotes**:
   - Real-time countdown to Prelims (`src/config/exam.js`) with ticking seconds and pulse indicator.
   - Rotates through 7 stoic quotes for aspirants based on the day of the week.

2. **Interactive 2-Column Command Center Showcase**:
   - 3 Synchronized workspace tabs:
     - **Daily Study Plan**: Spaced revision and study pacing, circular syllabus progress ring (68%), and interactive checklist.
     - **PYQ Insights**: 25-Year (2000-2024) topic trends and heatmaps.
     - **AI Answer Feedback**: Structure, keywords and rubric score.

3. **Interactive "Plan Your Day" Study Hours Slider**:
   - Real-time 1–8 hour allocation slider with animated stacked visual bar.
   - One-click presets: **Working Professional** (3.5 hrs) vs **Full-Time Aspirant** (7.5 hrs).
   - Dynamically calculates core static reading, national editorials, PYQ elimination drills, and flashcards.

4. **Features Bento Grid**:
   - **Interactive Option Elimination Simulator**: Try eliminating misleading distractor options on real-style GS questions.
   - **25-Year PYQ Recurrence Chart**: Visual topic recurrence bars.
   - 4 Micro-feature cards: Active Recall, CSAT Speed Drills, Current Affairs, and Editorial Mindmaps.

5. **AI Answer Lab (Dark Focal Section)**:
   - Live interactive prompt box allowing aspirants to enter GS questions and receive simulated structural feedback.

6. **Accessible Aspirant Auth Modal**:
   - Accessible dialog (`role="dialog"`, focus trap, ESC & outside-click close).
   - Seamless tabs: "Aspirant Login" and "Start Free Prep" (with CSE Target Year and Optional Subject selectors).
   - Simulated demo authentication and Google Sign-in flow.

7. **5-Item FAQ Accordion**:
   - Smooth expand/collapse answering top preparation questions.

8. **Navigation & Accessibility**:
   - Sticky navbar with backdrop blur and scroll shadow.
   - Active section detection via `IntersectionObserver`.
   - Floating "Back to Top" button.
   - Fully keyboard and screen-reader accessible with WCAG AA compliant contrast ratios.

---

## 🚀 Run & Deploy Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- `npm`

### Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd UPSC_webpage
npm install
```

### Local Development
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
Generate an optimized production build:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📜 Legal & Disclaimer

**UPSC ZONE AI** is an independent educational technology project designed for demonstration and hackathon review purposes. It is not affiliated with, endorsed by, or connected to the Union Public Service Commission (UPSC) or any governmental organization. All mock questions and data shown are simulated for illustrative purposes.
