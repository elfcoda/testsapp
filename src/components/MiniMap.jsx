import { useRef, useEffect } from "react";

const MAP_W = 200;
const MAP_H = 150;
const CANVAS_W = 1800;
const CANVAS_H = 1500;

export default function MiniMap({ words, camera, onNavigate }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, MAP_W, MAP_H);

    // Background
    ctx.fillStyle = "rgba(15, 23, 42, 0.5)";
    ctx.fillRect(0, 0, MAP_W, MAP_H);

    // Draw nodes as dots
    words.forEach(w => {
      const mx = (w.x / CANVAS_W) * MAP_W;
      const my = (w.y / CANVAS_H) * MAP_H;
      ctx.beginPath();
      ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#60a5fa";
      ctx.fill();
    });

    // Draw viewport rectangle
    const viewW = window.innerWidth;
    const viewH = window.innerHeight;
    const vw = (viewW / camera.scale / CANVAS_W) * MAP_W;
    const vh = (viewH / camera.scale / CANVAS_H) * MAP_H;
    const centerX = (-camera.x / CANVAS_W) * MAP_W;
    const centerY = (-camera.y / CANVAS_H) * MAP_H;
    const vx = centerX - vw / 2 + MAP_W / 2;
    const vy = centerY - vh / 2 + MAP_H / 2;

    ctx.strokeStyle = "#fbbf24";
    ctx.lineWidth = 2;
    ctx.strokeRect(vx, vy, vw, vh);
  }, [words, camera]);

  return (
    <canvas
      className="minimap"
      ref={canvasRef}
      width={MAP_W}
      height={MAP_H}
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        const px = (e.clientX - rect.left) / MAP_W;
        const py = (e.clientY - rect.top) / MAP_H;
        onNavigate({
          x: -(px - 0.5) * CANVAS_W,
          y: -(py - 0.5) * CANVAS_H,
          scale: 0.8,
          rotate: 0,
        });
      }}
    />
  );
}
