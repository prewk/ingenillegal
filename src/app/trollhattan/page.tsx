"use client";

import Content from "./content.mdx";
import TrollhattanWrapper from "@/components/trollhattan-wrapper";
import { FacebookProvider, Page } from "react-facebook";

export default function Trollhattan() {
  return (
    <TrollhattanWrapper>
      <Content />
      <FacebookProvider appId="?">
        <div className="flex justify-center">
          <Page
            href="https://www.facebook.com/710696319027280"
            tabs="timeline"
          />
        </div>
      </FacebookProvider>
    </TrollhattanWrapper>
  );
}
