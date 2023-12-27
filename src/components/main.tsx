"use client";

import { ReactNode } from "react";

export function Main({
  children,
  dir,
  className,
}: {
  children: ReactNode;
  dir?: string;
  className?: string;
}) {
  return (
    <main className={`relative z-0 ${className ?? ""}`} dir={dir}>
      {children}
    </main>
  );
}
