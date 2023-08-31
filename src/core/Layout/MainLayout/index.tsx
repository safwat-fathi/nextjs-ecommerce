import { ReactNode } from "react";
import dynamic from "next/dynamic";

import BreadcrumbItem from "@/core/components/Breadcrumbs/BreadcrumbItem";
import Breadcrumbs from "@/core/components/Breadcrumbs";
import Spinner from "@/core/components/Spinner";
// import Navbar from "@/core/components/Navbar";
const DynamicNavbar = dynamic(() => import("@/core/components/Navbar"), {
  ssr: false,
  loading: () => (
    <Spinner className="h-12 p-2" color="#000" fontSize={30} height={30} />
  ),
});
import TopBar from "@/core/components/Navbar/TopBar";
import MenuBar from "@/core/components/Navbar/MenuBar";
import Footer from "@/core/components/Footer";
import Section from "@/core/components/Section";
const DynamicToTop = dynamic(() => import("@/core/components/BackToTop"), {
  ssr: false,
});

import useBreadcrumbs from "@/core/hooks/useBreadcrumbs";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { breadcrumbs, isHome } = useBreadcrumbs();

  return (
    <>
      <header style={{ display: "unset" }}>
        <TopBar />
        {/* <Navbar /> */}
        <DynamicNavbar />
        <div className="z-10 shadow-lg bg-gray-800 text-gray-200 sticky top-0">
          <MenuBar />
        </div>
      </header>

      {!isHome && (
        <Section className="mb-0">
          <Breadcrumbs>
            {breadcrumbs &&
              breadcrumbs.map(breadcrumb => (
                <BreadcrumbItem
                  key={breadcrumb.path}
                  path={breadcrumb.path}
                  isLast={breadcrumb.isLast}
                  label={breadcrumb.label}
                />
              ))}
          </Breadcrumbs>
        </Section>
      )}

      <main>{children}</main>
      {/* the pixel that below it ToTop button is visible */}
      <div id="pixel-to-watch"></div>
      <DynamicToTop />
      <Footer />
    </>
  );
};

export default MainLayout;
