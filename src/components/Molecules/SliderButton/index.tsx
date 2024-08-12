"use client";

import { Direction, SliderButtonProps } from "@/components/types";

export default function SliderButton({ icon, direction, scrollSlider }: SliderButtonProps) {
  return (
    <button 
      className={`absolute ${direction === Direction.Left ? "left-2" : "right-2"} top-1/2 transform -translate-y-1/2 bg-white p-2 w-10 h-10 rounded-full flex items-center justify-center`}
      onClick={() => scrollSlider(direction)}
    >
      {icon}
    </button>
  );
}
