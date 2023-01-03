import Logo from "./logo";
import React from "react";

export function Nav({
  menuVisible,
  onClose,
}: {
  menuVisible: boolean;
  onClose: () => void;
}) {
  const chapters: [string, string][] = [
    ["Göteborg", "https://www.ingenillegal.org/goteborg/"],
    ["Östersund", "https://www.ingenillegal.org/ostersund/"],
    ["Stockholm", "https://www.ingenillegal.org/stockholm/"],
    ["Trollhättan", "https://www.ingenillegal.org/trollhattan/"],
    ["Umeå", "https://www.ingenillegal.org/umea/"],
    ["Uppsala", "https://www.ingenillegal.org/uppsala/"],
  ];

  return (
    <nav
      className={`bg-ocean-light inset-0 fixed transition-opacity ${
        menuVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center p-8">
        <a href="https://www.ingenillegal.org/" className="h-14 md:h-24 w-auto">
          <Logo appearance="light" />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          onClick={onClose}
        >
          <path
            className="fill-white"
            d="M6.35 20.025 4 17.65 9.625 12 4 6.35l2.35-2.4L12 9.6l5.65-5.65L20 6.35 14.375 12 20 17.65l-2.35 2.375-5.65-5.65Z"
          />
        </svg>
      </div>
      <div className="flex justify-evenly items-center">
        <ul className="font-roboto text-2xl font-bold">
          <li>
            <a
              className="text-white border border-transparent inline-block my-1 py-1 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
              href="#"
            >
              Är du papperslös?
            </a>
          </li>
          <li>
            <a
              className="text-white border border-transparent inline-block my-1 py-1 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
              href="#"
            >
              Engagera dig
            </a>
          </li>
          <li>
            <a
              className="text-white border border-transparent inline-block my-1 py-1 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
              href="#"
            >
              Ge ett bidrag
            </a>
          </li>
          <li>
            <a
              className="text-white border border-transparent inline-block my-1 py-1 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
              href="#"
            >
              Om oss
            </a>
          </li>
        </ul>
        <ul className="font-mono">
          {chapters.map(([label, link]) => (
            <li key={label}>
              <a
                className="text-white border border-transparent inline-block py-1 border-b border-b-light/0 hover:border-b-light transition-all duration-300"
                href={link}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
