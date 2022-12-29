import React from "react";

export function Footer() {
  const languages: [string, string][] = [
    ["English", "#"],
    ["Bosanski Hrvatski Srpski", "#"],
    ["Español", "#"],
    ["Deutsch", "#"],
    ["ትግርኛ", "#"],
    ["كوردی", "#"],
    ["فارسی", "#"],
    ["Русский", "#"],
    ["Türkçe", "#"],
    ["Français", "#"],
  ];

  return (
    <footer
      className="bg-cover bg-center p-12 mt-0 flex flex-col items-center"
      style={{ backgroundImage: "url(/fot.jpeg)" }}
    >
      <img
        src="/fot_sprak.svg"
        alt=""
        className="align-middle border-none mb-8 w-12 max-w-full h-auto"
      />
      <div className="max-w-[700px] flex flex-wrap justify-center mb-6">
        {languages.map(([label, link]) => (
          <a
            key={label}
            className="border border-transparent font-normal text-lg font-mono text-light mx-6 my-2 whitespace-nowrap border-b border-b-light/0 hover:border-b-light transition-all duration-300"
            href={link}
          >
            {label}
          </a>
        ))}
      </div>
      <a
        className="block font-mono text-discreet text-xs hover:underline"
        href="https://login.one.com/mail"
      >
        Webmail
      </a>
    </footer>
  );
}
