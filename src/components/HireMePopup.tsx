"use client";

import { useEffect, useRef, useState } from "react";
import { onHireMeOpen } from "@/lib/hireMeBus";

const WEB3FORMS_KEY = "4bb1ba13-f872-436c-855b-6c94993c1865";

const projectTypes = ["Product / UI/UX", "Design System", "Branding", "Other"];
const budgetTiers = ["< $5k", "$5k–$15k", "$15k–$40k", "$40k+"];

type Step = 1 | 2;
type SubmitState = "idle" | "sending" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  projectType: projectTypes[0],
  budget: budgetTiers[1],
  message: "",
};

export default function HireMePopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => onHireMeOpen(() => setOpen(true)), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open || submitState !== "idle") return;
    const id = window.setTimeout(() => {
      if (step === 1) firstFieldRef.current?.focus();
      else messageRef.current?.focus();
    }, 60);
    return () => window.clearTimeout(id);
  }, [open, step, submitState]);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => {
      setStep(1);
      setForm(initialForm);
      setSubmitState("idle");
      setErrorMsg("");
    }, 280);
  };

  const canContinue = form.name.trim().length > 0 && /.+@.+\..+/.test(form.email);
  const canSend = form.message.trim().length > 0 && submitState !== "sending";

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (canContinue) setStep(2);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;
    setSubmitState("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New project enquiry from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          project_type: form.projectType,
          budget: form.budget,
          message: form.message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitState("success");
      } else {
        setSubmitState("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitState("error");
      setErrorMsg("Network error. Check your connection and try again.");
    }
  };

  if (!open) return null;

  return (
    <div
      className="hire-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-popup-title"
    >
      <button
        type="button"
        aria-label="Close"
        className="hire-popup-backdrop"
        onClick={close}
      />
      <div className="hire-popup-card">
        <header className="hire-popup-head">
          <p className="t-label hire-popup-step">
            {submitState === "success"
              ? "Sent"
              : `Step ${step} of 2 · ${step === 1 ? "About you" : "About the project"}`}
          </p>
          <button
            type="button"
            className="hire-popup-close"
            aria-label="Close"
            onClick={close}
          >
            ×
          </button>
        </header>

        {submitState === "success" ? (
          <div className="hire-popup-success">
            <div className="hire-popup-tick" aria-hidden>✓</div>
            <h2 className="hire-popup-title">Message sent.</h2>
            <p className="hire-popup-success-body">
              Thanks {form.name.split(" ")[0]} — I&apos;ll reply to{" "}
              <strong>{form.email}</strong> within 24 hours.
            </p>
            <button type="button" className="hire-popup-cta" onClick={close}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="hire-popup-title" className="hire-popup-title">
              {step === 1 ? "Let's talk." : "Tell me more."}
            </h2>

            <div className="hire-popup-progress" aria-hidden>
              <span data-active={step >= 1} />
              <span data-active={step >= 2} />
            </div>

        {step === 1 ? (
          <form className="hire-popup-form" onSubmit={handleNext}>
            <label className="hire-popup-field">
              <span className="t-label">Your name</span>
              <input
                ref={firstFieldRef}
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Jane Doe"
                autoComplete="name"
                required
              />
            </label>
            <label className="hire-popup-field">
              <span className="t-label">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>
            <div className="hire-popup-actions">
              <button
                type="submit"
                className="hire-popup-cta"
                disabled={!canContinue}
              >
                Continue <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        ) : (
          <form className="hire-popup-form" onSubmit={handleSend}>
            <div className="hire-popup-row">
              <label className="hire-popup-field">
                <span className="t-label">Project type</span>
                <select
                  value={form.projectType}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, projectType: e.target.value }))
                  }
                >
                  {projectTypes.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
              <label className="hire-popup-field">
                <span className="t-label">Budget</span>
                <select
                  value={form.budget}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, budget: e.target.value }))
                  }
                >
                  {budgetTiers.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="hire-popup-field">
              <span className="t-label">What can I help with?</span>
              <textarea
                ref={messageRef}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="A few sentences about goals, timeline, or anything you'd like me to know."
                rows={5}
                required
              />
            </label>
            {submitState === "error" && (
              <p className="hire-popup-error" role="alert">
                {errorMsg}
              </p>
            )}
            <div className="hire-popup-actions">
              <button
                type="button"
                className="hire-popup-back"
                onClick={() => setStep(1)}
                disabled={submitState === "sending"}
              >
                <span aria-hidden>←</span> Back
              </button>
              <button type="submit" className="hire-popup-cta" disabled={!canSend}>
                {submitState === "sending" ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send message <span aria-hidden>→</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
          </>
        )}
      </div>
    </div>
  );
}
