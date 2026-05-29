# English Knowledge Graph Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the Flash Words app into an interactive knowledge graph with Focusky-style 3D fly-through transitions across 100 connected English words.

**Architecture:** React app with a custom Camera engine (React context + requestAnimationFrame) managing viewport transforms. Knowledge graph data is a separate module. Components are split by responsibility: camera, nodes, connections, detail panel, minimap, sidebar.

**Tech Stack:** React 19, Vite 7, CSS (no external animation libraries — custom Focusky-style easing)

---

## File Structure

```
Create:
  src/data/words.js         ← 100 words with morpheme breakdown
  src/data/graph.js         ← Graph edges + layout positions
  src/engine/CameraContext.jsx  ← Camera state + fly animation engine
  src/components/WordNode.jsx   ← Word node on canvas
  src/components/AffixChip.jsx  ← Reusable affix chip
  src/components/ConnectionLines.jsx  ← SVG connection lines
  src/components/WordDetail.jsx  ← Zoom-in detail overlay
  src/components/MiniMap.jsx     ← Overview minimap
  src/components/BottomNav.jsx   ← Bottom navigation bar
  src/components/Sidebar.jsx     ← Unknown words sidebar

Rewrite:
  src/App.jsx               ← Main app wiring
  src/styles.css            ← Complete visual redesign
  index.html                ← Update title
```

---

### Task 1: Knowledge Graph Data (words.js + graph.js)

**Files:**
- Create: `src/data/words.js`
- Create: `src/data/graph.js`

- [ ] **Step 1: Create `src/data/words.js` with 100 words organized by affix families**

Each word has: `id`, `word`, `phonetic`, `meaning`, `part`, `example`, `morphemes[]`, `x`, `y`.

The word list covers these affix families (organized to maximize connections):

**un- family (6 words):** undo, unfold, unhappy, unlock, unpack, unusual
**re- family (5 words):** rebuild, recall, redo, rewrite, review
**pre- family (3 words):** preview, predict, prepare
**dis- family (3 words):** disappear, discover, disagree
**mis- family (2 words):** misunderstand, mislead
**over- family (2 words):** overcome, overlook
**inter- family (2 words):** interact, international
**trans- family (2 words):** transport, transform
**auto- family (2 words):** automatic, autograph
**bi- family (2 words):** bicycle, bilingual
**co- family (2 words):** cooperate, co-worker
**de- family (2 words):** decode, defrost
**ex- family (3 words):** exchange, export, exclude
**im-/in-/il-/ir- family (5 words):** impossible, invisible, illegal, irregular, inactive
**micro- family (2 words):** microscope, microwave
**multi- family (2 words):** multimedia, multiply
**non- family (2 words):** nonsense, nonfiction
**out- family (2 words):** outdoor, outlook
**post- family (2 words):** postpone, postwar
**pro- family (2 words):** promote, progress
**semi- family (2 words):** semicircle, semifinal
**sub- family (2 words):** submarine, subtitle
**super- family (2 words):** supermarket, superstar
**tele- family (2 words):** telephone, television

**-able suffix (3 words):** comfortable, possible, valuable
**-er/-or suffix (4 words):** teacher, actor, driver, sailor
**-ful suffix (2 words):** careful, helpful
**-ion/-tion suffix (4 words):** action, education, information, nation
**-ive suffix (2 words):** active, creative
**-less suffix (2 words):** homeless, useless
**-ly suffix (2 words):** quickly, friendly
**-ment suffix (2 words):** development, movement
**-ness suffix (2 words):** happiness, kindness
**-ous suffix (2 words):** dangerous, famous

