import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500|Roboto:300,400,500,700,900&amp;subset=latin-ext"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-cream text-carbon font-roboto leading-normal">
        <Main />
        <NextScript />
        <div id="fb-root"></div>
      </body>
    </Html>
  );
}
