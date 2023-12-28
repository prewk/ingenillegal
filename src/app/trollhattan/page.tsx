"use client";

import Content from "./content.mdx";
import TrollhattanWrapper from "@/components/trollhattan-wrapper";
import { FacebookProvider, Page } from "react-facebook";

export default function Trollhattan() {
  return (
    <TrollhattanWrapper>
      <Content />
      <FacebookProvider appId="?">
        <Page href="https://www.facebook.com/710696319027280" tabs="timeline" />
      </FacebookProvider>
    </TrollhattanWrapper>
  );
}