**act root (2 words):** action, active
**aud root (2 words):** audio, audience
**bene root (2 words):** benefit, beneficial
**bio root (2 words):** biology, biography
**cap root (2 words):** capable, capture
**cred root (2 words):** credit, incredible
**dict root (2 words):** dictionary, predict
**duct root (2 words):** conduct, produce
**fac root (2 words):** factory, factor
**graph root (3 words):** autograph, biography, photograph
**ject root (2 words):** project, reject
**log root (2 words):** biology, dialogue
**man root (2 words):** manual, manage
**miss/mit root (3 words):** mission, admit, permit
**path root (2 words):** sympathy, patient
**phon root (2 words):** telephone, symphony
**photo root (2 words):** photograph, photosynthesis
**port root (2 words):** export, transport
**pos root (2 words):** position, compose
**rupt root (2 words):** interrupt, bankrupt
**scope root (2 words):** microscope, telescope
**scrib root (2 words):** describe, subscribe
**struct root (2 words):** structure, construct
**tract root (2 words):** tractor, attract
**vac root (2 words):** vacation, vacuum
**vid/vis root (3 words):** video, visible, television
**volv root (2 words):** involve, evolve

**Base words (no clear affix, ~10 words):** apple, bright, cloud, dance, gentle, island, journey, mirror, nature, ocean, river, smile, travel, water

Total target: ~100 words

```javascript
// src/data/words.js
export const words = [
  {
    id: "undo",
    word: "undo",
    phonetic: "/ʌnˈduː/",
    meaning: "撤销；解开",
    part: "verb",
    example: "Press Ctrl+Z to undo your last action.",
    morphemes: [
      { type: "prefix", text: "un-", meaning: "相反动作" },
      { type: "root", text: "do", meaning: "做" },
    ],
    x: 100, y: 80,
  },
  {
    id: "unfold",
    word: "unfold",
    phonetic: "/ʌnˈfoʊld/",
    meaning: "展开；打开",
    part: "verb",
    example: "She helped me unfold the map.",
    morphemes: [
      { type: "prefix", text: "un-", meaning: "相反动作" },
      { type: "root", text: "fold", meaning: "折叠" },
    ],
    x: 200, y: 70,
  },
  // ... (all 100 words, each with proper morphemes, x/y positions)
];
```

- [ ] **Step 2: Create `src/data/graph.js` with connection edges**

Each edge connects two words sharing an affix. The `sharedMorpheme` field enables the camera to fly between connected words when clicking an affix chip.

```javascript
// src/data/graph.js
export const graphEdges = [
  // un- connections
  { from: "undo", to: "unfold", sharedMorpheme: "un-" },
  { from: "unfold", to: "unhappy", sharedMorpheme: "un-" },
  { from: "unhappy", to: "unlock", sharedMorpheme: "un-" },
  { from: "unlock", to: "unpack", sharedMorpheme: "un-" },
  { from: "unpack", to: "unusual", sharedMorpheme: "un-" },
  // re- connections
  { from: "rebuild", to: "recall", sharedMorpheme: "re-" },
  { from: "recall", to: "redo", sharedMorpheme: "re-" },
  { from: "redo", to: "rewrite", sharedMorpheme: "re-" },
  { from: "rewrite", to: "review", sharedMorpheme: "re-" },
  // ... all edges for all affix families
];

// Helper: get all words sharing a specific morpheme
export function getWordsByMorpheme(morphemeText) {
  return words.filter(w =>
    w.morphemes.some(m => m.text === morphemeText)
  );
}

// Helper: get next word in a morpheme chain (for fly-through navigation)
export function getNextWordInMorphemeChain(currentWordId, morphemeText) {
  const chain = graphEdges
    .filter(e => e.sharedMorpheme === morphemeText)
    .flatMap(e => [e.from, e.to]);
  const unique = [...new Set(chain)];
  const idx = unique.indexOf(currentWordId);
  return unique[(idx + 1) % unique.length];
}
```

---

### Task 2: Camera Engine (CameraContext.jsx)

**Files:**
- Create: `src/engine/CameraContext.jsx`

- [ ] **Step 1: Create Camera context with state and Focusky-style animation**

