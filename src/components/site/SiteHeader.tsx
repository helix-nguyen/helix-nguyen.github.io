export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container max-w-6xl flex items-center justify-between py-4">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl font-semibold tracking-tight text-ink">Helix</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">/ Nguyen Khanh An</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-soft">
          <a href="#manifesto" className="hover:text-ochre transition-colors">Manifesto</a>
          <a href="#identity" className="hover:text-ochre transition-colors">Identity</a>
          <a href="#work" className="hover:text-ochre transition-colors">Work</a>
          <a href="#awards" className="hover:text-ochre transition-colors">Awards</a>
          <a href="#beyond" className="hover:text-ochre transition-colors">Beyond</a>
          <a
            href="mailto:khanh9an@gmail.com"
            className="ml-2 px-3 py-1.5 border border-ink/30 rounded-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
