type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  /** "onBlue" for headings that sit on the blue waitlist band. */
  tone?: "default" | "onBlue";
};

export function SectionHeading({ eyebrow, title, intro, id, tone = "default" }: SectionHeadingProps) {
  const onBlue = tone === "onBlue";
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-sm font-extrabold uppercase tracking-[0.2em] ${onBlue ? "text-sun" : "text-red"}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-2 font-display text-4xl font-semibold text-balance sm:text-5xl ${onBlue ? "text-white" : "text-blue"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${onBlue ? "text-white/90" : "text-slate"}`}>{intro}</p>}
    </div>
  );
}
