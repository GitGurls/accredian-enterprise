import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import { features } from "@/lib/data";

export default function FeatureGrid() {
  return (
    <section id="why-us" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Accredian Enterprise"
          title="The operating system for enterprise learning"
          description="From curriculum design to analytics — every layer is built for organizations that treat learning as a measurable business function."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
