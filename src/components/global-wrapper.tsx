"use client";

import React from "react";
import { Header } from "./header";
import Hero from "./hero";
import { Footer } from "@/components/footer";

export function GlobalWrapper({
  appearance,
  title,
  subtitle,
  bg,
  children,
  dir,
  high,
}: {
  appearance: "dark" | "light";
  title: string;
  subtitle?: string;
  bg?: string;
  children: React.ReactNode;
  dir?: string;
  high?: boolean;
}) {
  return (
    <>
      <Header appearance={appearance == "dark" ? "light" : "dark"} />
      <Hero
        appearance={appearance}
        title={title}
        subtitle={subtitle}
        bg={bg}
        high={high}
      />
      <section className="mx-auto max-w-[1000px] my-24" dir={dir}>
        {children}
      </section>
      <Footer />
    </>
  );
}
