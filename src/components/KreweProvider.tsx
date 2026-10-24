"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

import { daycare } from "@/data/krewe";

import { ContactActions } from "./ContactActions";
import { Logo } from "./Logo";

export type FormMode = "waitlist" | "tour";
type PanelSource = "form" | "chat" | "button";

type KreweContextValue = {
  formMode: FormMode;
  setFormMode: (mode: FormMode) => void;
  /** Switches the form to waitlist or tour, scrolls to it and focuses the first field. */
  goToForm: (mode: FormMode) => void;
  /** The honest "this is a demo" panel that every form, button and chat ending leads to. */
  openDemoPanel: (source?: PanelSource) => void;
};

const KreweContext = createContext<KreweContextValue | null>(null);

export const FORM_SECTION_ID = "waitlist";
export const FORM_FIRST_FIELD_ID = "waitlist-parent-name";

const leadIn: Record<PanelSource, string> = {
  form: "This demo form doesn't send anything. ",
  chat: "This chat is scripted and doesn't send anything. ",
  button: "",
};

/** Shared form mode plus the single demo panel. Nothing on the page sends data anywhere. */
export function KreweProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formMode, setFormMode] = useState<FormMode>("waitlist");
  const [source, setSource] = useState<PanelSource>("button");

  const openDemoPanel = useCallback((from: PanelSource = "button") => {
    setSource(from);
    dialogRef.current?.showModal();
  }, []);

  const goToForm = useCallback((mode: FormMode) => {
    setFormMode(mode);
    document.getElementById(FORM_SECTION_ID)?.scrollIntoView({ block: "start" });
    // Without scrolling again, so smooth scrolling into the section isn't cut short.
    document.getElementById(FORM_FIRST_FIELD_ID)?.focus({ preventScroll: true });
  }, []);

  const value = useMemo(() => ({ formMode, setFormMode, goToForm, openDemoPanel }), [formMode, goToForm, openDemoPanel]);
  const close = () => dialogRef.current?.close();

  return (
    <KreweContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="demo-panel-title"
        aria-describedby="demo-panel-description"
        className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-[2rem] bg-white p-0 text-ink shadow-2xl backdrop:bg-blue-dark/60 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicks on the backdrop land on the <dialog> itself, not its content.
          if (event.target === event.currentTarget) close();
        }}
      >
        <div aria-hidden="true" className="krewe-stripe" />
        <div className="p-7 text-center sm:p-8">
          <Logo className="mx-auto w-24" />
          <p className="mt-5 inline-block rounded-full bg-cream px-4 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-blue">
            {daycare.status} · {daycare.licensing}
          </p>
          <h2 id="demo-panel-title" className="mt-3 font-display text-3xl font-semibold text-blue">
            This is a demo
          </h2>
          <p id="demo-panel-description" className="mt-3 leading-relaxed text-slate">
            {leadIn[source]}For now, call or text{" "}
            <span className="whitespace-nowrap font-bold text-ink">{daycare.phone}</span> or DM{" "}
            <span className="font-bold whitespace-nowrap text-ink">@{daycare.instagramHandle}</span>.
          </p>
          <ContactActions className="mt-6" />
          <button
            type="button"
            autoFocus
            onClick={close}
            className="mt-5 text-sm font-bold text-slate underline underline-offset-4 hover:text-blue"
          >
            Close
          </button>
        </div>
      </dialog>
    </KreweContext.Provider>
  );
}

export function useKrewe(): KreweContextValue {
  const context = useContext(KreweContext);
  if (!context) throw new Error("useKrewe must be used inside KreweProvider");
  return context;
}

type FormButtonProps = {
  mode: FormMode;
  className?: string;
  children: React.ReactNode;
};

/** "Join the waitlist" or "Book a tour": jumps to the demo form in that mode. */
export function FormButton({ mode, className, children }: FormButtonProps) {
  const { goToForm } = useKrewe();
  return (
    <button type="button" className={className} onClick={() => goToForm(mode)}>
      {children}
    </button>
  );
}
