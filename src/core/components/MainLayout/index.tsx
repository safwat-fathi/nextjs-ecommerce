import { ReactNode } from "react";
import LanguageButton from "@/components/LanguageButton";
import dynamic from "next/dynamic";
const DynamicToTop = dynamic(() => import("@/core/components/ToTopButton"), {
  ssr: false,
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
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
