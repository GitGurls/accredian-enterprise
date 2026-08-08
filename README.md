



   results/stats, testimonials, lead form, footer) and rebuilt them as
   independent, typed components with mock copy.
2. **Design system first.** All colors and fonts are defined once in
   `app/globals.css` as CSS variables (Tailwind v4's `@theme inline`), so
   every component pulls from the same palette (`ink`, `paper`, `brass`,
   `indigo`, `slate`) instead of hardcoded hex values. This made it easy to
   keep the enterprise/academic tone (serif display font + a brass/gold
   accent evoking credentials and academic partnerships) consistent
   throughout.
3. **Componentization.** `Button`, `SectionHeading`, and `FeatureCard` are
   the reusable primitives; every section is its own component, and
   `app/page.tsx` is just a composition of them — no logic lives there.
4. **API integration.** `/api/lead` is a real Next.js Route Handler (not a
   third-party mock): it validates the payload, persists submissions to a
   JSON file, and returns a typed response. On Vercel's serverless runtime,
   it falls back to writing under `/tmp` since the deployed filesystem is
   read-only outside of it (noted in the code comments) — in a production
   system this would be swapped for a real database.
5. **Responsiveness.** Every section was built mobile-first with Tailwind's
   breakpoints (`sm`, `lg`), and the nav collapses into a toggleable mobile
   menu below `md`.

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
