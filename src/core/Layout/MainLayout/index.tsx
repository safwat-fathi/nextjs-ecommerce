import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/core/components/Navbar";
import TopBar from "@/core/components/Navbar/TopBar";
import MenuBar from "@/core/components/Navbar/MenuBar";
import Footer from "@/core/components/Footer";
const DynamicToTop = dynamic(() => import("@/core/components/BackToTop"), {
  ssr: false,
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header style={{ display: "unset" }}>
        <TopBar />
        <Navbar />
        <div className="z-10 shadow-lg bg-gray-800 text-gray-200 py-4 sticky top-0">
          <MenuBar />
        </div>
      </header>
      <main>{children}</main>
      {/* the pixel that below it ToTop button is visible */}
      <div id="pixel-to-watch"></div>
      <DynamicToTop />
      <Footer />
    </>
  );
};

export default MainLayout;
