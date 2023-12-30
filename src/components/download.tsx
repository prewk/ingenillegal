"use client";

import React from "react";

export function Download({
  label,
  url,
  button,
}: {
  label: string;
  url: string;
  button: string;
}) {
  return (
    <a href={url} className="block my-4 no-underline" download>
      <span className="text-lg md:text-p text-ocean-light hover:text-ocean-medium transition-colors underline">
        {label}
      </span>{" "}
      <span className="ml-2 rounded-2xl bg-carbon hover:bg-carbon/80 transition-colors text-white text-xs px-4 py-2">
        {button}
      </span>
    </a>
  );
}