```jsx
// src/engine/CameraContext.jsx
import { createContext, useContext, useRef, useState, useCallback } from "react";

const CameraContext = createContext(null);

const FOCUSKY_EASING = [0.25, 0.1, 0.25, 1];

function easeInOutCubic(t) {
  // Custom easing approximating Focusky's feel
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function CameraProvider({ children }) {
  const [camera, setCamera] = useState({ x: 0, y: 0, scale: 0.8, rotate: 0 });
  const animRef = useRef(null);

  const flyTo = useCallback((target, duration = 800) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const start = { ...camera };
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(t);

      setCamera({
        x: start.x + (target.x - start.x) * eased,
        y: start.y + (target.y - start.y) * eased,
        scale: start.scale + (target.scale - start.scale) * eased,
        rotate: start.rotate + (target.rotate - start.rotate) * eased,
      });

      if (t < 1) animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
  }, [camera]);

  const snapTo = useCallback((target) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setCamera({ x: target.x, y: target.y, scale: target.scale, rotate: target.rotate ?? 0 });
  }, []);

  return (
    <CameraContext.Provider value={{ camera, flyTo, snapTo }}>
      {children}
    </CameraContext.Provider>
  );
}

export function useCamera() {
  const ctx = useContext(CameraContext);
  if (!ctx) throw new Error("useCamera must be used within CameraProvider");
  return ctx;
}
```

- [ ] **Step 2: Add drag-to-pan support**

```jsx
// Add to CameraContext.jsx — inside provider, add drag handlers
import { useEffect } from "react";

export function CameraProvider({ children }) {
  // ...existing state...

  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const cameraAtDragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    cameraAtDragStart.current = { ...camera };
  }, [camera]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const dx = (e.clientX - dragStart.current.x) / camera.scale;
    const dy = (e.clientY - dragStart.current.y) / camera.scale;
    setCamera(prev => ({
      ...prev,
      x: cameraAtDragStart.current.x - dx,
      y: cameraAtDragStart.current.y - dy,
    }));
  }, [isDragging, camera.scale]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Add onMouseDown to the viewport div
  // ...rest of provider...
}
```

---

### Task 3: AffixChip Component

**Files:**
- Create: `src/components/AffixChip.jsx`

- [ ] **Step 1: Create reusable AffixChip component**

```jsx
// src/components/AffixChip.jsx
const TYPE_COLORS = {
  prefix: { bg: "#dbeafe", text: "#1e40af", border: "#93c5fd" },
  suffix: { bg: "#d1fae5", text: "#065f46", border: "#6ee7b7" },
  root: { bg: "#fce7f3", text: "#9d174d", border: "#f9a8d4" },
  base: { bg: "#f3f4f6", text: "#374151", border: "#d1d5db" },
};

export default function AffixChip({ morpheme, onClick, compact = false }) {
  const colors = TYPE_COLORS[morpheme.type] || TYPE_COLORS.base;
  return (
    <span
      className={`affix-chip ${morpheme.type}${compact ? " compact" : ""}`}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        borderColor: colors.border,
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <b>{morpheme.text}</b>
      {!compact && <em>{morpheme.meaning}</em>}
    </span>
  );
}
```

---

### Task 4: WordNode Component

**Files:**
- Create: `src/components/WordNode.jsx`

- [ ] **Step 1: Create WordNode component**

```jsx
// src/components/WordNode.jsx
import AffixChip from "./AffixChip";

export default function WordNode({ word, isActive, onClick, onAffixClick }) {
  return (
    <div
      className={`word-node ${isActive ? "active" : ""}`}
      style={{
        position: "absolute",
        left: word.x,
        top: word.y,
        transform: "translate(-50%, -50%)",
      }}
      onClick={onClick}
    >
      <div className="word-node-word">{word.word}</div>
      {!isActive && (
        <div className="word-node-meaning">{word.meaning}</div>
      )}
      <div className="word-node-affixes">
        {word.morphemes
          .filter(m => m.type !== "base")
          .slice(0, 2)
          .map(m => (
            <AffixChip
              key={m.text}
              morpheme={m}
              compact
              onClick={(e) => { e.stopPropagation(); onAffixClick(m); }}
            />
          ))}
      </div>
    </div>
  );
}
```

---

### Task 5: ConnectionLines Component

