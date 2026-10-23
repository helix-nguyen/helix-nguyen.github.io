const activities = [
  {
    title: "President · Meditation Club",
    status: "Aug 2025 — Now",
    body: "Host 30-minute meditation sessions every Monday & Friday for 10+ students. Purpose: train the brain to notice and terminate distractions — staying in flow.",
  },
  {
    title: "Writer · @helix_executes",
    status: "Jan 2025 — Now",
    body: "Daily writing on self-development, efficiency, and agency. 200+ posts, 10,000 impressions/week, 10%+ engagement rate.",
  },
  {
    title: "Co-Head of Curation · TEDx",
    status: "Dec 2024 — May 2026",
    body: "Interviewed 21 candidates across Hanoi and selected 9 — trained their speech-giving, coordinated stage movement, met 1-on-1 to boost morale.",
  },
  {
    title: "Vice Head of Publicity & Translator · Friends of Vietnam Heritage",
    status: "Jul 2025 — Now",
    body: "Live-translated 12+ hours of exchanges between 20+ local workers and 20+ English speakers around Hanoi. Translated 5+ articles, videos, and podcasts into Vietnamese.",
  },
  {
    title: "Head of Content · Beyond Words",
    status: "May 2024 — Dec 2025",
    body: "Content for Vietnamese Sign Language workshops with Kym Viet, a business run by the deaf and disabled community. Analyzed a 700+-participant deaf-awareness survey.",
  },
  {
    title: "Vice-President · The Embers of War",
    status: "Jul 2025 — Now",
    body: "Student-led charity for Vietnamese Agent Orange victims. Partnered with the Hoa Binh Humanitarian Center; bake sale raised VND 15m for 10 affected families.",
  },
  {
    title: "Brand Controller · SEIA (school business club)",
    status: "Sep 2025 — May 2026",
    body: "Content calendar, visual standards, engagement analytics. Currently the only media member operating at this layer.",
  },
  {
    title: "Organizer & Speaker · Career Talk Event",
    status: "Dec 2024 — Jan 2025",
    body: "Delivered a 1.5-hour talk on majors and careers to 120+ teens, co-led with 5 classmates and 3 mentor teachers.",
  },
  {
    title: "Social Volunteer · Children's International Summer Village",
    status: "Jul 2025",
    body: "Kept the peace among camp participants, guided trips for supplies, and coordinated activities among middle schoolers.",
  },
  {
    title: "Organizer · Monthly Movie Nights",
    status: "Feb 2025 — Now",
    body: "Refreshments with 6 classmates, invites, and correspondence with students, staff, and teachers. Small thing, reliably done.",
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
          Writing, meditating, translating, curating, fundraising, hosting movie nights. The throughline: <em>making something work for someone else</em>.
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
