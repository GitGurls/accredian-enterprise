import Link from "next/link";
import { footerLinks, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-16 text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <span className="font-display text-lg">
              Accredian <span className="text-brass-light">Enterprise</span>
            </span>
            <p className="text-sm text-paper/60">
              The operating system for enterprise learning.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-3">
              <span className="font-data text-xs uppercase tracking-[0.15em] text-paper/50">
                {heading}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        navLinks.find((n) => n.label === link)?.href ?? "#"
                      }
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ledger-rule-dark mt-12 flex flex-col gap-4 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Accredian Enterprise. Educational
            clone project — not affiliated with Accredian.
          </span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-paper/80">
              Privacy
            </Link>
            <Link href="#" className="hover:text-paper/80">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