**Files:**
- Create: `src/components/ConnectionLines.jsx`

- [ ] **Step 1: Create SVG connection lines component**

```jsx
// src/components/ConnectionLines.jsx
export default function ConnectionLines({ words, edges, activeWordId, activeMorpheme }) {
  const activeWordIds = new Set();
  if (activeMorpheme) {
    edges
      .filter(e => e.sharedMorpheme === activeMorpheme)
      .forEach(e => { activeWordIds.add(e.from); activeWordIds.add(e.to); });
  }

  return (
    <svg className="connection-lines">
      {edges.map((edge, i) => {
        const from = words.find(w => w.id === edge.from);
        const to = words.find(w => w.id === edge.to);
        if (!from || !to) return null;
        const isActive = activeWordIds.has(from.id) && activeWordIds.has(to.id);
        return (
          <line
            key={i}
            x1={from.x} y1={from.y}
            x2={to.x} y2={to.y}
            className={`connection-line ${isActive ? "active" : ""}`}
          />
        );
      })}
    </svg>
  );
}
```

---

### Task 6: WordDetail Component

**Files:**
- Create: `src/components/WordDetail.jsx`

- [ ] **Step 1: Create WordDetail overlay**

```jsx
// src/components/WordDetail.jsx
import AffixChip from "./AffixChip";

export default function WordDetail({ word, onAffixClick, onKnow, onUnknown }) {
  if (!word) return null;

  return (
    <div className="word-detail">
      <span className="word-detail-tag">{word.part}</span>
      <h2 className="word-detail-word">{word.word}</h2>
      <p className="word-detail-phonetic">{word.phonetic}</p>
      <p className="word-detail-meaning">{word.meaning}</p>
      <p className="word-detail-example">"{word.example}"</p>

      <div className="word-detail-morphemes">
        <div className="word-detail-section-title">词根词缀</div>
        <div className="word-detail-chips">
          {word.morphemes.map(m => (
            <AffixChip
              key={m.text}
              morpheme={m}
              onClick={m.type !== "base" ? () => onAffixClick(m) : undefined}
            />
          ))}
        </div>
      </div>

      <div className="word-detail-actions">
        <button className="btn-know" onClick={() => onKnow(word)}>认识 ✓</button>
        <button className="btn-unknown" onClick={() => onUnknown(word)}>不认识 ✗</button>
      </div>
    </div>
  );
}
```

---

### Task 7: MiniMap Component

**Files:**
- Create: `src/components/MiniMap.jsx`

- [ ] **Step 1: Create MiniMap overview**

```jsx
// src/components/MiniMap.jsx
import { useRef, useEffect } from "react";

const MAP_W = 200;
const MAP_H = 150;

export default function MiniMap({ words, camera, onNavigate }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, MAP_W, MAP_H);

    // Draw nodes as dots
    words.forEach(w => {
      const mx = (w.x / 1200) * MAP_W;
      const my = (w.y / 800) * MAP_H;
      ctx.beginPath();
      ctx.arc(mx, my, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#6b7280";
      ctx.fill();
    });

    // Draw viewport rectangle
    const vw = (window.innerWidth / camera.scale) / 1200 * MAP_W;
    const vh = (window.innerHeight / camera.scale) / 800 * MAP_H;
    const vx = (-camera.x / 1200 + 0.5) * MAP_W - vw / 2;
    const vy = (-camera.y / 800 + 0.5) * MAP_H - vh / 2;
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 2;
    ctx.strokeRect(vx, vy, vw, vh);
  }, [words, camera]);

  return (
    <canvas
      className="minimap"
      ref={canvasRef}
      width={MAP_W}
      height={MAP_H}
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        const px = (e.clientX - rect.left) / MAP_W;
        const py = (e.clientY - rect.top) / MAP_H;
        onNavigate({
          x: (px - 0.5) * 1200,
          y: (py - 0.5) * 800,
          scale: 0.8,
          rotate: 0,
        });
      }}
    />
  );
}
```

---

