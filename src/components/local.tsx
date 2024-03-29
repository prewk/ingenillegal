"use client";

import React from "react";

export default function Local({
  appearance,
  className,
}: {
  appearance: "transparent" | "filled";
  className?: string;
}) {
  const chapters: [string, string][] = [
    ["Göteborg", "/goteborg"],
    ["Östersund", "/ostersund"],
    ["Stockholm", "/stockholm"],
    ["Trollhättan", "/trollhattan"],
    ["Umeå", "/umea"],
    ["Uppsala", "/uppsala"],
  ];

  return (
    <section
      className={`${className ?? ""} ${
        appearance === "filled" ? "bg-ocean-light" : ""
      }`}
      dir="ltr"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 relative max-w-[1010px] px-5 mx-auto">
        <div className="relative">
          <img
            src="/pekar.png"
            alt="Illustration av person med IMÄI-tröja"
            className="relative md:absolute -top-10 left-0 h-auto md:h-[380px] w-full md:w-auto z-0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 pb-5 md:py-20 z-10">
          {chapters.map(([label, link]) => (
            <a
              key={label}
              className="font-mono font-medium block no-underline py-4 px-4 text-center text-white hover:text-white bg-ocean-medium hover:bg-ocean-dark mx-[20vw] md:mx-0"
              href={link}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
