import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import CategoriesWrapper from "@/components/Categories";
import Breadcrumbs from "@/core/components/Breadcrumbs";
import Typography from "@/core/components/Typography";
import BreadcrumbItem from "@/core/components/Breadcrumbs/BreadcrumbItem";
import Section from "@/core/components/Section";

import useBreadcrumbs from "@/lib/hooks/useBreadcrumbs";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";

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
      <Section>
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

      <Section>
        <Typography size="xl">{t("title")}</Typography>
      </Section>

      <Section>
        <CategoriesWrapper initialData={[]} />
      </Section>
    </>
  );
};

export default renderWithLayout(Categories, LayoutsENUM.MAIN);