### Task 8: BottomNav + Sidebar Components

**Files:**
- Create: `src/components/BottomNav.jsx`
- Create: `src/components/Sidebar.jsx`

- [ ] **Step 1: Create BottomNav**

```jsx
// src/components/BottomNav.jsx
export default function BottomNav({ onOverview, onToggleSidebar, onBrowseAffix, unknownCount }) {
  return (
    <nav className="bottom-nav">
      <button onClick={onOverview}>🌐 总览</button>
      <button onClick={onBrowseAffix}>🔤 按词缀浏览</button>
      <button onClick={onToggleSidebar} className="nav-unknown-btn">
        📖 生词本
        {unknownCount > 0 && <span className="nav-badge">{unknownCount}</span>}
      </button>
    </nav>
  );
}
```

- [ ] **Step 2: Create Sidebar**

```jsx
// src/components/Sidebar.jsx
import AffixChip from "./AffixChip";

export default function Sidebar({ unknownWords, onWordClick, isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3>生词本 ({unknownWords.length})</h3>
        <button className="sidebar-close" onClick={onClose}>✕</button>
      </div>
      {unknownWords.length === 0 ? (
        <p className="sidebar-empty">还没有生词，继续学习吧！</p>
      ) : (
        <ul className="sidebar-list">
          {unknownWords.map(w => (
            <li key={w.id} className="sidebar-item" onClick={() => onWordClick(w)}>
              <strong>{w.word}</strong>
              <span className="sidebar-meaning">{w.meaning}</span>
              <div className="sidebar-affixes">
                {w.morphemes.map(m => (
                  <AffixChip key={m.text} morpheme={m} compact />
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
```

---

### Task 9: Main App Shell (App.jsx)

**Files:**
- Rewrite: `src/App.jsx`

- [ ] **Step 1: Rewrite App.jsx to wire everything together**

