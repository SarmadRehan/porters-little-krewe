import { daycare, phoneDigits } from "@/data/krewe";

const base = "rounded-full px-5 py-3 text-center font-extrabold transition-colors";

/** Call, text and Instagram DM buttons; used by the demo panel and the Visit section. */
export function ContactActions({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      <a href={`tel:${phoneDigits}`} className={`${base} bg-blue text-white hover:bg-blue-dark`}>
        Call
      </a>
      <a href={`sms:${phoneDigits}`} className={`${base} bg-red text-white hover:bg-red-dark`}>
        Text
      </a>
      <a
        href={daycare.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} whitespace-nowrap bg-sun text-blue hover:bg-sun-dark`}
      >
        DM us
      </a>
    </div>
  );
}
