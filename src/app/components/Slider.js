"use client";

import Image from "next/image";
import { useState } from "react";

export function Slider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full relative flex min-h-screen flex-col items-center justify-between p-24" onMouseUp={handleMouseUp}>
      <div
        className="relative w-full max-w-[700px] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <Image
        className="border-2"
          alt="After"
          width={200}
          height={200}
          priority
          src={afterImage}
        />

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[700px] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            width={200}
            height={200}
            priority
            alt="Before"
            src={beforeImage}
          />
        </div>
        <div
          // slider line
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          {/* slider button */}
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};