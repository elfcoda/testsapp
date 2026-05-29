export default function BottomNav({ onOverview, onToggleSidebar, unknownCount }) {
  return (
    <nav className="bottom-nav">
      <button onClick={onOverview}>🌐 总览</button>
      <button onClick={onToggleSidebar} className="nav-unknown-btn">
        📖 生词本
        {unknownCount > 0 && <span className="nav-badge">{unknownCount}</span>}
      </button>
    </nav>
  );
}
