import { daycare, directionsUrl, mapEmbedUrl } from "@/data/krewe";

import { ContactActions } from "./ContactActions";
import { SectionHeading } from "./SectionHeading";

export function HoursLocation() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="visit-title" eyebrow="Hours & location" title="Find Our Krewe" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] bg-white p-7 soft-card sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-blue">Hours</h3>
                {/* Not open yet, so no live "open now" status: the honest state is "opening soon". */}
                <p className="rounded-full bg-red-soft px-3 py-1 text-sm font-extrabold text-red-dark">
                  {daycare.status} · {daycare.licensing}
                </p>
              </div>
              <p className="mt-4 font-display text-4xl font-semibold text-ink">{daycare.hours}</p>
            </div>

            <div className="flex flex-1 flex-col rounded-[2rem] bg-white p-7 soft-card sm:p-8">
              <h3 className="font-display text-2xl font-semibold text-blue">Address</h3>
              <address className="mt-3 text-lg leading-relaxed font-semibold not-italic">
                {daycare.street}
                <br />
                {daycare.cityLine}
              </address>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 self-start font-extrabold text-blue underline underline-offset-4 hover:text-red"
              >
                Get directions
              </a>
              <h3 className="mt-7 font-display text-2xl font-semibold text-blue">Call or text</h3>
              <p className="mt-1 font-display text-3xl font-semibold text-red">{daycare.phone}</p>
              <ContactActions className="mt-6" />
            </div>
          </div>

          <div className="min-h-80 overflow-hidden rounded-[2rem] bg-blue-soft soft-card">
            <iframe
              title={`Map of ${daycare.street}, ${daycare.cityLine}`}
              src={mapEmbedUrl}
              className="h-full min-h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
