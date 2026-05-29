import { useMemo } from "react";

export default function GhostCard({ word, currentWord, onClick }) {
  // Compute 3D positional offset for placing ghost card
  const style = useMemo(() => {
    const dx = word.x - currentWord.x;
    const dy = word.y - currentWord.y;
    const dz = (word.z || 0) - (currentWord.z || 0);

    // Map spatial position to screen position within the phone container
    // dx/dy map to translate offset, dz maps to scale/opacity
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const maxDist = 1500;
    const t = Math.min(distance / maxDist, 1);

    const angle = Math.atan2(dy, dx);
    const radius = 80 + t * 120;
    const sx = Math.cos(angle) * radius;
    const sy = Math.sin(angle) * radius - 60;

    const scale = 0.35 + 0.15 * (1 - t);
    const opacity = 0.25 + 0.15 * (1 - t);
    const zIndex = dz > 0 ? 0 : -1;

    return {
      transform: `translate(${sx}px, ${sy}px) scale(${scale})`,
      opacity,
      zIndex,
    };
  }, [word, currentWord]);

  const visibleAffixes = word.morphemes.filter(m => m.type !== "base").slice(0, 1);

  return (
    <div
      className="ghost-card"
      style={style}
      onClick={onClick}
    >
      <div className="ghost-card-word">{word.word}</div>
      {visibleAffixes.length > 0 && (
        <div className="ghost-card-affix">{visibleAffixes[0].text}</div>
      )}
    </div>
  );
}
