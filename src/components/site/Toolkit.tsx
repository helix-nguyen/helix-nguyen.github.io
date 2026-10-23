const groups = [
  {
    label: "Programming",
    items: ["Python", "HTML / CSS / JavaScript", "scikit-learn", "TensorFlow"],
  },
  {
    label: "Methods",
    items: ["Prompt engineering", "Stacked ensembles", "Data preprocessing", "Augmentation"],
  },
  {
    label: "Tools",
    items: ["Figma", "Notion", "VSCode", "LaTeX", "Cursor", "Trello", "Atlas", "Google Suite"],
  },
  {
    label: "Interests",
    items: ["Logical reasoning", "Puzzles", "Meditation", "Cultural translation", "Mentorship"],
  },
];

export const Toolkit = () => {
  return (
    <section className="bg-paper-deep/50 border-y border-border/60">
      <div className="container max-w-6xl py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">§ Toolkit</p>
            <h2 className="font-serif text-4xl text-ink leading-[1.05] text-balance">
              What I reach for.
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {groups.map((g) => (
              <div key={g.label}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-4">
                  {g.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm px-3 py-1.5 bg-background border border-border rounded-sm text-ink"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
