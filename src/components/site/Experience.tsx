const items = [
  {
    period: "Dec 2025 — Now",
    role: "Core Developer · Folklore RPG",
    place: "4-person collective, Vietnam",
    body: "Coding a role-playing game that carries Vietnamese folklore to an international gaming audience. Story as cultural export.",
    tags: ["Game dev", "Storytelling", "Collaboration"],
  },
  {
    period: "Aug 2025 — Now",
    role: "Subject Tutor & Coding Club President",
    place: "Dewey Schools Tay Ho Tay",
    body: "Built a Coding Club for middle schoolers — 10 students, 3 Scratch games shipped. Walked 7 classmates through 27 hours of OOP. Briefed 50 MYP students on CS SL/HL to inform their IBDP picks.",
    tags: ["Leadership", "Pedagogy", "OOP", "Scratch"],
  },
  {
    period: "Aug 2024 — May 2025",
    role: "Core Developer · Heart-Rate Forecasting",
    place: "Independent research",
    body: "Algorithm for short-term heart-rate prediction during workouts. 95% accuracy across 1,000 test cases.",
    tags: ["ML", "Time-series", "Sports tech"],
  },
  {
    period: "Aug 2024 — Apr 2025",
    role: "Researcher · GAN-CFM + GBT Ensemble",
    place: "Presented at SOICT 2024",
    body: "Co-developed a GAN-CFM augmentation system stacked with gradient-boosted trees, lifting specificity & sensitivity in diabetes prediction.",
    tags: ["GAN", "Ensembles", "Healthcare AI"],
  },
  {
    period: "Aug 2024 — Apr 2025",
    role: "Researcher · SDAGS",
    place: "J. of Computer Science & Cybernetics",
    body: "Co-developed a diffusion-based algorithm for AI-powered diabetes prediction. Published.",
    tags: ["Diffusion models", "Publication"],
  },
  {
    period: "Feb 2026 — Now",
    role: "Research Fellow · Pioneer Research Institute",
    place: "Northwestern Feinberg mentorship",
    body: "Full-tuition scholarship, 6-person cohort selected from 3,000+ applicants. Currently writing on the tension between innovative experimentation and the protection of vulnerable populations.",
    tags: ["Bioethics", "Research", "Writing"],
  },
];

export const Experience = () => {
  return (
    <section id="work" className="container max-w-6xl py-24 md:py-32">
      <div className="flex items-end justify-between mb-14 gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">§ Selected Work</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
            Things I've built<br />and shipped.
          </h2>
        </div>
        <p className="hidden md:block text-sm text-ink-soft max-w-xs text-pretty">
          A working portfolio of code, research, and teaching. Most overlap.
        </p>
      </div>

      <ol className="border-t border-ink/20">
        {items.map((it) => (
          <li
            key={it.role}
            className="group grid md:grid-cols-12 gap-6 py-8 border-b border-ink/15 hover:bg-paper-deep/40 transition-colors -mx-4 px-4 rounded-sm"
          >
            <div className="md:col-span-3">
              <div className="font-mono text-xs uppercase tracking-wider text-ink-soft">{it.period}</div>
              <div className="text-sm text-muted-foreground mt-1">{it.place}</div>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-serif text-2xl text-ink leading-tight group-hover:text-ochre transition-colors">
                {it.role}
              </h3>
              <p className="mt-2 text-ink-soft leading-relaxed text-pretty">{it.body}</p>
            </div>
            <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end items-start">
              {it.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 border border-ink/25 rounded-sm text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
