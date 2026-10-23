export const Hero = () => {
  return (
    <section id="top" className="relative grain overflow-hidden">
      <div className="container max-w-6xl pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-ink-soft mb-10 animate-fade-up">
          <span className="h-px w-10 bg-ink/40" />
          <span>Hanoi · b. 2008 · IBDP '27</span>
        </div>

        <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] font-medium text-ink text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Helix.
          <br />
          <span className="italic font-light text-ink-soft">A pattern</span>
          <br />
          <span className="italic font-light">
            seeker who <span className="ink-underline">ships</span>.
          </span>
        </h1>

        <div className="mt-14 grid md:grid-cols-12 gap-10 items-end animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <p className="md:col-span-7 text-lg md:text-xl text-ink-soft leading-relaxed text-pretty max-w-2xl">
            I'm <span className="text-ink font-medium">Nguyen Khanh An</span> — 17, building things that turn
            abstract ideas into outcomes you can measure. Published researcher in the morning,
            coding-club founder after school, TEDx curator on weekends, and a fierce protector
            of <em className="text-ochre not-italic font-medium">time, energy, attention</em>.
          </p>

          <div className="md:col-span-5 md:pl-8 md:border-l md:border-ink/15">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Scholarship</dt>
                <dd className="font-serif text-2xl text-ink">$104K</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Pioneer Cohort</dt>
                <dd className="font-serif text-2xl text-ink">6 / 7,000+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Grand Prize</dt>
                <dd className="font-serif text-2xl text-ink">21<sup className="text-xs">st</sup> YCCC</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">TheNextX</dt>
                <dd className="font-serif text-2xl text-ink">15<span className="text-muted-foreground text-base">/150</span></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-ink/15 bg-paper-deep/60 overflow-hidden py-4">
        <div className="marquee-track flex gap-12 whitespace-nowrap font-serif text-2xl md:text-3xl italic text-ink-soft">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span>Researcher</span><span className="text-ochre">·</span>
              <span>Pioneer Fellow</span><span className="text-ochre">·</span>
              <span>Web Developer</span><span className="text-ochre">·</span>
              <span>Translator</span><span className="text-ochre">·</span>
              <span>Tutor</span><span className="text-ochre">·</span>
              <span>Writer</span><span className="text-ochre">·</span>
              <span>TEDx Co-Curator</span><span className="text-ochre">·</span>
              <span>Coding Club Founder</span><span className="text-ochre">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
