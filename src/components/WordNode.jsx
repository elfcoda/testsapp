import AffixChip from "./AffixChip";

export default function WordNode({ word, isActive, onClick, onAffixClick }) {
  const visibleAffixes = word.morphemes.filter(m => m.type !== "base").slice(0, 2);

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
      {visibleAffixes.length > 0 && (
        <div className="word-node-affixes">
          {visibleAffixes.map(m => (
            <AffixChip
              key={m.text}
              morpheme={m}
              compact
              onClick={(e) => { e.stopPropagation(); onAffixClick(m); }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
