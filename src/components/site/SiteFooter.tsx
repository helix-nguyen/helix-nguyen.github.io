export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/70 bg-paper-deep/40">
      <div className="container max-w-6xl py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-ink-soft">
        <div>
          <div className="font-serif text-lg text-ink">Helix · Nguyen Khanh An</div>
          <div className="text-xs text-muted-foreground">Hanoi, Vietnam · IBDP '27 · Dewey Schools Tay Ho Tay</div>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:khanh9an@gmail.com" className="hover:text-ochre transition-colors">Email</a>
          <span className="text-ochre">·</span>
          <span>© {new Date().getFullYear()} — built with care, defended with TEA.</span>
        </div>
      </div>
    </footer>
  );
};
