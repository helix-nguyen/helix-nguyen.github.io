const traits = [
  { label: "Precision", value: 92, note: "Algorithms that hit 95–96% accuracy. Edits that survive review." },
  { label: "Flexibility", value: 84, note: "From RPG code to TEDx curation in the same week." },
  { label: "Initiative", value: 90, note: "President, organizer, ambassador — I tend to start things." },
  { label: "Discipline", value: 88, note: "Daily writing, weekly sessions, multi-month projects shipped." },
  { label: "Empathy in leadership", value: 80, note: "27 hours tutoring 7 struggling classmates through OOP." },
  { label: "Comfort with ambiguity", value: 86, note: "Lives in 'both/and', not 'either/or'." },
];

export const Identity = () => {
  return (
    <section id="identity" className="bg-paper-deep/50 border-y border-border/60 grain">
      <div className="container max-w-6xl py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">§ Identity</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] text-balance mb-6">
              Read between<br />the bullet points.
            </h2>
            <p className="text-ink-soft leading-relaxed text-pretty mb-6">
              A résumé lists what I did. This is closer to <em>how</em> I do it. I'm an
              autonomous team player who reads patterns quickly, then translates them
              into the next move someone can act on.
            </p>
            <p className="text-ink-soft leading-relaxed text-pretty">
              I rebound steadfast through emotional complexity — not by ignoring it, but by
              naming it and continuing to move. Calm is a working state, not a personality.
            </p>

            <figure className="mt-10 border-l-2 border-ochre pl-5">
              <blockquote className="font-serif text-2xl italic text-ink leading-snug">
                "Precise and flexible — abstract thinking deployed for practical outcomes."
              </blockquote>
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                — Self-summary, résumé
              </figcaption>
            </figure>
          </div>

          <div className="md:col-span-7 md:pl-6">
            <ul className="space-y-7">
              {traits.map((t) => (
                <li key={t.label}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-serif text-xl text-ink">{t.label}</span>
                    <span className="font-mono text-xs text-ink-soft">{t.value}</span>
                  </div>
                  <div className="h-px bg-ink/15 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-ochre"
                      style={{ width: `${t.value}%`, height: "2px", top: "-0.5px" }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-ink-soft text-pretty">{t.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
