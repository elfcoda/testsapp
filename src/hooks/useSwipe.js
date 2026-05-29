import { useRef, useCallback } from "react";

const MIN_SWIPE = 30;

export default function useSwipe(onSwipe) {
  const startRef = useRef(null);

  const onPointerDown = useCallback((e) => {
    startRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onPointerUp = useCallback((e) => {
    const start = startRef.current;
    if (!start) return;
    startRef.current = null;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < MIN_SWIPE) return;

    const angle = Math.atan2(dy, dx);
    onSwipe(angle, dist);
  }, [onSwipe]);

  return { onPointerDown, onPointerUp };
}
