"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  containerAspectRatio?: string;
  videoAspectRatio?: string;
  videoWidth?: string;
  background?: string;
  padding?: string;
  showMuteToggle?: boolean;
};

export default function BrandingVideo({
  src,
  containerAspectRatio = "844 / 632",
  videoAspectRatio = "16 / 9",
  videoWidth = "94%",
  background = "#1f1f22",
  padding = "3%",
  showMuteToggle = true,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  function toggleMuted() {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      v.play().catch(() => {});
    }
  }

  return (
    <div
      style={{
        aspectRatio: containerAspectRatio,
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding,
        borderRadius: 16,
      }}
    >
      <div
        style={{
          width: videoWidth,
          aspectRatio: videoAspectRatio,
          position: "relative",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow:
            "0 12px 24px -12px rgba(0,0,0,0.25), 0 4px 10px -6px rgba(0,0,0,0.2)",
        }}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>
      {showMuteToggle && (
        <button
          type="button"
          onClick={toggleMuted}
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0,
            transition: "background 200ms ease",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
          }}
        >
          {muted ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
        </button>
      )}
    </div>
  );
}

function SpeakerOnIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <line x1="22" y1="9" x2="16" y2="15" />
      <line x1="16" y1="9" x2="22" y2="15" />
    </svg>
  );
}
