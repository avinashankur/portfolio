"use client"
import React, { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

interface Cursor {}

const Cursor: React.FC<Cursor> = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent) => {
    setTimeout(() => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;

      setIsPointer(
        window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
      );
    }, 100); // Adjust the delay (in milliseconds) according to your preference
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 40 : 30;

  const cursorStyle: React.CSSProperties = isPointer
    ? { left: "-100px", top: "-100px" }
    : {};

  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    ></div>
  );
};

export default Cursor;

