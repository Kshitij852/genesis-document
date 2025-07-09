"use client";

import { useEffect, useRef } from "react";

const CursorLineTrail = () => {
  const pathRef = useRef<SVGPolylineElement>(null);
  const pointsRef = useRef<string[]>([]);
  const requestRef = useRef<number>();
  const lastMoveTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const updatePoints = () => {
      const currentTime = Date.now();
      const timeSinceLastMove = currentTime - lastMoveTimeRef.current;

      // Remove points if mouse is idle (hasn't moved for 50ms)
      if (timeSinceLastMove > 50 && pointsRef.current.length > 0) {
        pointsRef.current = pointsRef.current.slice(1);
        if (pathRef.current) {
          pathRef.current.setAttribute("points", pointsRef.current.join(" "));
        }
      }

      requestRef.current = requestAnimationFrame(updatePoints);
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMoveTimeRef.current = Date.now();

      const x = Math.round(e.clientX / 8) * 8;
      const y = Math.round(e.clientY / 8) * 8;
      const point = `${x},${y}`;

      pointsRef.current.push(point);
      if (pointsRef.current.length > 10) {
        pointsRef.current = pointsRef.current.slice(-10);
      }

      if (pathRef.current) {
        pathRef.current.setAttribute("points", pointsRef.current.join(" "));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(updatePoints);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <svg
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        shapeRendering: "crispEdges",
      }}
    >
      <polyline
        ref={pathRef}
        fill="none"
        stroke="#f4ca29"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        shapeRendering="crispEdges"
      />
    </svg>
  );
};

export default CursorLineTrail;
