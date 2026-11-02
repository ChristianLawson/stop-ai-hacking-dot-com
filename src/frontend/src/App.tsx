const brand = "StioAIhacking.com";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5 md:px-10 md:py-6">
          <span className="font-display text-[clamp(1.3rem,4.5vw,2rem)] font-bold leading-none tracking-[-0.055em]">
            {brand}
          </span>
          <span className="rounded-full border border-foreground px-3 py-1.5 font-body text-[10px] font-bold uppercase leading-none tracking-[0.08em] sm:text-xs">
            A new space is taking shape
          </span>
        </div>
      </header>

      <main className="flex-1">
        <section
          className="border-b border-border"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 py-16 md:grid-cols-[1.08fr_0.92fr] md:gap-12 md:px-10 md:py-20 lg:gap-20 lg:py-24">
            <div className="min-w-0">
              <p className="mb-5 font-body text-xs font-bold uppercase tracking-[0.16em] md:mb-6">
                Temporary home / 001
              </p>
              <h1
                id="hero-heading"
                className="max-w-[700px] font-display text-[clamp(3.4rem,9vw,7rem)] font-bold leading-[0.96] tracking-[-0.072em]"
              >
                Something new is taking shape
                <span className="text-accent">.</span>
              </h1>
              <p className="mt-7 max-w-[23ch] font-body text-xl leading-[1.2] tracking-[-0.025em] sm:text-2xl md:mt-9">
                This is a temporary home for {brand}. We’re working on what
                comes next.
              </p>
            </div>

            <figure className="m-0 overflow-hidden rounded-[4px] border border-foreground bg-card">
              <img
                src="/assets/generated/stio-signal-circuit.dim_1000x1250.png"
                alt="Black circuit boards and a vivid chartreuse disc on a warm paper surface"
                className="block aspect-[4/5] w-full object-cover"
                width="1000"
                height="1250"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section
          className="border-b border-border bg-muted/40"
          aria-labelledby="meantime-heading"
        >
          <div className="mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
            <h2
              id="meantime-heading"
              className="font-body text-xs font-bold uppercase tracking-[0.16em]"
            >
              In the meantime
            </h2>
            <p className="mt-4 max-w-[38ch] font-body text-xl leading-[1.25] tracking-[-0.025em] sm:text-2xl">
              Welcome to {brand}. This site is a temporary starting point while
              we work on what comes next.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-muted/40">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col justify-between gap-3 border-t border-foreground/60 pt-7 sm:flex-row sm:items-end">
            <span className="font-display text-2xl font-bold tracking-[-0.055em] sm:text-3xl">
              {brand}
            </span>
            <span className="font-body text-lg tracking-[-0.02em] sm:text-xl">
              A work in progress.
            </span>
          </div>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.attribution.link"
            className="mt-9 inline-block rounded-sm font-body text-xs text-muted-foreground underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            © {new Date().getFullYear()}. Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
