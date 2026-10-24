import { directionsUrl, phoneDigits } from "@/data/krewe";

import { FormButton } from "./KreweProvider";

/** Thumb-reachable call, waitlist and directions buttons, shown on small screens only. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_1.5fr_1fr] gap-2 border-t border-blue/10 bg-white/95 p-3 text-sm backdrop-blur min-[360px]:text-base md:hidden">
      <a href={`tel:${phoneDigits}`} className="rounded-full border-2 border-blue py-2.5 text-center font-extrabold text-blue">
        Call
      </a>
      <FormButton mode="waitlist" className="rounded-full bg-red py-3 text-center font-extrabold whitespace-nowrap text-white">
        Join waitlist
      </FormButton>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-blue py-2.5 text-center font-extrabold text-blue"
      >
        Directions
      </a>
    </div>
  );
}
