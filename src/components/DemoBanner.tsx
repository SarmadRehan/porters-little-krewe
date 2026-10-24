import { daycare } from "@/data/krewe";

export function DemoBanner() {
  return <p className="bg-blue px-4 py-2 text-center text-sm font-bold text-white">{daycare.demoNotice}</p>;
}
