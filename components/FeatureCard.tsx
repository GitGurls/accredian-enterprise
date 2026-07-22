import { Activity, Award, Brain, LayoutGrid, SlidersHorizontal, Users, LucideIcon } from "lucide-react";
import type { Feature } from "@/lib/data";

const icons: Record<Feature["icon"], LucideIcon> = {
  layout: LayoutGrid,
  activity: Activity,
  users: Users,
  sliders: SlidersHorizontal,
  award: Award,
  brain: Brain,
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = icons[feature.icon];
  return (
    <div className="flex flex-col gap-4 rounded-sm border border-ink/10 bg-paper p-6 transition-colors hover:border-brass/50">
      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-indigo/10 text-indigo">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-lg text-ink">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-slate">{feature.description}</p>
    </div>
  );
}
