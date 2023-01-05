import React from "react";

export default function Hero({
  appearance,
  title,
  subtitle,
}: {
  appearance: "light" | "dark";
  title: string;
  subtitle: string;
}) {
  return (
    <section
      className="h-[80vh] flex flex-col justify-center"
      style={{
        backgroundImage:
          appearance === "dark"
            ? "url('/imai_banner_grafik.png'), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('/imai_banner_2.jpeg')"
            : "none",
      }}
    >
      <h1
        className={`font-roboto text-3xl md:text-5xl font-black text-center mx-auto max-w-[20ch] mb-8 ${
          appearance === "light" ? "text-carbon" : "text-white"
        }`}
      >
        {title}
      </h1>
      <p
        className={`font-mono text-xl md:text-2xl text-center mx-auto max-w-[56ch] ${
          appearance === "light" ? "text-carbon" : "text-white"
        }`}
      >
        {subtitle}
      </p>
    </section>
  );
}
