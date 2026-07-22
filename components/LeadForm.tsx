"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      teamSize: data.get("teamSize"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="lead-form" className="bg-indigo py-20 text-paper sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <SectionHeading
          eyebrow="Talk To Us"
          title="See it working with your own team's data"
          description="Tell us a bit about your organization. A learning consultant will follow up within one business day with a tailored walkthrough."
          dark
        />

        {status === "success" ? (
          <div className="flex flex-col items-start gap-3 rounded-sm border border-paper/20 bg-paper/5 p-8">
            <CheckCircle2 className="text-brass-light" size={28} />
            <h3 className="font-display text-xl">Request received</h3>
            <p className="text-sm text-paper/70">
              Thanks for reaching out — our team will get back to you shortly
              with next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Company" name="company" required />
              <Field label="Team size" name="teamSize" required />
            </div>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="text-paper/70">What are you looking to solve? (optional)</span>
              <textarea
                name="message"
                rows={3}
                className="rounded-sm border border-paper/20 bg-paper/5 px-4 py-2.5 text-paper placeholder:text-paper/40 focus:border-brass focus:outline-none"
              />
            </label>

            {status === "error" && (
              <p className="text-sm text-red-300">{errorMessage}</p>
            )}

            <Button type="submit" variant="primary" disabled={status === "submitting"} className="mt-2 w-fit">
              {status === "submitting" ? "Sending..." : "Request a Demo"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-paper/70">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-sm border border-paper/20 bg-paper/5 px-4 py-2.5 text-paper placeholder:text-paper/40 focus:border-brass focus:outline-none"
      />
    </label>
  );
}
