export const Closing = () => {
  return (
    <section className="container max-w-6xl py-28 md:py-40 text-center grain relative">
      <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-6">§ Reach out</p>
      <h2 className="font-serif text-5xl md:text-7xl text-ink leading-[1] text-balance mb-10">
        Let's <span className="italic">build something</span><br />
        worth the <span className="ink-underline">attention</span>.
      </h2>
      <p className="max-w-xl mx-auto text-ink-soft text-lg leading-relaxed mb-10 text-pretty">
        Research collaborations, writing, mentorship, or a quiet message. I read everything,
        I reply to what's specific.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:khanh9an@gmail.com"
          className="px-6 py-3 bg-ink text-paper rounded-sm hover:bg-ochre transition-colors font-medium"
        >
          khanh9an@gmail.com
        </a>
        <a
          href="tel:+84899348568"
          className="px-6 py-3 border border-ink/30 text-ink rounded-sm hover:border-ochre hover:text-ochre transition-colors"
        >
          +84 899 348 568
        </a>
      </div>
    </section>
  );
};
