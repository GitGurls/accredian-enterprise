import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Ready to make learning a measurable part of your business?
        </h2>
        <p className="max-w-xl text-slate">
          Book a walkthrough and we&apos;ll map your team&apos;s skill gaps
          against a program design in the same session.
        </p>
        <Button href="#lead-form">Book a Demo</Button>
      </div>
    </section>
  );
}
