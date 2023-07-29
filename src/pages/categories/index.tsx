import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import CategoriesWrapper from "@/components/Categories";
import Typography from "@/core/components/Typography";
import Section from "@/core/components/Section";

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

  return (
    <>
      <NextSeo title="Categories" />

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
