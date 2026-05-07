# ⚡ Road to Avengers: Doomsday

> *94 titles. 8 phases. One timeline. No escape.*

A cinematic, maximalist Marvel watch order tracker built for the obsessed — packed with JARVIS-style HUD effects, canvas animations, and a fully playable minigame. All in vanilla HTML, CSS, and JavaScript.

**Live at →** [https://itsrudraksh.github.io/doomsday/](https://itsrudraksh.github.io/doomsday/)

---

## ✨ Features

### 🤖 JARVIS/FRIDAY Splash Screen
Full-screen boot sequence on every load. Canvas-rendered hex grid, 3 rotating arc rings (CW/CCW/CW), radar sweep with fading ghost trail, random radar blips, and corner targeting brackets. Iron Man ASCII helmet types in character by character, followed by 8 boot terminal lines. Ends with the **DOOMSDAY PROTOCOL** reveal. Click anywhere to skip.

### 📋 Watch Order Timeline
94 Marvel titles across 8 phases in strict chronological order:
- 🦊 Fox X-Men Universe (13 titles)
- 🕷️ Sony Legacy Spider-Men (5 titles)
- ⚙️ MCU Infinity Saga (38 titles)
- 📺 Defenders Universe (11 titles)
- 🌀 MCU Multiverse Saga (13 titles)
- 🕸️ Sony Spider-Verse (7 titles)
- ⚡ MCU Phase 5–6 (7 titles)
- 🔥 2026 Pre-Doomsday Drops (7 titles — updates as they release)

### 💎 Infinity Gauntlet Tracker
Sticky 6-stone progress bar (Power · Space · Reality · Soul · Time · Mind). Each stone tracks phase-specific completion and pulses gold when the phase is fully watched.

### 🌀 Reality Tear Dividers
Between each phase, a jagged SVG crack tears across the full width as it scrolls into view — color-coded per phase, with pulsing energy spark dots on the tear.

### 🕰️ Doom Clock
Concentric 4-ring SVG countdown to December 18, 2026. Each ring rotates independently at different speeds and directions, with glowing arcs that shrink as time passes.

### ⚡ Thanos Snap Disintegration
Mark any title as watched and it dissolves into a canvas particle burst — genuine Thanos snap dust physics on every card.

### 🌩️ Thor Lightning
Scroll to a certain depth and branching lightning strikes across a fixed canvas overlay, with a white screen flash.

### 🌀 Doctor Strange Portal
Click the **ENTER THE MULTIVERSE** CTA and a sling-ring spark animation expands into a full portal reveal.

### 🌊 Phase Parallax Depth
Each phase section has a colored atmospheric glow blob that drifts at 0.28× scroll speed, creating genuine multi-depth layering.

### 🎮 Infinity Trial — Minigame
Fully playable arena game at the bottom of the page:
- Move your cursor to control a glowing hero
- Collect all **6 hexagonal Infinity Stones** (magnetic pull when close)
- Dodge **Outrider enemies** that home in on you — every stone collected spawns a **new enemy**
- 3 lives, escalating speed, local best-time leaderboard
- Win screen: **GAUNTLET COMPLETE**

### 🔧 Controls
- **Search** — filter titles by name in real-time
- **Phase pills** — filter to a single phase
- **✓ ALL DONE** — mark all 94 titles watched instantly
- **↺ RESET** — clear all progress
- All state persists via `localStorage`

---

## 🛠️ Stack

| Layer | Tech |
|---|---|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (`@property`, `mask-composite`, `clamp()`) |
| Logic | Vanilla JavaScript (no frameworks, no dependencies) |
| Animation | Canvas API + `requestAnimationFrame` |
| Fonts | Syne · Chakra Petch · Share Tech Mono (Google Fonts) |
| Storage | `localStorage` |

Zero build step. Zero dependencies. Open `index.html` and it runs.

---

## 🚀 Running Locally

```bash
git clone https://github.com/YOUR_USERNAME/marvel-doomsday.git
cd marvel-doomsday
# Open index.html in any browser — no server needed
```

Or serve with any static server:
```bash
npx serve .
# → http://localhost:3000
```

---

## 📁 Structure

```
marvel-doomsday/
├── index.html        # Full page structure + splash overlay
├── styles.css        # ~1700 lines — design system, animations, HUD styles
├── app.js            # ~1500 lines — all canvas engines + game logic
├── latest-data.md    # Watch order source data
└── README.md
```

---

## 🎬 Animation Systems

| System | Implementation |
|---|---|
| JARVIS HUD | Canvas RAF loop — hex grid, 3 arc rings, radar sweep |
| Void background | Canvas particle field (150 floating dots) |
| Cursor trail | Multi-dot smooth lerp trail |
| Thanos snap | Per-card canvas particle simulation |
| Thor lightning | Branching recursive line canvas |
| Strange portal | 2-phase sling-ring spark → portal expand |
| Doom Clock | SVG `stroke-dasharray` driven by `tickCountdown()` |
| Reality tears | SVG path with `stroke-dashoffset` animation |
| Phase parallax | `getBoundingClientRect()` + RAF scroll handler |
| Infinity Trial | Full game loop — physics, collision, particle FX |

---

## 📅 Doomsday Countdown

**Avengers: Doomsday — December 18, 2026**

The Doom Clock ticks in real time.

---

*Built for the obsessed. Not affiliated with Marvel Studios.*
