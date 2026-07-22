import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

const variants: Record<string, string> = {
  primary: "bg-brass text-ink hover:bg-brass-light",
  secondary: "bg-indigo text-paper hover:bg-indigo-light",
  ghost: "bg-transparent text-ink border border-ink/20 hover:border-ink/50",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  type = "button",
  children,
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-body text-sm font-medium tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
