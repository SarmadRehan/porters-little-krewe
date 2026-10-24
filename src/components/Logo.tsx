import Image from "next/image";

import logo from "@/assets/images/logo.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/** Their own round logo from Instagram: sun, "Porters Little Krewe", DAYCARE ribbon and two handprints. */
export function Logo({ className = "", priority = false }: LogoProps) {
  return <Image src={logo} alt="Porters Little Krewe Daycare" className={`h-auto ${className}`} sizes="20rem" priority={priority} />;
}
