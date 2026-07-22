type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      <span
        className={`font-data text-xs tracking-[0.2em] uppercase ${
          dark ? "text-brass-light" : "text-brass"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-3xl sm:text-4xl leading-tight ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg ${dark ? "text-paper/70" : "text-slate"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
