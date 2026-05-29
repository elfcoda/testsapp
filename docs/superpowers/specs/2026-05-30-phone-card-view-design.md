# Phone Card View — Swipe-to-Navigate 3D Focusky Card Mode

## Overview

Add a separate iPhone portrait-sized card view to the English Knowledge Graph app. Users see one word card at a time in a phone-sized container. Swiping in a direction triggers an angle-based calculation to find the nearest connected word (via graph edges), then performs a Focusky-style 3D fly transition. Words have 3D coordinates; connected words load dynamically (lazy loading).

## Mode Toggle

- Add "卡片模式" button to BottomNav
- Toggle between existing `KnowledgeGraph` (总览) and new `PhoneCardView` (卡片模式)
- State managed in App.jsx: `const [viewMode, setViewMode] = useState("overview")`

## Architecture

```
PhoneCardView
├── 3D Perspective Wrapper (CSS perspective: 1000px)
│   ├── GhostCards (远处虚影，当前单词的 edge 连接词)
│   │   └── GhostCard × N (最多 6 个，半透明小卡片)
│   ├── SVG Connection Lines (虚影到中心卡片的连线)
│   ├── ActiveCard (当前单词主卡片，居中占主体)
│   └── SwipeDetector (透明覆盖层，检测滑动方向和角度)
└── TransitionAnimator (管理飞入飞出动画状态)
```

## Data Changes

### 3D Coordinates
Each word in `words.js` gets a `z` coordinate:
- Formula: `z = (Math.sin(x * 0.01) + Math.cos(y * 0.008)) * 180` (range ~-360 to +360)
- Applied via a one-time script that adds `z` to all word objects

## Core Logic

### 1. Swipe Angle Calculation
```
onSwipeEnd(startX, startY, endX, endY):
  dx = endX - startX
  dy = endY - startY
  distance = sqrt(dx² + dy²)
  if distance < MIN_SWIPE_DISTANCE: return  // 忽略短滑动
  
  angle = atan2(dy, dx)  // -π to π
  return angle
```

### 2. Nearest Edge by Angle
```
findBestEdge(currentWordId, swipeAngle):
  edges = graphEdges connected to currentWordId
  best = null, bestDiff = Infinity
  
  for each edge:
    targetId = edge.from === currentWordId ? edge.to : edge.from
    targetWord = WORDS.find(w => w.id === targetId)
    targetAngle = atan2(targetWord.y - currentWord.y, targetWord.x - currentWord.x)
    diff = abs(shortestAngularDiff(swipeAngle, targetAngle))
    if diff < bestDiff:
      bestDiff = diff
      best = targetWord
  
  return best
```

### 3. Transition Animation (Focusky 3D Fly)
```
animateTransition(currentWord, targetWord):
  distance = 3D distance between two words
  duration = clamp(map(distance), 300ms, 1000ms)
  
  Phase 1 (0-40%): Current card shrinks + rotates away + fades out
  Phase 2 (40-100%): Target card flies in from opposite side + scales up + fades in
  
  Easing: cubic-bezier(0.25, 0.1, 0.25, 1)
```

### 4. Lazy Loading
- Only render current word + its edge-connected words (ghost cards)
- Max 6 ghost cards visible at once
- Ghost cards are small (scale 0.5-0.6), semi-transparent (opacity 0.25-0.4)
- After transition completes + 600ms delay → ghost cards for new word fade in
- Clicking a ghost card → immediate transition to that word

## UI Layout (iPhone Portrait)

```
Container: 375px × 680px, centered on screen
┌──────────────────────────────┐
│  Ghost Cards (opacity 0.3)   │  ← Positioned according to 3D direction
│  ┌────┐  ┌────┐  ┌────┐     │
│  │word│  │word│  │word│     │
│  └────┘  └────┘  └────┘     │
│                              │
│     ═══ SVG Lines ═══        │
│                              │
│    ┌──────────────────┐      │
│    │   undo    verb    │      │
│    │   /ʌnˈduː/        │      │  ← Main Card (centered)
│    │   撤销；解开       │
│    │   [un-] [do]      │
│    └──────────────────┘      │
│                              │
│    ← 滑动切换单词 →           │  ← Swipe hint
└──────────────────────────────┘
```

## Files to Create/Modify

### Create
- `src/components/PhoneCardView.jsx` — Main phone card view component
- `src/components/GhostCard.jsx` — Small connected-word preview card
- `src/hooks/useSwipe.js` — Swipe direction detection hook
- `src/utils/geometry.js` — Angle calculation, edge matching utilities

### Modify
- `src/App.jsx` — Add viewMode state, toggle between views
- `src/components/BottomNav.jsx` — Add "卡片模式" button
- `src/data/words.js` — Add `z` coordinate to each word
- `src/styles.css` — Add phone card view styles

## Implementation Order
1. `src/utils/geometry.js` — Angle/edge matching utilities
2. `src/data/words.js` — Add z coordinates
3. `src/hooks/useSwipe.js` — Swipe detection hook
4. `src/components/GhostCard.jsx` — Ghost card component
5. `src/components/PhoneCardView.jsx` — Main phone card view
6. `src/components/BottomNav.jsx` — Add mode toggle button
7. `src/App.jsx` — Wire view mode switching
8. `src/styles.css` — Phone card view styles
