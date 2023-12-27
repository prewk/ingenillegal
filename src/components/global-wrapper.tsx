"use client";

import React from "react";
import { Header } from "./header";
import Hero from "./hero";
import { Footer } from "@/components/footer";
import { Main } from "@/components/main";

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
      <Main className="py-16" dir={dir}>
        {children}
      </Main>
      <Footer />
    </>
  );
}
