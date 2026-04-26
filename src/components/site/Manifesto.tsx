const tenets = [
  {
    n: "01",
    title: "Two sides. Often more.",
    body: "I assume any situation has multiple valid framings. I work with that complexity instead of flattening it into a single hot take.",
  },
  {
    n: "02",
    title: "Abstract → concrete.",
    body: "I enjoy theory only when it lands. A model is interesting; a 95% accuracy on 1,000 test cases is the point.",
  },
  {
    n: "03",
    title: "Clarify the next step.",
    body: "Whether leading or supporting, my job is the same: name the smallest move that lets the team move.",
  },
  {
    n: "04",
    title: "Protect TEA.",
    body: "Time, Energy, Attention. The three currencies I refuse to spend casually — for myself or for the people I work with.",
  },
];

export const Manifesto = () => {
  return (
    <section id="manifesto" className="container max-w-6xl py-24 md:py-36">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">§ Manifesto</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
            How I move<br />through the world.
          </h2>
        </div>
        <ol className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {tenets.map((t) => (
            <li key={t.n}>
              <div className="font-mono text-xs text-ochre mb-3">{t.n}</div>
              <h3 className="font-serif text-2xl text-ink mb-3">{t.title}</h3>
              <p className="text-ink-soft leading-relaxed text-pretty">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
