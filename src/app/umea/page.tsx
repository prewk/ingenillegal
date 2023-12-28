"use client";

import Content from "./content.mdx";
import UmeaWrappper from "@/components/umea-wrapper";
import { FacebookProvider, Page } from "react-facebook";

export default function Umea() {
  return (
    <UmeaWrappper>
      <Content />
      <FacebookProvider appId="?">
        <Page href="https://www.facebook.com/293706290839886" tabs="timeline" />
      </FacebookProvider>
    </UmeaWrappper>
  );
}
