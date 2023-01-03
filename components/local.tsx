import React from "react";

export default function Local() {
  const chapters: [string, string][] = [
    ["Göteborg", "https://www.ingenillegal.org/goteborg/"],
    ["Östersund", "https://www.ingenillegal.org/ostersund/"],
    ["Stockholm", "https://www.ingenillegal.org/stockholm/"],
    ["Trollhättan", "https://www.ingenillegal.org/trollhattan/"],
    ["Umeå", "https://www.ingenillegal.org/umea/"],
    ["Uppsala", "https://www.ingenillegal.org/uppsala/"],
  ];

  return (
    <section className="bg-ocean-light">
      <div className="grid grid-cols-1 md:grid-cols-2 relative max-w-[1010px] px-5 mx-auto">
        <div>
          <img
            src="/pekar.png"
            className="relative md:absolute -top-10 left-0 h-auto md:h-[380px] w-full md:w-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 pb-5 md:py-20">
          {chapters.map(([label, link]) => (
            <a
              key={label}
              className="font-mono font-medium block no-underline py-4 px-4 text-center text-white bg-ocean-medium mx-[20vw] md:mx-0"
              href={link}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
