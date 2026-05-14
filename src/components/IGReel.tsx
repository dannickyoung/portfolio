"use client";

import { useEffect, useRef, useState } from "react";

export type IGReelData = {
  src: string;
  username: string;
  caption: string;
  music?: string;
  avatar?: string;
  avatarImage?: string;
  avatarBg?: string;
  avatarLogoSize?: string;
  likes?: string;
  comments?: string;
  poster?: string;
  noSound?: boolean;
  videoFit?: "cover" | "contain";
  cardBackground?: string;
};

export default function IGReel({
  src,
  username,
  caption,
  music = "Original audio",
  avatar,
  avatarImage,
  avatarBg,
  avatarLogoSize = "62%",
  likes = "12.4K",
  comments = "284",
  poster,
  noSound = false,
  videoFit = "cover",
  cardBackground = "#000",
}: IGReelData) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hovered, setHovered] = useState(false);

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) v.play().catch(() => {});
  }

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const fallbackGradient =
    avatar ??
    avatarBg ??
    "linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)";

  const avatarStyles: React.CSSProperties = avatarImage
    ? {
        backgroundColor: avatarBg ?? "#000",
        backgroundImage: `url(${avatarImage})`,
        backgroundSize: avatarLogoSize,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : { background: fallbackGradient };

  const UI_OPACITY = 0.3;
  const chromeOpacity = hovered ? UI_OPACITY : 0;
  const transition = "opacity 280ms ease";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "9 / 16",
        background: cardBackground,
        borderRadius: 22,
        overflow: "hidden",
        boxShadow:
          "0 24px 60px -20px rgba(0,0,0,0.55), 0 8px 20px -10px rgba(0,0,0,0.45)",
        isolation: "isolate",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onClick={togglePlay}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: videoFit,
          background: cardBackground,
        }}
      />

      {/* Top gradient (kept subtle) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          zIndex: 1,
          opacity: hovered ? 0.6 : 0,
          transition,
        }}
      />

      {/* Mute toggle (only if video has sound) */}
      {!noSound && (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 3,
            opacity: chromeOpacity,
            transition,
            pointerEvents: hovered ? "auto" : "none",
          }}
        >
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            aria-pressed={!muted}
            style={{
              width: 30,
              height: 30,
              borderRadius: 9999,
              border: "none",
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            {muted ? <MuteIcon /> : <UnmuteIcon />}
          </button>
        </div>
      )}

      {/* Right rail */}
      <div
        style={{
          position: "absolute",
          right: 10,
          bottom: 96,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          alignItems: "center",
          zIndex: 3,
          color: "#fff",
          opacity: chromeOpacity,
          transition,
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        <RailButton
          onClick={() => setLiked((v) => !v)}
          icon={<HeartIcon filled={liked} />}
          label={liked ? bump(likes) : likes}
          active={liked}
        />
        <RailButton icon={<CommentIcon />} label={comments} />
        <RailButton icon={<ShareIcon />} />
        <RailButton
          onClick={() => setSaved((v) => !v)}
          icon={<SaveIcon filled={saved} />}
          active={saved}
        />
        <RailButton icon={<MoreIcon />} />
        <div
          style={{
            width: 30,
            height: 30,
            marginTop: 4,
            borderRadius: 6,
            border: "2px solid #fff",
            ...avatarStyles,
          }}
          aria-hidden
        />
      </div>

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 180,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          zIndex: 1,
          opacity: hovered ? 0.7 : 0,
          transition,
        }}
      />

      {/* Bottom info */}
      <div
        style={{
          position: "absolute",
          left: 14,
          right: 64,
          bottom: 16,
          color: "#fff",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          opacity: chromeOpacity,
          transition,
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 9999,
              border: "1.5px solid #fff",
              flex: "0 0 auto",
              ...avatarStyles,
            }}
            aria-hidden
          />
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0 }}>
            {username}
          </span>
          <span style={{ fontSize: 13, opacity: 0.9 }}>·</span>
          <button
            type="button"
            style={{
              border: "1px solid rgba(255,255,255,0.9)",
              background: "transparent",
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 6,
              letterSpacing: 0,
            }}
          >
            Follow
          </button>
        </div>
        <div
          style={{
            fontSize: 13,
            lineHeight: 1.35,
            letterSpacing: 0,
            opacity: 0.96,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {caption}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            opacity: 0.95,
          }}
        >
          <MusicNoteIcon />
          <span
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "70%",
            }}
          >
            {username} · {music}
          </span>
        </div>
      </div>
    </div>
  );
}

function RailButton({
  icon,
  label,
  onClick,
  active,
}: {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        color: active ? "#ff3040" : "#fff",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        textShadow: "0 1px 4px rgba(0,0,0,0.45)",
        filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.45))",
      }}
    >
      {icon}
      {label && (
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0 }}>
          {label}
        </span>
      )}
    </button>
  );
}

function bump(value: string) {
  const m = value.match(/^([\d.]+)(\D*)$/);
  if (!m) return value;
  const n = parseFloat(m[1]);
  if (Number.isNaN(n)) return value;
  return `${(n + 0.1).toFixed(1)}${m[2]}`;
}

function MuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <line x1="22" y1="9" x2="16" y2="15" />
      <line x1="16" y1="9" x2="22" y2="15" />
    </svg>
  );
}
function UnmuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function CommentIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
function SaveIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function MoreIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  );
}
function MusicNoteIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
