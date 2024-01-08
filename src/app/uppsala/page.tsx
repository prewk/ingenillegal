"use client";

import Content from "./content.mdx";
import UppsalaWrapper from "@/components/uppsala-wrapper";
import { FacebookProvider, Page } from "react-facebook";

export default function Uppsala() {
  return (
    <UppsalaWrapper>
      <Content />
      <FacebookProvider appId="?">
        <div className="flex justify-center">
          <Page
            href="https://www.facebook.com/1693535317559340"
            tabs="timeline"
          />
        </div>
      </FacebookProvider>
    </UppsalaWrapper>
  );
}
