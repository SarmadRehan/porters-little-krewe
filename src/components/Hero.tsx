import { daycare } from "@/data/krewe";

import { Blocks, FleurDeLis, Handprint, Heart, Sun } from "./Illustrations";
import { FormButton } from "./KreweProvider";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="sunny relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-20">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-red soft-card">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-red motion-safe:animate-pulse" />
            {daycare.status} in New Orleans
          </p>
          <h1 id="hero-title" className="mt-6 font-display text-5xl leading-[1.02] font-semibold text-blue sm:text-7xl">
            Porters <span className="text-red">Little</span> {/* Yellow text fails contrast on the light background, so "Krewe" gets the sun as a marker instead. */}
            <span className="bg-[linear-gradient(transparent_58%,var(--color-sun)_58%,var(--color-sun)_92%,transparent_92%)] px-1">Krewe</span>
            <span className="mt-2 block text-3xl font-medium text-ink sm:text-4xl">Daycare</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-slate sm:text-2xl lg:mx-0">{daycare.tagline}.</p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 text-sm font-bold lg:justify-start">
            <li className="rounded-full bg-blue-soft px-4 py-1.5 text-blue">Ages {daycare.ages}</li>
            <li className="rounded-full bg-cream px-4 py-1.5 text-blue">{daycare.hours}</li>
            <li className="rounded-full bg-red-soft px-4 py-1.5 text-red-dark">{daycare.licensing}</li>
          </ul>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <FormButton
              mode="waitlist"
              className="w-full rounded-full bg-red px-8 py-4 text-lg font-extrabold text-white transition-colors soft-card hover:bg-red-dark sm:w-auto"
            >
              Join the waitlist
            </FormButton>
            <FormButton
              mode="tour"
              className="w-full rounded-full border-[3px] border-blue bg-white px-8 py-3.5 text-lg font-extrabold text-blue transition-colors hover:bg-blue hover:text-white sm:w-auto"
            >
              Book a tour
            </FormButton>
          </div>
        </div>

        {/* Their logo on a sunny disc, with drawn hearts, blocks and handprints around it. */}
        <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-md">
          <div aria-hidden="true" className="absolute inset-[6%] rounded-full bg-sun/30" />
          <div aria-hidden="true" className="absolute inset-[13%] rounded-full bg-white soft-card" />
          <Logo className="absolute inset-[16%] w-[68%]" priority />
          <Sun className="absolute -top-1 right-[4%] w-[22%] motion-safe:animate-[spin_40s_linear_infinite]" />
          <Heart className="absolute top-[14%] left-[2%] w-[12%] -rotate-12" />
          <Heart className="absolute right-[1%] bottom-[30%] w-[9%] rotate-12" color="var(--color-blue)" />
          <Blocks className="absolute bottom-[1%] left-[3%] w-[22%]" />
          <Handprint className="absolute right-[10%] bottom-[2%] w-[14%] rotate-12" color="var(--color-blue)" />
          <FleurDeLis className="absolute top-[44%] left-[-2%] w-[9%] -rotate-6" color="var(--color-sun-dark)" />
        </div>
      </div>
    </section>
  );
}
