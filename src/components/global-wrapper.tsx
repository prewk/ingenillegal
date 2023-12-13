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
}: {
  appearance: "dark" | "light";
  title: string;
  subtitle?: string;
  bg?: string;
  children: React.ReactNode;
  dir?: string;
}) {
  return (
    <>
      <Header appearance={appearance == "dark" ? "light" : "dark"} />
      <Hero appearance={appearance} title={title} subtitle={subtitle} bg={bg} />
      <section className="mx-auto my-24 max-w-[650px]" dir={dir}>
        {children}
      </section>
      <Footer />
    </>
  );
}
