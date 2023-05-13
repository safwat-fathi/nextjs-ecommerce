import { ReactNode } from "react";
import Head from "next/head";

const ErrorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Title | Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default ErrorLayout;
