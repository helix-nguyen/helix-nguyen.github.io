const awards = [
  {
    year: "2025",
    title: "Grand Prize — 21st Youth & Children's Creativity Contest",
    detail: "National round. Top honor among five 1st Prize winners across 1000+ teams. Built an AI that reframes textbook content to hook student interest — targeting structural flaws in Vietnamese education. 96% accuracy.",
  },
  {
    year: "2026",
    title: "Pioneer Research Institute — Full Scholarship",
    detail: "6-person cohort selected from 3,000+ applicants. Mentored by Northwestern Feinberg faculty.",
  },
  {
    year: "2025",
    title: "Senior Mathematical Challenge — Silver",
    detail: "Top 35%. 25 questions across number theory, geometry, algebra, logic.",
  },
  {
    year: "2025",
    title: "Immerse Education Essay Competition — 65% Scholarship",
    detail: "Essays on the extent to which neural networks mimic the human brain.",
  },
  {
    year: "2024–25",
    title: "SOICT 2024 — Conference Presentation",
    detail: "GAN-CFM + GBT ensemble for diabetes prediction.",
  },
  {
    year: "2024",
    title: "CS50x — Completed",
    detail: "Harvard's introduction to computer science.",
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
