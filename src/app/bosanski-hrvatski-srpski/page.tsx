"use client";
import Content from "./content.mdx";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React from "react";

export default function Page() {
  return (
    <>
      <Header appearance="dark" />
      <main className="mx-auto px-4 md:max-w-[75%] mt-40">
        <Content />
      </main>
      <Footer />
    </>
  );
}
