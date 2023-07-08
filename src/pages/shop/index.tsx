import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";

import renderWithLayout from "@/core/HOC/WithLayout";
import Breadcrumbs from "@/core/components/Breadcrumbs";
import BreadcrumbItem from "@/core/components/Breadcrumbs/BreadcrumbItem";
import Typography from "@/core/components/Typography";
import Section from "@/core/components/Section";
import { LayoutsENUM } from "@/core/Layout";

import useBreadcrumbs from "@/lib/hooks/useBreadcrumbs";

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["shop"])),
    },
  };
};

const Shop: NextPage<any> = () => {
  const { t } = useTranslation("shop");
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <NextSeo title={t("title") as string} />

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
    </>
  );
};

export default renderWithLayout(Shop, LayoutsENUM.MAIN);
