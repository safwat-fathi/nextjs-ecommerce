import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/core/components/Navbar";
import TopBar from "@/core/components/Navbar/TopBar";
import MenuBar from "@/core/components/Navbar/MenuBar";
const DynamicToTop = dynamic(() => import("@/core/components/BackToTop"), {
  ssr: false,
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header style={{ display: "unset" }}>
        <TopBar />
        <Navbar />
        <div className="sticky top-0">
          <MenuBar />
        </div>
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
