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
