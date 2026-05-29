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
