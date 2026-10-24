"use client";

import { useEffect, useState } from "react";

import { daycare, phoneDigits } from "@/data/krewe";

import { FormButton } from "./KreweProvider";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#ages", label: "Ages" },
  { href: "#story", label: "Our story" },
  { href: "#classrooms", label: "Classrooms" },
  { href: "#visit", label: "Hours & location" },
  { href: "#waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Porters Little Krewe Daycare, back to top">
          <Logo className="w-11" priority />
          <span className="hidden font-display text-lg leading-none font-semibold text-blue min-[360px]:block">
            Porters Little Krewe
            <span className="mt-0.5 block text-xs font-bold tracking-[0.25em] text-red uppercase">Daycare</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-bold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate transition-colors hover:text-blue">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={`tel:${phoneDigits}`} className="font-extrabold whitespace-nowrap text-blue transition-colors hover:text-red">
            {daycare.phone}
          </a>
          <FormButton mode="waitlist" className="rounded-full bg-red px-5 py-2.5 font-extrabold whitespace-nowrap text-white transition-colors hover:bg-red-dark">
            Join the waitlist
          </FormButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <div aria-hidden="true" className="krewe-stripe" />

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-b border-blue/10 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-2 text-base font-bold text-blue">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block py-3" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
