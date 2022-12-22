import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr" className="scroll-smooth">
      <Head />
      <body className="antialiased bg-body text-body font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
