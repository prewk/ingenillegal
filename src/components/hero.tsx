"use client";

import React from "react";

export default function Hero({
  appearance,
  bg,
  title,
  subtitle,
}: {
  appearance: "light" | "dark";
  bg?: string;
  title: string;
  subtitle?: string;
}) {
  const bgDeclaration = bg ? `url('${bg}')` : "none";

  return (
    <section
      className="flex flex-col justify-center bg-cover h-[60vh] short:h-[100vh]"
      style={{
        backgroundImage:
          appearance === "dark"
            ? `url('/imai_banner_grafik.png'), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), ${bgDeclaration}`
            : "none",
      }}
    >
      <h1
        className={`text-center mx-auto px-4 md:max-w-[60%] mb-8 ${
          appearance === "light" ? "text-carbon" : "text-white"
        }`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`font-mono text-xl md:text-2xl text-center mx-auto px-4 md:max-w-[75%] ${
            appearance === "light" ? "text-carbon" : "text-white"
          }`}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}
