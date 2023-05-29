import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Inter } from "next/font/google";
import { Test } from "@/components/Test";
import { GetStaticPropsContext, NextPage } from "next";
import { NextSeo } from "next-seo";
// import { useAuth } from "@/lib/contexts/auth.context";
import Breadcrumbs from "@/core/components/Breadcrumbs";
import useBreadcrumbs from "@/lib/hooks/useBreadcrumbs";
import BreadcrumbItem from "@/core/components/Breadcrumbs/BreadcrumbItem";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import { useTranslation } from "react-i18next";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "home"])),
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  // const { isAuthenticated, user } = useAuth();
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <NextSeo title="Home" />
      <div className="h-[200rem]">
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
        <hr />
        {/* <h1>{t("title")}</h1> */}
        <hr />
        <Test />
      </div>
    </>
  );
};

export default renderWithLayout(Home, LayoutsENUM.MAIN);
