import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/lib/data";

export default function StatsLedger() {
  return (
    <section id="results" className="bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Results"
          title="Outcomes we report on, monthly"
          description="Every cohort rolls up into the same enterprise dashboard — no vanity metrics, just completion, engagement, and ROI."
        />
        <div className="mt-12 grid grid-cols-1 divide-y divide-ink/10 border border-ink/10 bg-paper sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 p-8">
              <span className="font-display text-4xl text-indigo sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm text-slate">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
