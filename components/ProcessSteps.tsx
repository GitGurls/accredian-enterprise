import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <section id="how-it-works" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How It Works"
          title="Four steps from skill gap to measurable outcome"
          dark
        />
        <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step.index}
              className={`flex flex-col gap-3 border-paper/15 px-0 py-6 sm:px-6 ${
                i !== 0 ? "border-t sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <span className="font-data text-sm text-brass-light">{step.index}</span>
              <h3 className="font-display text-xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-paper/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
