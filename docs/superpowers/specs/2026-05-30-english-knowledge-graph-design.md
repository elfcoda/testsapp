# English Knowledge Graph — Focusky-style 3D Fly-through Learning App

## Overview

A complete rewrite of the Flash Words English learning app. Transforms from a linear flashcard system into an interactive **knowledge graph** with **Focusky-style 3D camera fly-through transitions**. Users explore 100+ words connected by shared prefixes, suffixes, and roots, navigating via smooth pan/zoom/rotate camera movements.

## Architecture

```
<App>
  ├── <CameraProvider>       ← Camera state (x, y, scale, rotate) + fly animation
  │   └── <div.viewport>     ← CSS transform container
  │       ├── <ConnectionLines>    ← SVG lines between related words
  │       ├── <WordNodes>          ← 100 word nodes on canvas
  │       │   └── <WordNode>       ← Each node: word + clickable affix chips
  │       └── <WordDetail>         ← Zoom-in detail overlay
  ├── <MiniMap>              ← Overview navigation minimap
  ├── <BottomNav>            ← Bottom navigation bar
  └── <Sidebar>              ← Unknown words list / affix browser
```

## Camera Engine (Focusky-style)

### State
```ts
interface CameraState {
  x: number;       // Viewport center X on the knowledge graph canvas
  y: number;       // Viewport center Y
  scale: number;   // Zoom level (0.8 = overview, 2.5 = word detail)
  rotate: number;  // Rotation angle in degrees
}
```

### Fly Animation
- `animateTo(target: Partial<CameraState>, duration: number)`
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` — Focusky classic easing
- Duration: 600-900ms, dynamically scaled by distance
- Simultaneously interpolates x, y, scale, and optional slight rotation (±3°)

### Trigger Scenarios

| Action | Camera Change | Effect |
|--------|--------------|--------|
| Click word node | Zoom + pan to word | Fly into word detail from overview |
| Click affix chip | Pan to next word sharing affix | Smooth slide between related words |
| Click overview / ESC | Zoom out to overview | Pull back to full map |
| Drag canvas | Pan | Free exploration |
| Minimap click | Jump to area | Teleport camera |

## Data Model

### Word Node
```ts
interface WordNode {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;       // Chinese translation
  part: string;          // part of speech
  example: string;       // example sentence
  morphemes: Morpheme[];
  x: number;             // canvas position (from force layout)
  y: number;
}
```

### Morpheme (Affix/Root)
```ts
interface Morpheme {
  type: "prefix" | "suffix" | "root" | "base";
  text: string;     // e.g. "un-", "-able", "struct"
  meaning: string;
}
```

### Edge (Connection)
```ts
interface GraphEdge {
  from: string;      // word id
  to: string;        // word id
  sharedMorpheme: string;  // e.g. "un-"
}
```

## Word Coverage (100 words)

### Prefixes (28 affixes × ~40 words)
un-, re-, pre-, dis-, mis-, over-, under-, inter-, trans-, anti-, auto-, bi-, co-, de-, ex-, im-/in-/il-/ir-, micro-, mid-, multi-, non-, out-, post-, pro-, semi-, sub-, super-, tele-

### Suffixes (16 affixes × ~30 words)
-able, -al, -er/-or, -ful, -ion/-tion, -ity, -ive, -less, -ly, -ment, -ness, -ous, -ed, -ing, -s/-es, -y

### Roots (32 roots × ~50 words)
act, aud, auto, bene, bio, cap, ced, chron, cred, dict, duct, fac, graph, ject, log, luc, man, miss/mit, path, phil, phon, photo, port, pos, rupt, scope, scrib, struct, tele, tract, vac, vid/vis, volv

### Layout
Force-directed layout algorithm to position nodes so that words sharing affixes cluster together visually.

## UI Components

### WordNode
- Displays the word text and clickable affix chips (color-coded: prefix=blue, suffix=green, root=pink)
- Click node → fly to word detail
- Hover shows tooltip with meaning

### WordDetail (Overlay)
Appears after zoom-in camera animation completes:
- Word (large), phonetic, part of speech
- Chinese meaning
- Example sentence
- Morpheme breakdown with clickable chips
- Related words row
- "Know" / "Don't Know" buttons (adds to sidebar)

### ConnectionLines
- SVG `<path>` or `<line>` elements between connected nodes
- Semi-transparent, glow on hover
- Color-coded by affix type

### MiniMap
- Small overview of entire graph in corner
- Shows current viewport rectangle
- Click to jump to area

### BottomNav
- Overview (zoom out)
- Browse by affix (list view)
- Unknown words (sidebar toggle)

### Sidebar
- Collection of words marked as unknown
- Shows word + affix breakdown (compact)
- Click any word to fly to it

## Visual Style
- Background: gradient similar to current app (warm + cool blend)
- Glassmorphism panels
- Color-coded affix chips (prefix=blue, suffix=emerald, root=rose)
- Connection lines: subtle gradient glow
- Dark overlay during fly transition for depth effect

## Files to Create

```
src/
  main.jsx              ← Entry (unchanged)
  styles.css            ← Complete rewrite
  App.jsx               ← Main app shell
  data/
    words.js            ← 100 words with morpheme data
    graph.js            ← Graph edges and layout positions
  engine/
    CameraContext.jsx   ← Camera state provider + animation
  components/
    WordNode.jsx        ← Individual word node
    WordDetail.jsx      ← Zoom-in detail panel
    ConnectionLines.jsx ← SVG connection lines
    MiniMap.jsx         ← Overview minimap
    BottomNav.jsx       ← Bottom navigation
    Sidebar.jsx         ← Unknown words sidebar
    AffixChip.jsx       ← Reusable affix chip component
```

## Implementation Order
1. `data/words.js` + `data/graph.js` — Build 100-word knowledge graph dataset
2. `engine/CameraContext.jsx` — Camera engine with Focusky-style animation
3. `components/WordNode.jsx` + `AffixChip.jsx` — Word nodes with clickable affixes
4. `components/ConnectionLines.jsx` — SVG connection lines
5. `components/WordDetail.jsx` — Detail overlay
6. `components/MiniMap.jsx` — Navigation minimap
7. `components/BottomNav.jsx` + `Sidebar.jsx` — Navigation and review
8. `App.jsx` — Wire everything together
9. `styles.css` — Complete visual design
