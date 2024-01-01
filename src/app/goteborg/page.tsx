"use client";

import Content from "./content.mdx";
import GoteborgWrapper from "@/components/goteborg-wrapper";
import { FacebookProvider, Page } from "react-facebook";

export default function Goteborg() {
  return (
    <GoteborgWrapper>
      <Content />
      <FacebookProvider appId="?">
        <Page href="https://www.facebook.com/183182731797012" tabs="timeline" />
      </FacebookProvider>
    </GoteborgWrapper>
  );
}
