'use client';

import Logo from "./logo";
import React from "react";

export function Modal({
  visible,
  onClose,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`z-10 bg-ocean-light inset-0 fixed transition-opacity ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center p-8">
        <a href="/public" className="h-14 md:h-24 w-auto">
          <Logo appearance="light" />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          className="cursor-pointer"
          onClick={onClose}
        >
          <path
            className="fill-white"
            d="M6.35 20.025 4 17.65 9.625 12 4 6.35l2.35-2.4L12 9.6l5.65-5.65L20 6.35 14.375 12 20 17.65l-2.35 2.375-5.65-5.65Z"
          />
        </svg>
      </div>
      {children}
    </div>
  );
}
