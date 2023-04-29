import { ReactNode } from "react";
import Head from "next/head";
import LanguageButton from "@/components/LanguageButton";
import dynamic from "next/dynamic";
const DynamicToTop = dynamic(() => import("@/core/components/ToTopButton"), {
  ssr: false,
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <header>
        <nav>
          <ul>
            <li>Nav link 1</li>
            <li>Nav link 2</li>
            <li>Nav link 2</li>
            <li>
              <LanguageButton />
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <div id="pixel-to-watch"></div>
      <DynamicToTop />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default MainLayout;
