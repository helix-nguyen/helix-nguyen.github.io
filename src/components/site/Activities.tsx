const activities = [
  {
    title: "Writer · @helix_executes",
    status: "On hold",
    body: "Daily writing on systems, efficiency, and agency. 100+ followers, 10K impressions/week, 10%+ engagement at peak.",
  },
  {
    title: "Co-Head of Curation · TEDx",
    status: "Nov 2025",
    body: "Helping shape the lineup and the room. Earlier: organized & spoke at a 1.5-hour majors-and-careers talk for 120+ teens.",
  },
  {
    title: "Cultural Ambassador · Friends of Vietnam Heritage",
    status: "Jul 2025 — Now",
    body: "Translated 5+ traditions across 20+ Vietnamese workers and 20+ English speakers — 12+ hours of minigames, tours, excursions around Hanoi.",
  },
  {
    title: "Translator · Education for Vietnamese Youth",
    status: "Jul 2025 — Now",
    body: "STEM articles, videos, podcasts — English → Vietnamese — so the knowledge actually reaches the kids it's for.",
  },
  {
    title: "Brand Controller · SEIA (school business club)",
    status: "Sep 2025 — Now",
    body: "Content calendar, visual standards, engagement analytics. Currently the only media member operating at this layer.",
  },
  {
    title: "Volunteer · Children's International Summer Village",
    status: "Jul 2025",
    body: "Promoted from regional participant to international supporter. Kept the peace, steered kids away from overpriced stalls, recovered a lost child in under two minutes.",
  },
  {
    title: "Environmental Volunteer · Green Life",
    status: "Dec 2024 — Mar 2025",
    body: "Potted 47 trees. Recycled 620 kg of trash. Advised 360 people trading waste for plants.",
  },
  {
    title: "Future President · Meditation Club",
    status: "Coming",
    body: "30-minute Friday sessions. Results pending observation — which, fittingly, is the spirit of the thing.",
  },
  {
    title: "Ambassador · Crimson Education Competitions",
    status: "Oct 2025 — Now",
    body: "Surfacing writing, pitching, and problem-solving opportunities to students across Hanoi. 20+ outreach emails sent.",
  },
];

export const Activities = () => {
  return (
    <section id="beyond" className="container max-w-6xl py-24 md:py-32">
      <div className="mb-14 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">§ Beyond the résumé</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] text-balance mb-5">
          The other half<br />of the picture.
        </h2>
        <p className="text-ink-soft text-lg leading-relaxed text-pretty">
          Writing, teaching, translating, organizing, recycling, mediating
          summer-camp disputes. The throughline: <em>making something work for
          someone else</em>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {activities.map((a) => (
          <article
            key={a.title}
            className="group relative bg-card border border-border p-6 rounded-sm hover:border-ochre transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-serif text-lg text-ink leading-tight">{a.title}</h3>
              <span className="shrink-0 text-[10px] uppercase tracking-widest text-ochre font-mono mt-1">{a.status}</span>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed text-pretty">{a.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
