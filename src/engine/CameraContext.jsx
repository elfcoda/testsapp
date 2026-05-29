import React, { createContext, useContext, useRef, useState, useCallback, useEffect } from "react";

const CameraContext = createContext(null);

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function CameraProvider({ children }) {
  const [camera, setCamera] = useState({
    x: 0,
    y: 0,
    scale: 0.8,
    rotate: 0,
  });

  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(null);
  const animationRefRef = useRef(null);
  const cameraStartRef = useRef(null);

  // flyTo: Animated camera movement
  const flyTo = useCallback((target, duration = 800) => {
    // Cancel any in-flight animation
    if (animationRefRef.current) {
      cancelAnimationFrame(animationRefRef.current);
    }

    // Capture current camera state as start point
    cameraStartRef.current = { ...camera };

    // Merge target with current state (missing props keep current value)
    const targetState = {
      x: target.x !== undefined ? target.x : camera.x,
      y: target.y !== undefined ? target.y : camera.y,
      scale: target.scale !== undefined ? target.scale : camera.scale,
      rotate: target.rotate !== undefined ? target.rotate : camera.rotate,
    };

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      // Interpolate each property
      const interpolated = {
        x:
          cameraStartRef.current.x +
          (targetState.x - cameraStartRef.current.x) * easedProgress,
        y:
          cameraStartRef.current.y +
          (targetState.y - cameraStartRef.current.y) * easedProgress,
        scale:
          cameraStartRef.current.scale +
          (targetState.scale - cameraStartRef.current.scale) * easedProgress,
        rotate:
          cameraStartRef.current.rotate +
          (targetState.rotate - cameraStartRef.current.rotate) * easedProgress,
      };

      setCamera(interpolated);

      // Continue animation or finish
      if (progress < 1) {
        animationRefRef.current = requestAnimationFrame(animate);
      } else {
        animationRefRef.current = null;
        // Ensure final state is exact
        setCamera(targetState);
      }
    };

    animationRefRef.current = requestAnimationFrame(animate);
  }, [camera]);

  // snapTo: Instantly set camera to target state
  const snapTo = useCallback((target) => {
    // Cancel any in-flight animation
    if (animationRefRef.current) {
      cancelAnimationFrame(animationRefRef.current);
      animationRefRef.current = null;
    }

    // Merge target with current state (missing props keep current value)
    const newState = {
      x: target.x !== undefined ? target.x : camera.x,
      y: target.y !== undefined ? target.y : camera.y,
      scale: target.scale !== undefined ? target.scale : camera.scale,
      rotate: target.rotate !== undefined ? target.rotate : camera.rotate,
    };

    setCamera(newState);
  }, [camera]);

  // Handle mouse down for drag-to-pan
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      cameraX: camera.x,
      cameraY: camera.y,
    };

    // Cancel any in-flight animation when user starts dragging
    if (animationRefRef.current) {
      cancelAnimationFrame(animationRefRef.current);
      animationRefRef.current = null;
    }
  }, [camera]);

  // Handle mouse move for dragging
  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !dragStartRef.current) return;

      const { startX, startY, cameraX, cameraY } = dragStartRef.current;
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Calculate delta and apply scale sensitivity (inverse)
      const dx = (clientX - startX) / camera.scale;
      const dy = (clientY - startY) / camera.scale;

      // Update camera position: drag direction follows mouse
      setCamera((prev) => ({
        ...prev,
        x: cameraX + dx,
        y: cameraY + dy,
      }));
    },
    [isDragging, camera.scale]
  );

  // Handle mouse up to stop dragging
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    dragStartRef.current = null;
  }, []);

  // Attach window-level event listeners for mousemove/mouseup
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRefRef.current) {
        cancelAnimationFrame(animationRefRef.current);
      }
    };
  }, []);

  const value = {
    camera,
    flyTo,
    snapTo,
    isDragging,
    handleMouseDown,
  };

  return (
    <CameraContext.Provider value={value}>{children}</CameraContext.Provider>
  );
}

export function useCamera() {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error("useCamera must be used within a CameraProvider");
  }
  return context;
}
