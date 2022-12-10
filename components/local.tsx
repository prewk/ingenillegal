import React from "react";

export default function Local() {
  return (
    <div className="py-0 px-4">
      <div className="my-0 mx-auto max-w-[1010px] pb-8 xs:flex xs:items-center 2md:mx-[199px]">
        <img
          src="/pekar.png"
          className="w-full h-auto -mt-16 mb-4 xs:w-[55%] xs:-mt-8 xs:mb-0 2md:-mt-16"
        />
        <div className="xs:w-[45%] grid grid-cols-1 xs:grid-cols-2 gap-1.5 2md:mt-4">
          <a
            className="text-local xs:text-2sm 2md:text-local font-mono font-medium block no-underline py-[0.8em] px-4 text-center text-white bg-ocean-medium"
            href="https://www.ingenillegal.org/goteborg/"
          >
            Göteborg
          </a>
          <a
            className="text-local xs:text-2sm 2md:text-local font-mono font-medium block no-underline py-[0.8em] px-4 text-center text-white bg-ocean-medium"
            href="https://www.ingenillegal.org/ostersund/"
          >
            Östersund
          </a>
          <a
            className="text-local xs:text-2sm 2md:text-local font-mono font-medium block no-underline py-[0.8em] px-4 text-center text-white bg-ocean-medium"
            href="https://www.ingenillegal.org/stockholm/"
          >
            Stockholm
          </a>
          <a
            className="text-local xs:text-2sm 2md:text-local font-mono font-medium block no-underline py-[0.8em] px-4 text-center text-white bg-ocean-medium"
            href="https://www.ingenillegal.org/trollhattan-vanersborg/"
          >
            Trollhättan
          </a>
          <a
            className="text-local xs:text-2sm 2md:text-local font-mono font-medium block no-underline py-[0.8em] px-4 text-center text-white bg-ocean-medium"
            href="https://www.ingenillegal.org/umea/"
          >
            Umeå
          </a>
          <a
            className="text-local xs:text-2sm 2md:text-local font-mono font-medium block no-underline py-[0.8em] px-4 text-center text-white bg-ocean-medium"
            href="https://www.ingenillegal.org/uppsala/"
          >
            Uppsala
          </a>
        </div>
      </div>
    </div>
  );
}
