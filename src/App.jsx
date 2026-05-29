import React, { useState, useMemo, useCallback } from "react";
import { Words } from "./data/words";
import { graphEdges, getNextWordInMorphemeChain } from "./data/graph";
import { CameraProvider, useCamera } from "./engine/CameraContext";
import WordNode from "./components/WordNode";
import WordDetail from "./components/WordDetail";
import ConnectionLines from "./components/ConnectionLines";
import MiniMap from "./components/MiniMap";
import BottomNav from "./components/BottomNav";
import Sidebar from "./components/Sidebar";
import PhoneCardView from "./components/PhoneCardView";

const WORDS = Words;
const EDGES = graphEdges;

function KnowledgeGraph() {
  const { camera, flyTo, handleMouseDown, handleWheel } = useCamera();
  const [activeWordId, setActiveWordId] = useState(null);
  const [activeMorpheme, setActiveMorpheme] = useState(null);
  const [unknownWords, setUnknownWords] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState("overview"); // "overview" | "card"

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
    const nextId = getNextWordInMorphemeChain(activeWordId, morpheme.text);
    if (nextId && nextId !== activeWordId) {
      setActiveMorpheme(morpheme.text);
      const nextWord = WORDS.find(w => w.id === nextId);
      if (nextWord) {
        setActiveWordId(nextId);
        flyTo({ x: -nextWord.x, y: -nextWord.y, scale: 2.5, rotate: 0 }, 700);
      }
    }
  }, [activeWordId, flyTo]);

  const handleOverview = useCallback(() => {
    setActiveWordId(null);
    setActiveMorpheme(null);
    flyTo({ x: 0, y: 0, scale: 0.8, rotate: 0 }, 600);
  }, [flyTo]);

  const handleKnow = useCallback(() => {
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

  const handleCardMode = useCallback(() => {
    setViewMode(m => m === "card" ? "overview" : "card");
    setSidebarOpen(false);
  }, []);

  const handleBackFromCard = useCallback(() => {
    setViewMode("overview");
  }, []);

  // Card mode
  if (viewMode === "card") {
    return (
      <div className="app">
        <PhoneCardView
          initialWordId={activeWordId || WORDS[0].id}
          onBack={handleBackFromCard}
        />
        <BottomNav
          onOverview={handleOverview}
          onToggleSidebar={() => setSidebarOpen(o => !o)}
          onCardMode={handleCardMode}
          unknownCount={unknownWords.length}
          isCardMode={true}
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

  return (
    <div className="app">
      <div
        className="viewport"
        onMouseDown={handleMouseDown}
        onWheel={handleWheel}
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
        onCardMode={handleCardMode}
        unknownCount={unknownWords.length}
        isCardMode={false}
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
