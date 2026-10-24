import { daycare, phoneDigits } from "@/data/krewe";

import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-white text-slate">
      <div aria-hidden="true" className="krewe-stripe" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo className="w-28" />
          <p className="mt-4 max-w-xs leading-relaxed">{daycare.tagline}.</p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-red">Visit</h2>
          <address className="mt-3 leading-relaxed not-italic">
            {daycare.street}
            <br />
            {daycare.cityLine}
          </address>
          <p className="mt-3 leading-relaxed">
            {daycare.hours}
            <br />
            Ages {daycare.ages}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-red">Contact</h2>
          <p className="mt-3 leading-relaxed">
            <a href={`tel:${phoneDigits}`} className="font-extrabold text-blue hover:text-red">
              {daycare.phone}
            </a>
            <br />
            <a href={daycare.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue">
              Instagram @{daycare.instagramHandle}
            </a>
          </p>
          <p className="mt-3 font-bold text-blue">
            {daycare.status} · {daycare.licensing}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-40 sm:px-6 md:pb-24">
        <p className="rounded-full bg-blue px-4 py-2.5 text-center text-sm font-bold text-white">{daycare.demoNotice}</p>
      </div>
    </footer>
  );
}
