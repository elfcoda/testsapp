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
