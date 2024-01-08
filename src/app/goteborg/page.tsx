"use client";

import Content from "./content.mdx";
import GoteborgWrapper from "@/components/goteborg-wrapper";
import { FacebookProvider, Page } from "react-facebook";

export default function Goteborg() {
  return (
    <GoteborgWrapper>
      <Content />
      <FacebookProvider appId="?">
        <div className="flex justify-center">
          <Page
            href="https://www.facebook.com/183182731797012"
            tabs="timeline"
          />
        </div>
      </FacebookProvider>
    </GoteborgWrapper>
  );
}
