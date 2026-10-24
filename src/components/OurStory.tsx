import { daycare, story } from "@/data/krewe";

import { FleurDeLis, Handprint, Heart } from "./Illustrations";

export function OurStory() {
  return (
    <section id="story" aria-labelledby="story-title" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Drawn, not photographed: two handprints and a heart, like the bottom of their logo. */}
        <div aria-hidden="true" className="relative mx-auto aspect-[5/4] w-full max-w-md rounded-[2.5rem] bg-blue soft-card">
          <Handprint className="absolute top-[22%] left-[14%] w-[30%] -rotate-12" color="var(--color-red)" />
          <Handprint className="absolute top-[22%] right-[14%] w-[30%] -scale-x-100 rotate-12" color="var(--color-sun)" />
          <Heart className="absolute top-[9%] left-1/2 w-[13%] -translate-x-1/2" color="#fff" />
          <FleurDeLis className="absolute bottom-[8%] left-1/2 w-[9%] -translate-x-1/2" color="var(--color-sky)" />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-red">Our story</p>
          <h2 id="story-title" className="mt-2 font-display text-4xl font-semibold text-blue sm:text-5xl">
            Meet {daycare.owner}
          </h2>
          <div className="mx-auto mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-slate lg:mx-0">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="mx-auto mt-8 max-w-xl rounded-[2rem] bg-cream px-7 py-6 text-left lg:mx-0">
            <blockquote className="font-display text-2xl leading-snug text-blue">&ldquo;{story.quote}&rdquo;</blockquote>
            <figcaption className="mt-3 font-bold text-slate">{daycare.owner}, owner</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
