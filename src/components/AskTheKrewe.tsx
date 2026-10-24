"use client";

import { useEffect, useId, useRef, useState } from "react";

import { answer, greeting, suggestions, type BotAction, type BotReply } from "@/lib/kreweBot";

import { ChatBubble } from "./Illustrations";
import { useKrewe } from "./KreweProvider";
import { Logo } from "./Logo";

type Message = { id: number; from: "bot" | "parent"; text: string; action?: BotAction };

// A short pause before each reply reads as a conversation; the follow-up step (tour form or demo
// panel) waits a little longer so the reply can be read first.
const REPLY_DELAY_MS = 450;
const FOLLOW_UP_DELAY_MS = 1400;

const actionLabels: Record<BotAction, string> = {
  waitlist: "Join the waitlist",
  tour: "Open the tour form",
  contact: "How to reach Cody",
};

/**
 * "Ask the Krewe": a floating, scripted helper. Replies come from `answer()` in lib/kreweBot.ts, on
 * the page itself; nothing typed here leaves the browser or is stored.
 */
export function AskTheKrewe() {
  const { goToForm, openDemoPanel } = useKrewe();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 0, from: "bot", ...greeting }]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const nextId = useRef(1);
  const timers = useRef<number[]>([]);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef(false);
  const panelId = useId();

  useEffect(() => () => timers.current.forEach((timer) => window.clearTimeout(timer)), []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else if (returnFocus.current) {
      // The launcher is hidden while the panel is open, so focus it only once it's back.
      returnFocus.current = false;
      launcherRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, typing]);

  const later = (callback: () => void, delay: number) => {
    timers.current.push(window.setTimeout(callback, delay));
  };

  const close = (focusLauncher = true) => {
    returnFocus.current = focusLauncher;
    setOpen(false);
  };

  const runAction = (action: BotAction) => {
    if (action === "waitlist" || action === "tour") {
      close(false);
      goToForm(action);
    } else {
      openDemoPanel("chat");
    }
  };

  const ask = (question: string) => {
    const text = question.trim().slice(0, 200);
    if (!text || typing) return;
    const reply: BotReply = answer(text);
    setMessages((current) => [...current, { id: nextId.current++, from: "parent", text }]);
    setDraft("");
    setTyping(true);
    later(() => {
      setTyping(false);
      setMessages((current) => [...current, { id: nextId.current++, from: "bot", ...reply }]);
      // The brief: "Can I tour?" opens the tour form, and anything off-script ends in the demo panel.
      // Tuition and opening questions only offer the waitlist button.
      if (reply.action === "tour" || reply.action === "contact") {
        const action = reply.action;
        later(() => runAction(action), FOLLOW_UP_DELAY_MS);
      }
    }, REPLY_DELAY_MS);
  };

  return (
    <>
      {open && (
        <section
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={`${panelId}-title`}
          className="fixed right-3 bottom-24 z-50 flex max-h-[min(36rem,calc(100dvh-8rem))] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[1.75rem] bg-white soft-card ring-1 ring-blue/10 md:right-6 md:bottom-6"
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
        >
          <header className="flex items-center gap-3 bg-blue px-4 py-3 text-white">
            <span className="rounded-full bg-white p-0.5">
              <Logo className="w-10" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 id={`${panelId}-title`} className="font-display text-xl leading-tight font-semibold">
                Ask the Krewe
              </h2>
              <p className="text-xs font-semibold text-white/85">Scripted demo · nothing is sent</p>
            </div>
            <button
              type="button"
              onClick={() => close()}
              aria-label="Close Ask the Krewe"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>
          <div aria-hidden="true" className="krewe-stripe" />

          <div ref={logRef} role="log" aria-live="polite" aria-label="Conversation" className="flex-1 space-y-3 overflow-y-auto bg-paper px-4 py-4">
            {messages.map(({ id, from, text, action }) =>
              from === "bot" ? (
                <div key={id} className="max-w-[88%]">
                  <p className="rounded-2xl rounded-bl-md bg-white px-4 py-2.5 leading-snug text-ink ring-1 ring-blue/10">{text}</p>
                  {action && (
                    <button
                      type="button"
                      onClick={() => runAction(action)}
                      className="mt-2 rounded-full bg-red px-4 py-2 text-sm font-extrabold text-white transition-colors hover:bg-red-dark"
                    >
                      {actionLabels[action]}
                    </button>
                  )}
                </div>
              ) : (
                <p key={id} className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-blue px-4 py-2.5 leading-snug break-words text-white">
                  {text}
                </p>
              ),
            )}
            {typing && (
              <p className="w-fit rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-slate ring-1 ring-blue/10">
                <span className="sr-only">The Krewe helper is typing</span>
                <span aria-hidden="true" className="tracking-[0.3em] motion-safe:animate-pulse">
                  •••
                </span>
              </p>
            )}
          </div>

          <div className="border-t border-blue/10 bg-white px-3 pt-3 pb-3">
            <ul aria-label="Suggested questions" className="flex flex-wrap gap-1.5">
              {suggestions.map((suggestion) => (
                <li key={suggestion.label}>
                  <button
                    type="button"
                    onClick={() => ask(suggestion.question)}
                    disabled={typing}
                    className="rounded-full bg-blue-soft px-3 py-1.5 text-sm font-bold text-blue transition-colors hover:bg-sky disabled:opacity-60"
                  >
                    {suggestion.label}
                  </button>
                </li>
              ))}
            </ul>
            <form
              className="mt-2.5 flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                ask(draft);
              }}
            >
              <label htmlFor={`${panelId}-input`} className="sr-only">
                Type a question
              </label>
              <input
                ref={inputRef}
                id={`${panelId}-input`}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                maxLength={200}
                autoComplete="off"
                placeholder="Type a question"
                className="min-w-0 flex-1 rounded-full border-2 border-blue/15 px-4 py-2.5 text-base focus:border-blue focus:outline-none"
              />
              <button
                type="submit"
                disabled={typing || !draft.trim()}
                className="rounded-full bg-blue px-4 font-extrabold text-white transition-colors hover:bg-blue-dark disabled:opacity-50"
              >
                Ask
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => (open ? close() : setOpen(true))}
        className={`fixed right-3 bottom-[5.25rem] z-40 items-center gap-2 rounded-full bg-sun py-2.5 pr-4 pl-3 font-display text-base font-semibold text-blue soft-card ring-2 ring-white transition-colors hover:bg-sun-dark md:right-6 md:bottom-6 md:py-3 md:text-lg ${
          open ? "hidden" : "inline-flex"
        }`}
      >
        <ChatBubble className="size-6" />
        Ask the Krewe
      </button>
    </>
  );
}
