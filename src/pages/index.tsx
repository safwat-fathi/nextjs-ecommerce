import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Inter } from "next/font/google";
import { Test } from "@/components/Test";
import { GetStaticPropsContext, NextPage } from "next";
import MainLayout from "@/core/components/MainLayout";
import { NextSeo } from "next-seo";
import { useContext } from "react";
import { AuthContext } from "@/lib/contexts/auth.context";
import Breadcrumbs from "@/core/components/Breadcrumbs";
import useBreadcrumbs from "@/lib/hooks/useBreadcrumbs";
import BreadcrumbItem from "@/core/components/Breadcrumbs/BreadcrumbItem";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "home"])),
    },
  };
}

const Home: NextPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <NextSeo title="Home" />
      <MainLayout>
        <div className="h-[200rem]">
          <Breadcrumbs>
            {/* <BreadcrumbItem path="/" label="Home" /> */}
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
          <hr />
          <h1>Home</h1>
          <hr />
          <Test />
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