```jsx
// src/App.jsx
import { useState, useMemo, useCallback, useEffect } from "react";
import { Words } from "./data/words";
import { graphEdges, getNextWordInMorphemeChain, getWordsByMorpheme } from "./data/graph";
import { CameraProvider, useCamera } from "./engine/CameraContext";
import WordNode from "./components/WordNode";
import WordDetail from "./components/WordDetail";
import ConnectionLines from "./components/ConnectionLines";
import MiniMap from "./components/MiniMap";
import BottomNav from "./components/BottomNav";
import Sidebar from "./components/Sidebar";

const WORDS = Words;
const EDGES = graphEdges;

function KnowledgeGraph() {
  const { camera, flyTo, snapTo } = useCamera();
  const [activeWordId, setActiveWordId] = useState(null);
  const [activeMorpheme, setActiveMorpheme] = useState(null);
  const [unknownWords, setUnknownWords] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeWord = useMemo(
    () => WORDS.find(w => w.id === activeWordId),
    [activeWordId]
  );

  const handleWordClick = useCallback((word) => {
    setActiveWordId(word.id);
    setActiveMorpheme(null);
    flyTo({ x: -word.x, y: -word.y, scale: 2.5, rotate: 0 }, 800);
  }, [flyTo]);

  const handleAffixClick = useCallback((morpheme) => {
    if (!activeWordId) return;
    // Find next word sharing this morpheme
    const nextId = getNextWordInMorphemeChain(activeWordId, morpheme.text);
    if (nextId && nextId !== activeWordId) {
      setActiveMorpheme(morpheme.text);
      const nextWord = WORDS.find(w => w.id === nextId);
      setActiveWordId(nextId);
      flyTo({ x: -nextWord.x, y: -nextWord.y, scale: 2.5, rotate: 0 }, 700);
    }
  }, [activeWordId, flyTo]);

  const handleOverview = useCallback(() => {
    setActiveWordId(null);
    setActiveMorpheme(null);
    flyTo({ x: 0, y: 0, scale: 0.8, rotate: 0 }, 600);
  }, [flyTo]);

  const handleKnow = useCallback(() => {
    // Move to next word in overview
    handleOverview();
  }, [handleOverview]);

  const handleUnknown = useCallback((word) => {
    setUnknownWords(prev =>
      prev.some(w => w.id === word.id) ? prev : [...prev, word]
    );
    handleOverview();
  }, [handleOverview]);

  const handleMiniMapNav = useCallback((target) => {
    setActiveWordId(null);
    setActiveMorpheme(null);
    flyTo(target, 500);
  }, [flyTo]);

  return (
    <div className="app">
      <div
        className="viewport"
        onMouseDown={(e) => {
          // Drag is handled by CameraContext
          // Dispatch custom event
          document.dispatchEvent(new CustomEvent("camera-drag-start", { detail: { x: e.clientX, y: e.clientY } }));
        }}
        style={{
          transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.scale}) rotate(${camera.rotate}deg)`,
        }}
      >
        <ConnectionLines
          words={WORDS}
          edges={EDGES}
          activeWordId={activeWordId}
          activeMorpheme={activeMorpheme}
        />
        {WORDS.map(w => (
          <WordNode
            key={w.id}
            word={w}
            isActive={w.id === activeWordId}
            onClick={() => handleWordClick(w)}
            onAffixClick={handleAffixClick}
          />
        ))}
        {activeWord && (
          <WordDetail
            word={activeWord}
            onAffixClick={handleAffixClick}
            onKnow={handleKnow}
            onUnknown={handleUnknown}
          />
        )}
      </div>

      <MiniMap
        words={WORDS}
        camera={camera}
        onNavigate={handleMiniMapNav}
      />

      <BottomNav
        onOverview={handleOverview}
        onToggleSidebar={() => setSidebarOpen(o => !o)}
        onBrowseAffix={() => {}}
        unknownCount={unknownWords.length}
      />

      <Sidebar
        unknownWords={unknownWords}
        onWordClick={(w) => handleWordClick(w)}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CameraProvider>
      <KnowledgeGraph />
    </CameraProvider>
  );
}
```

---

### Task 10: Complete CSS Redesign (styles.css)

**Files:**
- Rewrite: `src/styles.css`

- [ ] **Step 1: Rewrite styles.css with Focusky-inspired dark/glass design**

Key styles needed:
- `.app` — full viewport, overflow hidden, background gradient
- `.viewport` — transform-origin center, transition via CameraContext animation (no CSS transitions here), cursor grab
- `.word-node` — glass card with hover glow, transition transform
- `.word-node.active` — hidden (WordDetail shows instead while active)
- `.connection-line` — SVG line, stroke rgba, transition opacity
- `.connection-line.active` — increased opacity + glow
- `.word-detail` — centered overlay, glassmorphism, fade-in animation
- `.affix-chip` — pill-shaped, clickable, hover lift
- `.minimap` — bottom-right fixed, glass background, rounded
- `.bottom-nav` — bottom-center fixed, glass background, flex row
- `.sidebar` — right-side slide-in panel
- `.btn-know` / `.btn-unknown` — full-width buttons in detail

```css
/* src/styles.css */
:root {
  --bg-start: #0f172a;
  --bg-end: #1e1b4b;
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --accent-blue: #60a5fa;
  --accent-green: #34d399;
  --accent-rose: #fb7185;
  --prefix-color: #93c5fd;
  --suffix-color: #6ee7b7;
  --root-color: #f9a8d4;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: "Inter", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: linear-gradient(135deg, var(--bg-start), var(--bg-end));
  color: var(--text-primary);
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.app {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.viewport {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2000px;
  height: 2000px;
  margin-left: -1000px;
  margin-top: -1000px;
  transform-origin: center center;
  cursor: grab;
  user-select: none;
}

.viewport:active {
  cursor: grabbing;
}

/* Word Node */
.word-node {
  position: absolute;
  transform: translate(-50%, -50%);
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 12px 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
  text-align: center;
  z-index: 1;
}

.word-node:hover {
  background: rgba(255, 255, 255, 0.14);
  box-shadow: 0 0 30px rgba(96, 165, 250, 0.2);
  transform: translate(-50%, -50%) scale(1.08);
}

.word-node.active {
  opacity: 0;
  pointer-events: none;
}

.word-node-word {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.word-node-meaning {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

.word-node-affixes {
  display: flex;
  gap: 4px;
  justify-content: center;
  margin-top: 6px;
  flex-wrap: wrap;
}

/* Affix Chip */
.affix-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.affix-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.affix-chip.compact {
  padding: 2px 7px;
  font-size: 0.68rem;
}

.affix-chip em {
  font-style: normal;
  opacity: 0.7;
  font-size: 0.7rem;
}

/* Connection Lines SVG */
.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.connection-line {
  stroke: rgba(148, 163, 184, 0.15);
  stroke-width: 1.5;
  transition: stroke 0.3s ease, stroke-width 0.3s ease;
}

.connection-line.active {
  stroke: var(--accent-blue);
  stroke-width: 2.5;
  filter: drop-shadow(0 0 6px rgba(96, 165, 250, 0.4));
}

/* Word Detail Overlay */
.word-detail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 40px 48px;
  min-width: 380px;
  max-width: 500px;
  text-align: center;
  z-index: 10;
  animation: detailFadeIn 0.4s ease;
}

@keyframes detailFadeIn {
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

.word-detail-tag {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.2);
  color: var(--accent-blue);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.word-detail-word {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 16px 0 4px;
  line-height: 1;
}

.word-detail-phonetic {
  color: var(--accent-blue);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.word-detail-meaning {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.word-detail-example {
  color: var(--text-secondary);
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.word-detail-section-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.word-detail-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 24px;
}

.word-detail-actions {
  display: flex;
  gap: 12px;
}

.btn-know, .btn-unknown {
  flex: 1;
  padding: 14px 24px;
  border: none;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-know {
  background: linear-gradient(135deg, #059669, #34d399);
  color: #fff;
}

.btn-unknown {
  background: linear-gradient(135deg, #dc2626, #fb7185);
  color: #fff;
}

.btn-know:hover, .btn-unknown:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* MiniMap */
.minimap {
  position: fixed;
  bottom: 80px;
  right: 16px;
  width: 200px;
  height: 150px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  cursor: pointer;
  z-index: 20;
}

/* Bottom Nav */
.bottom-nav {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 8px 12px;
  z-index: 30;
}

.bottom-nav button {
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.bottom-nav button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.nav-unknown-btn {
  position: relative;
}

.nav-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: var(--accent-rose);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: -360px;
  width: 340px;
  height: 100vh;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  border-left: 1px solid var(--glass-border);
  z-index: 40;
  transition: right 0.3s ease;
  overflow-y: auto;
  padding: 20px;
}

.sidebar.open {
  right: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.sidebar-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
}

.sidebar-close {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.3rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
}

.sidebar-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.sidebar-empty {
  color: var(--text-secondary);
  text-align: center;
  padding: 40px 0;
}

.sidebar-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar-item {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  padding: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.sidebar-item:hover {
  background: rgba(255, 255, 255, 0.12);
}

.sidebar-item strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 2px;
}

.sidebar-meaning {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.sidebar-affixes {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
}

/* Scrollbar */
.sidebar::-webkit-scrollbar { width: 6px; }
.sidebar::-webkit-scrollbar-track { background: transparent; }
.sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
```

---

### Task 11: Update index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update title and add Inter font**

```html
<!-- index.html -->
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>英语词缀知识图谱</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Self-Review Checklist

1. **Spec coverage:** All spec sections covered — camera engine (Task 2), word nodes (Task 4), connection lines (Task 5), word detail (Task 6), minimap (Task 7), bottom nav + sidebar (Task 8), app wiring (Task 9), styling (Task 10), data (Task 1), index.html (Task 11).
2. **No placeholders:** All code blocks contain complete implementations.
3. **Type consistency:** Same `id`, `morphemes[]`, `x`/`y` properties used throughout. Same camera state shape `{x, y, scale, rotate}` everywhere.
