import { partnerLogos } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="border-b border-ink/10 bg-paper-dim py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-5 font-data text-xs uppercase tracking-[0.2em] text-slate">
          Co-designed with academic partners
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {partnerLogos.map((name) => (
            <span
              key={name}
              className="font-display text-lg text-ink/60 sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
