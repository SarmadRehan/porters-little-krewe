"use client";

import { contactMethods, parentQuestion } from "@/data/krewe";

import { FORM_FIRST_FIELD_ID, FORM_SECTION_ID, useKrewe, type FormMode } from "./KreweProvider";
import { SectionHeading } from "./SectionHeading";

const fieldClass =
  "mt-2 block w-full rounded-2xl border-2 border-blue/15 bg-white px-4 py-3 text-base text-ink placeholder:text-slate/70 focus:border-blue focus:outline-none focus:ring-4 focus:ring-sun/50";
const labelClass = "font-extrabold text-blue";

const modes: { mode: FormMode; label: string }[] = [
  { mode: "waitlist", label: "Join the waitlist" },
  { mode: "tour", label: "Book a tour" },
];

/**
 * Demo waitlist and tour form. It has no action and makes no network request: submitting only opens
 * the "this is a demo" panel, and nothing is kept once the page is closed.
 */
export function WaitlistForm() {
  const { formMode, setFormMode, openDemoPanel } = useKrewe();
  const isTour = formMode === "tour";

  return (
    <section id={FORM_SECTION_ID} aria-labelledby="waitlist-title" className="bg-blue py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          id="waitlist-title"
          tone="onBlue"
          eyebrow="Waitlist & tours"
          title={isTour ? "Come See Our Krewe" : "Save Your Little One a Spot"}
          intro="Enrollment is opening soon. Tell us about your family and we'll be in touch."
        />

        <form
          className="mt-10 rounded-[2rem] bg-paper p-6 soft-card sm:p-9"
          onSubmit={(event) => {
            // Native validation has already passed when this fires; nothing is sent anywhere.
            event.preventDefault();
            openDemoPanel("form");
          }}
        >
          <fieldset>
            <legend className="sr-only">What would you like to do?</legend>
            <div className="grid grid-cols-2 gap-1.5 rounded-full bg-blue-soft p-1.5">
              {modes.map(({ mode, label }) => (
                <label
                  key={mode}
                  className={`cursor-pointer rounded-full px-3 py-2.5 text-center text-sm font-extrabold transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-sun sm:text-base ${
                    formMode === mode ? "bg-blue text-white" : "text-blue hover:bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="request"
                    value={mode}
                    checked={formMode === mode}
                    onChange={() => setFormMode(mode)}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={FORM_FIRST_FIELD_ID} className={labelClass}>
                Parent name
              </label>
              <input id={FORM_FIRST_FIELD_ID} name="parentName" required autoComplete="name" className={fieldClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="waitlist-child-age" className={labelClass}>
                Child&apos;s age
              </label>
              <input id="waitlist-child-age" name="childAge" required className={fieldClass} placeholder="For example, 8 months" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="waitlist-date" className={labelClass}>
                {isTour ? "Preferred tour date" : "Desired start date"}
              </label>
              <input id="waitlist-date" name={isTour ? "tourDate" : "startDate"} type="date" required className={fieldClass} />
            </div>

            <fieldset className="sm:col-span-2">
              <legend className={labelClass}>Preferred contact</legend>
              <div className="mt-2 grid gap-2 min-[400px]:grid-cols-3">
                {contactMethods.map((method, index) => (
                  <label
                    key={method}
                    className="flex cursor-pointer items-center gap-2.5 rounded-2xl border-2 border-blue/15 bg-white px-4 py-3 font-bold has-[:checked]:border-blue has-[:checked]:bg-blue-soft has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-sun/60"
                  >
                    <input type="radio" name="contact" value={method} required={index === 0} className="size-4 accent-[var(--color-blue)]" />
                    {method}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="sm:col-span-2">
              <label htmlFor="waitlist-matters" className={labelClass}>
                {parentQuestion}
              </label>
              <p id="waitlist-matters-hint" className="mt-1 text-sm text-slate">
                We asked parents this on Instagram, and we&apos;d love to hear your answer too.
              </p>
              <textarea
                id="waitlist-matters"
                name="whatMatters"
                rows={4}
                maxLength={1000}
                aria-describedby="waitlist-matters-hint"
                className={fieldClass}
                placeholder="Tell us in your own words"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-red px-8 py-4 text-lg font-extrabold text-white transition-colors hover:bg-red-dark"
          >
            {isTour ? "Request a tour" : "Join the waitlist"}
          </button>
          <p className="mt-4 text-center text-sm text-slate">Demo form: nothing is sent. You&apos;ll see how to reach us instead.</p>
        </form>
      </div>
    </section>
  );
}
