import { ReactNode } from "react";
import LanguageButton from "@/components/LanguageButton";
import dynamic from "next/dynamic";
import Link from "next/link";
const DynamicToTop = dynamic(() => import("@/core/components/ToTopButton"), {
  ssr: false,
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex items-center gap-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <LanguageButton />
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      {/* the pixel that below it ToTop button is visible */}
      <div id="pixel-to-watch"></div>
      <DynamicToTop />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default MainLayout;
