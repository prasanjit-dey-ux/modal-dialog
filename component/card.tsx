import { Minus } from "lucide-react";

export const Card = () => {
  return (
    <div className="relative z-10 w-80 rounded-3xl border border-stone-300 bg-white p-4 shadow-md">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium  font-inter text-zinc-400">
          Credits Exhausted
        </h3>

        <button
          aria-label="Minimize"
          className="rounded-md bg-neutral-50 p-1 hover:bg-neutral-100"
        >
          <Minus className="h-4 w-4 text-zinc-500" />
        </button>
      </div>

      {/* Body */}
      <p className="mt-2 mb-4 text-lg font-medium leading-tight text-stone-500 font-inter">
        Enable on-demand pricing to continue running tasks.
      </p>

      {/* Footer */}
      <button className="rounded-xl border border-stone-300 px-3 py-2 text-base font-medium text-stone-500 shadow-sm  font-inter hover:bg-stone-50">
        Enable on-demand
      </button>
    </div>
  );
};
