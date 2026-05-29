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
  const affixStartRef = useRef(null);

  // Clear all pending animation timers on unmount or new swipe
  const animTimersRef = useRef([]);
  useEffect(() => {
    return () => animTimersRef.current.forEach(clearTimeout);
  }, []);

  // Detect if pointer started on an affix chip (prefix/suffix)
  const detectAffixFromEvent = useCallback((e) => {
    const el = e.target.closest(".affix-chip");
    if (!el) { affixStartRef.current = null; return; }
    const text = el.querySelector("b")?.textContent || "";
    const isPrefix = el.classList.contains("prefix");
    const isSuffix = el.classList.contains("suffix");
    if (isPrefix || isSuffix) {
      affixStartRef.current = { type: isPrefix ? "prefix" : "suffix", text };
      console.log(`[CardSwipe] 按住词缀: ${text} (${isPrefix ? "前缀" : "后缀"})`);
    } else {
      affixStartRef.current = null;
    }
  }, []); // { type: "prefix"|"suffix", text: "un-" } or null

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
  const handleSwipe = useCallback((angle, dist) => {
    if (transitioning || !currentWord) {
      console.log(`[CardSwipe] 忽略滑动: transitioning=${transitioning}, word=${currentWord?.id}`);
      return;
    }

    // Filter edges if swipe started from a prefix or suffix affix
    const affixFilter = affixStartRef.current;
    console.log(`[CardSwipe] 滑动识别: angle=${(angle * 180 / Math.PI).toFixed(1)}°, dist=${dist?.toFixed(0) || "?"}px, 过滤词缀=${affixFilter?.text || "无"}`);

    let candidateEdges = EDGES;

    if (affixFilter) {
      candidateEdges = EDGES.filter(e => e.sharedMorpheme === affixFilter.text);
      console.log(`[CardSwipe] 过滤后候选边数: ${candidateEdges.length}`);
    }

    const target = findBestEdgeByAngle(currentWord, candidateEdges, WORDS, angle);
    affixStartRef.current = null;

    if (!target || target.id === currentWord.id) {
      console.log(`[CardSwipe] 未找到目标: target=${target?.id}`);
      // Show hint when affix-filtered swipe finds no matching edge
      if (affixFilter) {
        setNoEdgeHint(`没有更多「${affixFilter.text}」家族单词可跳转`);
        setTimeout(() => setNoEdgeHint(""), 2000);
      }
      return;
    }

    console.log(`[CardSwipe] 跳转目标: ${currentWord.id} → ${target.id} (${target.word})`);

    // Clear any pending timers from previous animations
    animTimersRef.current.forEach(clearTimeout);
    animTimersRef.current = [];

    // Determine exit direction
    const dx = target.x - currentWord.x;
    const dir = dx >= 0 ? "out-left" : "out-right";
    setTransitionDir(dir);
    setTransitioning(true);
    setShowGhosts(false);

    // Phase 1: exit animation (350ms) → switch word + start fly-in
    const t1 = setTimeout(() => {
      console.log(`[CardSwipe] 动效中段: 切换单词`);
      setCurrentWordId(target.id);
      setTransitionDir(null);
      // transitioning stays true for fly-in

      // Phase 2: fly-in complete (300ms) → show ghosts
      const t2 = setTimeout(() => {
        setTransitioning(false);
        // Phase 3: ghost fade-in (300ms)
        const t3 = setTimeout(() => {
          console.log(`[CardSwipe] 动效完成: ${target.id}`);
          setShowGhosts(true);
        }, 300);
        animTimersRef.current.push(t3);
      }, 300);
      animTimersRef.current.push(t2);
    }, 350);
    animTimersRef.current.push(t1);

    // Safety net: force transitioning to false after 2s
    const safety = setTimeout(() => {
      console.log(`[CardSwipe] 安全恢复: transitioning → false`);
      setTransitioning(false);
    }, 2000);
    animTimersRef.current.push(safety);
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
        onPointerDown={(e) => { detectAffixFromEvent(e); onPointerDown(e); }}
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
