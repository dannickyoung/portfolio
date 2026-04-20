"use client";

export default function ResumeDownload() {
  return (
    <button
      type="button"
      className="resume-download"
      onClick={() => window.print()}
    >
      Download PDF
      <span aria-hidden>↓</span>
    </button>
  );
}
