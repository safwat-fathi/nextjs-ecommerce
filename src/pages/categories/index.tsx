import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Breadcrumbs from "@/core/components/Breadcrumbs";
import useBreadcrumbs from "@/lib/hooks/useBreadcrumbs";
import BreadcrumbItem from "@/core/components/Breadcrumbs/BreadcrumbItem";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

type PageProps = {
  name: string;
};

export const getStaticProps: GetStaticProps<PageProps> = async ctx => {
  return {
    props: {
      name: "Hiiiiiiiiiii",
      ...(await serverSideTranslations(ctx.locale!, ["common", "categories"])),
    },
  };
};

const Categories: NextPage<PageProps> = props => {
  const { t } = useTranslation("categories");
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <NextSeo title="Categories" />
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
      <h1>{t("title")}</h1>
      <h2>{props.name}</h2>
    </>
  );
};

export default renderWithLayout(Categories, LayoutsENUM.MAIN);
