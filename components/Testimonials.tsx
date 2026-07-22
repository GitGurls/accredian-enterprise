import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="From L&D Leaders"
          title="What CHROs say after a rollout"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-6 rounded-sm border border-ink/10 bg-paper-dim p-7"
            >
              <Quote className="text-brass" size={22} strokeWidth={1.5} />
              <blockquote className="text-sm leading-relaxed text-ink/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto ledger-rule pt-4 text-sm">
                <div className="font-medium text-ink">{t.role}</div>
                <div className="text-slate">{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
