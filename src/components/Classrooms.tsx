import Image from "next/image";

import { classroomPhotos } from "@/data/krewe";

import { Crayons } from "./Illustrations";
import { SectionHeading } from "./SectionHeading";

export function Classrooms() {
  return (
    <section id="classrooms" aria-labelledby="classrooms-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="classrooms-title"
          eyebrow="Classrooms"
          title="A Peek Inside"
          intro="Our toddler classroom is coming together. We're still working on it, and it's not done yet!"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr]">
          {classroomPhotos.map((photo, index) => (
            <figure key={photo.alt} className="overflow-hidden rounded-[2rem] bg-blue-soft soft-card">
              <div className="relative aspect-[9/8]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 26rem, (min-width: 768px) 46vw, 92vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-3.5 font-bold text-blue">Toddler classroom · view {index + 1}</figcaption>
            </figure>
          ))}

          <div className="flex flex-col items-center justify-center rounded-[2rem] border-[3px] border-dashed border-sun-dark bg-cream px-6 py-10 text-center md:col-span-2 lg:col-span-1">
            <Crayons className="h-20 w-20" />
            <p className="mt-4 rounded-full bg-white px-4 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-red">Coming next</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-blue">Preschool room</h3>
            <p className="mt-2 max-w-xs text-slate">Our preschool classroom is up next. Stay tuned!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
