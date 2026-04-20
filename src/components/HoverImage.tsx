"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  label?: string;
  children: React.ReactNode;
};

export default function HoverImage({
  src,
  alt,
  width = 400,
  height = 500,
  label,
  children,
}: Props) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const move = (clientX: number, clientY: number) => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = `translate3d(${clientX + 24}px, ${clientY + 24}px, 0)`;
  };

  const overlay = (
    <div
      ref={imgRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
        zIndex: 9999,
        willChange: "transform",
      }}
    >
      <div
        style={{
          width,
          height,
          overflow: "hidden",
          borderRadius: 12,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      {label && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "100%",
            marginTop: 8,
            background: "#000",
            color: "#fff",
            borderRadius: 9999,
            padding: "8px 14px",
            fontSize: 14,
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );

  return (
    <>
      <div
        onMouseEnter={(e) => {
          move(e.clientX, e.clientY);
          setVisible(true);
        }}
        onMouseMove={(e) => move(e.clientX, e.clientY)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
