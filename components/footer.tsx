export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center p-12 text-center mt-0"
      style={{ backgroundImage: "url(/fot.jpeg)" }}
    >
      <div className="mx-auto px-[15px] w-full xs:max-w-[540px] 2md:max-w-[960px]">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="relative w-full px-[15px] max-w-full grow basis-0">
            <img
              src="/fot_sprak.svg"
              alt=""
              className="align-middle border-none mb-8 w-12 max-w-full h-auto inline"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-[15px]">
          <div className="relative w-full px-[15px] max-w-full grow basis-0">
            <div>
              <ul className="list-none p-0 2md:my-0 2md:mx-24">
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/english/"
                  >
                    English
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/bosanski-hrvatski-srpski/"
                  >
                    Bosanski Hrvatski Srpski
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/espanol/"
                  >
                    Español
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/deutsch/"
                  >
                    Deutsch
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/%e1%89%b5%e1%8c%8d%e1%88%ad%e1%8a%9b/"
                  >
                    ትግርኛ
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/%d9%83%d9%88%d8%b1%d8%af%db%8c/"
                  >
                    كوردی
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/%d9%81%d8%a7%d8%b1%d8%b3%db%8c/"
                  >
                    فارسی
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/%d0%a0%d1%83%d1%81%d1%81%d0%ba%d0%b8%d0%b9/"
                  >
                    Русский
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/turkce/"
                  >
                    Türkçe
                  </a>
                </li>
                <li className="inline-block m-2 md:m-[0.7rem] 2md:my-[0.7rem] 2md:mx-[1.5rem]">
                  <a
                    className="border border-transparent font-normal text-lg font-mono text-light"
                    href="https://www.ingenillegal.org/francais/"
                  >
                    Français
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a
        className="block mt-8 text-xs font-normal font-mono text-discreet"
        href="https://login.one.com/mail"
      >
        Webmail
      </a>
    </footer>
  );
}
