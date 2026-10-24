import { ageGroups, daycare, type AgeGroupIcon } from "@/data/krewe";

import { Backpack, Blocks, Bottle, Crayons } from "./Illustrations";
import { SectionHeading } from "./SectionHeading";

const icons: Record<AgeGroupIcon, (props: { className?: string }) => React.ReactNode> = {
  bottle: Bottle,
  blocks: Blocks,
  crayons: Crayons,
  backpack: Backpack,
};

const tints = {
  red: "bg-red-soft",
  yellow: "bg-cream",
  blue: "bg-blue-soft",
  sky: "bg-sky/45",
} as const;

export function AgeGroups() {
  return (
    <section id="ages" aria-labelledby="ages-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="ages-title" eyebrow="Who we care for" title="Little Ones to Big Kids" intro={`Children from ${daycare.ages}.`} />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {ageGroups.map(({ name, range, icon, tint }) => {
            const Icon = icons[icon];
            return (
              <li key={name} className={`flex flex-col items-center rounded-[2rem] px-4 py-7 text-center sm:py-9 ${tints[tint]}`}>
                <span className="flex size-20 items-center justify-center rounded-full bg-white soft-card sm:size-24">
                  <Icon className="h-12 w-12 sm:h-14 sm:w-14" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-blue sm:text-3xl">{name}</h3>
                {range && <p className="mt-1 font-bold text-slate">{range}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
