
## AI Usage

I used **Claude** throughout this project. Being transparent about where and how:

**Where AI helped:**
- Scaffolding the Next.js project (`create-next-app` flags) and initial
  Tailwind v4 `@theme` setup.
- Drafting the design token system (color palette, font pairing) and the
  first pass of each section component (Hero, FeatureGrid, ProcessSteps,
  StatsLedger, Testimonials, LeadForm, Footer).
- Writing the `/api/lead` route handler, including validation and the
  Vercel `/tmp` filesystem fallback.
- Generating placeholder/mock copy for features, stats, and testimonials
  based on the real Accredian Enterprise page's messaging.
- Running `tsc --noEmit`, `next build`, and `eslint` to catch and fix
  issues (a Fraunces variable-font/weight conflict, a Tailwind border
  conflict in the stats grid) before submission.

**What I modified/reviewed manually:**
- Reviewed every generated component against the actual scope of the
  assignment and trimmed anything that felt templated or unnecessary.
- Verified the responsive behavior and focus states rather than assuming
  the generated Tailwind classes were correct.
- Decided the specific design direction (academic/enterprise tone via a
  serif + brass accent, avoiding generic AI-page defaults like a
  cream-and-terracotta palette) rather than accepting the first suggestion.
- Wrote this README's structure and confirmed the setup/build steps work
  end to end locally before documenting them.


_This is an educational clone built for an internship assignment and is not
affiliated with or endorsed by Accredian._
