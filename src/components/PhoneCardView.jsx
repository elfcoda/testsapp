import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { Words } from "../data/words";
import { graphEdges } from "../data/graph";
import { findBestEdgeByAngle, distance3D } from "../utils/geometry";
import useSwipe from "../hooks/useSwipe";
import AffixChip from "./AffixChip";
import GhostCard from "./GhostCard";

const WORDS = Words;
const EDGES = graphEdges;

export default function PhoneCardView({ initialWordId, onBack }) {
  const [currentWordId, setCurrentWordId] = useState(initialWordId || WORDS[0].id);
  const [transitioning, setTransitioning] = useState(false);
  const [showGhosts, setShowGhosts] = useState(true);
  const [transitionDir, setTransitionDir] = useState(null);
  const [noEdgeHint, setNoEdgeHint] = useState("");
  const affixStartRef = useRef(null); // { type: "prefix"|"suffix", text: "un-" } or null

  const currentWord = useMemo(
    () => WORDS.find(w => w.id === currentWordId),
    [currentWordId]
  );

  // Connected words (ghost cards)
  const connectedWords = useMemo(() => {
    if (!currentWord) return [];
    const ids = new Set();
    EDGES.forEach(e => {
      if (e.from === currentWord.id) ids.add(e.to);
      if (e.to === currentWord.id) ids.add(e.from);
    });
    return [...ids]
      .map(id => WORDS.find(w => w.id === id))
      .filter(Boolean)
      .slice(0, 6);
  }, [currentWord]);

  // Handle swipe → find best matching edge
  const handleSwipe = useCallback((angle) => {
    if (transitioning || !currentWord) return;

    // Filter edges if swipe started from a prefix or suffix affix
    const affixFilter = affixStartRef.current;
    let candidateEdges = EDGES;

    if (affixFilter) {
      candidateEdges = EDGES.filter(e => e.sharedMorpheme === affixFilter.text);
    }

    const target = findBestEdgeByAngle(currentWord, candidateEdges, WORDS, angle);
    affixStartRef.current = null;

    if (!target || target.id === currentWord.id) {
      // Show hint when affix-filtered swipe finds no matching edge
      if (affixFilter) {
        setNoEdgeHint(`没有更多「${affixFilter.text}」家族单词可跳转`);
        setTimeout(() => setNoEdgeHint(""), 2000);
      }
      return;
    }

    // Determine exit direction
    const dx = target.x - currentWord.x;
    const dir = dx >= 0 ? "out-left" : "out-right";
    setTransitionDir(dir);
    setTransitioning(true);
    setShowGhosts(false);

    // After exit animation, switch word and animate in
    setTimeout(() => {
      setCurrentWordId(target.id);
      setTransitionDir(null);
      setTransitioning(true); // flying in

      // Ghosts appear with delay
      setTimeout(() => {
        setTransitioning(false);
        setTimeout(() => setShowGhosts(true), 300);
      }, 300);
    }, 350);
  }, [currentWord, transitioning]);

  const { onPointerDown, onPointerUp } = useSwipe(handleSwipe);

  // Compute transition class
  const cardClass = useMemo(() => {
    if (!transitionDir) return transitioning ? "card-fly-in" : "";
    return `card-fly-${transitionDir}`;
  }, [transitionDir, transitioning]);

  if (!currentWord) return null;

  return (
    <div className="phone-card-shell">
      <div
        className="phone-card-container"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {/* Ghost cards layer */}
        <div className={`ghost-layer ${showGhosts ? "visible" : ""}`}>
          {connectedWords.map(w => (
            <GhostCard
              key={w.id}
              word={w}
              currentWord={currentWord}
              onClick={() => {
                if (transitioning) return;
                setTransitioning(true);
                setShowGhosts(false);
                const exitDir = w.x >= currentWord.x ? "out-left" : "out-right";
                setTransitionDir(exitDir);
                setTimeout(() => {
                  setCurrentWordId(w.id);
                  setTransitionDir(null);
                  setTimeout(() => {
                    setTransitioning(false);
                    setTimeout(() => setShowGhosts(true), 300);
                  }, 300);
                }, 350);
              }}
            />
          ))}
        </div>

        {/* Main card */}
        <div className={`phone-card ${cardClass}`}>
          <span className="phone-card-tag">{currentWord.part}</span>
          <h2 className="phone-card-word">{currentWord.word}</h2>
          <p className="phone-card-phonetic">{currentWord.phonetic}</p>
          <p className="phone-card-meaning">{currentWord.meaning}</p>
          <p className="phone-card-example">"{currentWord.example}"</p>

          <div className="phone-card-morphemes">
            {currentWord.morphemes.map(m => (
              <AffixChip
                key={m.text}
                morpheme={m}
                onPointerDown={() => {
                  if (m.type === "prefix" || m.type === "suffix") {
                    affixStartRef.current = { type: m.type, text: m.text };
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Hint messages */}
        <div className={`phone-card-hint ${noEdgeHint ? "hint-error" : ""}`}>
          {noEdgeHint || "← 往任意方向滑动切换单词 →"}
        </div>
      </div>

      {/* Back button */}
      <button className="phone-back-btn" onClick={onBack}>
        🌐 返回总览
      </button>
    </div>
  );
}
