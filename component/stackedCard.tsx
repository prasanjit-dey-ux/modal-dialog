import { Card } from "@/component/card";

export const StackedCard = () => {
  return (
    <div className="relative">
      
      {/* Back layer */}
      <div className="absolute inset-1.5 -translate-y-4 rounded-3xl border border-stone-300 bg-neutral-200" />

      {/* Middle layer */}
      <div className="absolute inset-0.5  -translate-y-2 rounded-3xl border border-stone-300 bg-neutral-100" />

      {/* Real card */}
      <Card />
    </div>
  );
};
