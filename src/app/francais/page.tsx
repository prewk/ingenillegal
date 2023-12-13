"use client";
import Content from "./content.mdx";
import React from "react";
import { GlobalWrapper } from "@/components/global-wrapper";

export default function Page() {
  return (
    <GlobalWrapper
      appearance="light"
      title="Français"
      subtitle="Bienvenue sur la page pour nous qui disons que tout le monde a le droit de circuler librement et de s’établir n’importe où dans le monde."
    >
      <Content />
    </GlobalWrapper>
  );
}
