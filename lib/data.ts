export const navLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
];

export const partnerLogos = [
  "IIT Delhi",
  "IIM Kozhikode",
  "ISB Hyderabad",
  "IIT Roorkee",
  "XLRI Jamshedpur",
  "IIM Indore",
];

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: "layout" | "activity" | "users" | "sliders" | "award" | "brain";
};

export const features: Feature[] = [
  {
    id: "f1",
    title: "Co-designed curriculum",
    description:
      "Programs built alongside IIT, IIM, and global faculty, structured for problems your teams actually face on the job.",
    icon: "layout",
  },
  {
    id: "f2",
    title: "Real-time analytics",
    description:
      "A live dashboard for completion, engagement, and skill-gap data, so L&D can report ROI without chasing spreadsheets.",
    icon: "activity",
  },
  {
    id: "f3",
    title: "Live mentorship",
    description:
      "1:1 and cohort sessions with 500+ practitioners across AI/ML, data, product, and leadership.",
    icon: "users",
  },
  {
    id: "f4",
    title: "Custom learning paths",
    description:
      "Every track is tuned to your organization's stack, skill gaps, and business goals — never one-size-fits-all.",
    icon: "sliders",
  },
  {
    id: "f5",
    title: "Verified certification",
    description:
      "Credentials from partner institutions that are shareable, verifiable, and recognized across the industry.",
    icon: "award",
  },
  {
    id: "f6",
    title: "Adaptive learning engine",
    description:
      "Content resequences itself around each learner's pace and baseline, keeping cohorts moving together.",
    icon: "brain",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "§01",
    title: "Discover",
    description:
      "Our consultants map your team's skill gaps, tooling, and business goals in a short discovery workshop.",
  },
  {
    index: "§02",
    title: "Design",
    description:
      "We co-create a learning journey with academic partners, scoped to the roles you're actually upskilling.",
  },
  {
    index: "§03",
    title: "Deploy",
    description:
      "Teams are onboarded with platform access, a cohort orientation, and a mentor assigned to each track.",
  },
  {
    index: "§04",
    title: "Deliver",
    description:
      "Monthly business reviews, completion nudges, and dashboard reporting keep learning measurable and sticky.",
  },
];

export type StatEntry = {
  value: string;
  label: string;
};

export const stats: StatEntry[] = [
  { value: "500+", label: "Industry mentors across AI/ML, data & leadership" },
  { value: "94%", label: "Average cohort completion rate" },
  { value: "40+", label: "Enterprise partners upskilled at scale" },
  { value: "96%", label: "Peak completion rate across a single rollout" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%.",
    name: "Head of L&D",
    role: "VP, People Development",
    company: "Enterprise SaaS company",
  },
  {
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers now lead ML projects independently.",
    name: "CHRO",
    role: "Chief Human Resources Officer",
    company: "Fintech scale-up",
  },
  {
    quote:
      "We onboarded 300 managers across three geographies simultaneously. Completion rates hit 96%, unprecedented for a rollout this size.",
    name: "L&D Director",
    role: "Director, Learning & Development",
    company: "Global logistics firm",
  },
];

export const footerLinks = {
  Product: ["Why Us", "Programs", "How It Works", "Pricing"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "ROI Calculator", "Partner Institutions"],
};
