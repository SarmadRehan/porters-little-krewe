import { AgeGroups } from "@/components/AgeGroups";
import { AskTheKrewe } from "@/components/AskTheKrewe";
import { Classrooms } from "@/components/Classrooms";
import { DemoBanner } from "@/components/DemoBanner";
import { Hero } from "@/components/Hero";
import { HoursLocation } from "@/components/HoursLocation";
import { KreweProvider } from "@/components/KreweProvider";
import { MobileActionBar } from "@/components/MobileActionBar";
import { OurStory } from "@/components/OurStory";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <KreweProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:font-bold focus:text-blue"
      >
        Skip to content
      </a>
      <DemoBanner />
      <SiteHeader />
      <main id="main">
        <Hero />
        <AgeGroups />
        <OurStory />
        <Classrooms />
        <HoursLocation />
        <WaitlistForm />
      </main>
      <SiteFooter />
      <MobileActionBar />
      <AskTheKrewe />
    </KreweProvider>
  );
}
