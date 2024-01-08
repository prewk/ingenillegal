"use client";

import Content from "./content.mdx";
import StockholmWrapper from "@/components/stockholm-wrapper";
import { FacebookProvider, Page } from "react-facebook";

export default function Stockholm() {
  return (
    <StockholmWrapper>
      <Content />
      <FacebookProvider appId="?">
        <div className="flex justify-center">
          <Page
            href="https://www.facebook.com/124647770935985"
            tabs="timeline"
          />
        </div>
      </FacebookProvider>
    </StockholmWrapper>
  );
}
