import Button from "@/components/ui/Button";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10">
        <div className="flex flex-col gap-6">
          <span className="font-data text-xs uppercase tracking-[0.25em] text-brass-light">
            Enterprise Learning, Operationalized
          </span>
          <h1 className="font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Upskill your workforce
            <br />
            at scale, with proof.
          </h1>
          <p className="max-w-lg text-base text-paper/70 sm:text-lg">
            Partner with IITs, IIMs, and global universities to run curated
            programs, live mentorship, and real-time analytics — the
            operating system for ambitious learning organizations.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <Button href="#lead-form" variant="primary">
              Book a Demo
            </Button>
            <Button href="#how-it-works" variant="ghost" className="border-paper/30 text-paper hover:border-paper/60">
              See How It Works
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-0 rounded-sm border border-paper/15 bg-paper/5 p-6 sm:p-8">
          <span className="font-data mb-4 text-xs uppercase tracking-[0.2em] text-paper/50">
            Program Ledger — FY26 Cohorts
          </span>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-baseline justify-between gap-6 py-4 ${
                i !== 0 ? "ledger-rule-dark" : ""
              }`}
            >
              <span className="font-display text-3xl text-brass-light sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-right text-sm text-paper/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
