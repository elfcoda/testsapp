const TYPE_COLORS = {
  prefix: { bg: "#dbeafe", text: "#1e40af", border: "#93c5fd" },
  suffix: { bg: "#d1fae5", text: "#065f46", border: "#6ee7b7" },
  root: { bg: "#fce7f3", text: "#9d174d", border: "#f9a8d4" },
  base: { bg: "#f3f4f6", text: "#374151", border: "#d1d5db" },
};

export default function AffixChip({ morpheme, onClick, compact = false }) {
  const colors = TYPE_COLORS[morpheme.type] || TYPE_COLORS.base;
  return (
    <span
      className={`affix-chip ${morpheme.type}${compact ? " compact" : ""}`}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        borderColor: colors.border,
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(e); } : undefined}
    >
      <b>{morpheme.text}</b>
      {!compact && <em>{morpheme.meaning}</em>}
    </span>
  );
}
