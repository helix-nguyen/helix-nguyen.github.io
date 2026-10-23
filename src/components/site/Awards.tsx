const awards = [
  {
    year: "2025",
    title: "Grand Prize — Youth & Children's Creativity Contest",
    detail: "National round. Top honor among five 1st Prize-winning teams out of 1,000+ entries. Led the team that built an AI reframing textbook content for disengaged students — 96% accuracy.",
  },
  {
    year: "2026",
    title: "Pioneer Research Institute — $7,465 Full-Tuition Scholarship",
    detail: "6-student cohort selected from 7,000+ applicants. Mentored by faculty affiliated with Northwestern Feinberg School of Medicine.",
  },
  {
    year: "2026",
    title: "Immerse Education Essay Competition — 95% Total Scholarship",
    detail: "Essays on the extent to which neural networks mimic the human brain.",
  },
  {
    year: "2026",
    title: "TheNextX AI and Business Competition — 15/150 National",
    detail: "Ranked 1st of 7 Hanoi teams and 15th of 150 teams nationally.",
  },
  {
    year: "2026",
    title: "Leadership Initiatives — 80% Scholarship (~$2,750)",
    detail: "Selected as 1 of 2 international students out of 100+ applicants.",
  },
  {
    year: "2025",
    title: "UKMT International Senior Mathematical Challenge — Silver",
    detail: "25 questions across number theory, geometry, algebra, logic.",
  },
];

export const Awards = () => {
  return (
    <section id="awards" className="bg-ink text-paper grain relative">
      <div className="container max-w-6xl py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-ochre-soft mb-4">§ Recognition</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              The receipts.
            </h2>
          </div>
          <p className="md:col-span-7 text-paper/70 text-lg leading-relaxed text-pretty self-end">
            Awards aren't the point — but they're useful proof that the work landed
            outside my own head. Here's what survived external review.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-x-10">
          {awards.map((a, i) => (
            <li
              key={a.title}
              className={`py-7 border-t border-paper/15 ${i === 0 || i === 1 ? "md:border-t-0" : ""}`}
            >
              <div className="font-mono text-xs text-ochre-soft tracking-widest mb-2">{a.year}</div>
              <h3 className="font-serif text-2xl mb-3 text-balance">{a.title}</h3>
              <p className="text-paper/70 leading-relaxed text-pretty">{a.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
