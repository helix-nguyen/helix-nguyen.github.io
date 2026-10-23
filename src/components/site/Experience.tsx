const items = [
  {
    period: "Feb 2026 — Jul 2026",
    role: "Research Fellow · Pioneer Research Institute",
    place: "Bioethics · Northwestern Feinberg mentorship",
    body: "Full-tuition scholarship, 6-student cohort selected from 7,000+ applicants. Wrote a 16-page paper on the ethics of cochlear implants for born-deaf minors — where medicine draws the line between treatment, enhancement, cultural identity, and autonomy.",
    tags: ["Bioethics", "Research", "Writing"],
  },
  {
    period: "Aug 2023 — Apr 2024",
    role: "First Author · SDAGS",
    place: "J. of Computer Science & Cybernetics",
    body: "Co-developed a diffusion-based algorithm for AI-powered diabetes prediction and cleaned 1,000+ rows of the Pima Indians dataset. Published May 2024, vol. 40 no. 2. DOI: 10.15625/1813-9663/20361.",
    tags: ["Diffusion models", "First author", "Publication"],
  },
  {
    period: "Aug 2023 — Apr 2024",
    role: "Second Author · GAN-CFM + GBT Ensemble",
    place: "SOICT 2024 · Springer CCIS vol. 2352",
    body: "Co-developed a GAN-CFM augmentation system stacked with gradient-boosted trees, lifting specificity & sensitivity in diabetes prediction. One of 88 full papers selected from 229; presented at the 13th ICT symposium. DOI: 10.1007/978-981-96-4288-5_16.",
    tags: ["GAN", "Ensembles", "Healthcare AI"],
  },
  {
    period: "Mar 2025 — Nov 2025",
    role: "Team Leader · Youth & Children's Creativity Contest",
    place: "Grand Prize Winner",
    body: "Led a team to the top honor among five 1st-Prize winners out of 1,000+ entries. Built an AI tool that reframes textbook content to hook student interest — 96% accuracy. aicopilot.duckdns.org",
    tags: ["AI", "Leadership", "EdTech"],
  },
  {
    period: "Aug 2025 — Now",
    role: "Founder–President · Dewey Coding Club",
    place: "Dewey Schools Tay Ho Tay",
    body: "Founded the first coding club at Dewey — 14 members (10 mentees, 3 executives) across 2 sessions a week. Guided mentees to ship 5 games for younger students; earned CS50 Scratch and Alison certifications.",
    tags: ["Leadership", "Pedagogy", "Scratch"],
  },
  {
    period: "Jun 2025 — Now",
    role: "Web Developer · VIESIGN",
    place: "Vietnam's first sign-language MOOC",
    body: "Building the frontend of a free research-based MOOC for Vietnamese Sign Language — fixing bugs from user feedback and building an OpenCV finger-counting program with the Convex Hull algorithm. viesign.vercel.app",
    tags: ["Frontend", "OpenCV", "Accessibility"],
  },
  {
    period: "Aug 2025 — Now",
    role: "CS Tutor · Peer Tutoring",
    place: "Dewey Schools Tay Ho Tay",
    body: "Ran peer study sessions for 6 struggling classmates before 2 mock exams — scores moved from 6s to 7s. Introduced 50 MYP4 & MYP5 students to CS SL/HL ahead of their IBDP subject picks.",
    tags: ["Pedagogy", "Patience", "Mentorship"],
  },
  {
    period: "Aug 2025 — Now",
    role: "Workshop Co-Host · Pioneer Academics Student Council",
    place: "Online",
    body: "Led 5 workshops — research techniques, self-management, and turning Pioneer research into college applications. Asked 15+ questions each session and pulled 10+ questions out of fellow scholars.",
    tags: ["Mentorship", "Public speaking"],
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
