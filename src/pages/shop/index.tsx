import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";

import renderWithLayout from "@/core/HOC/WithLayout";
import Typography from "@/core/components/Typography";
import Section from "@/core/components/Section";
import { LayoutsENUM } from "@/core/Layout";

import Filters from "@/components/Filters";
import { ProductsProvider } from "@/lib/contexts/products.context";
import Products from "@/components/Products";

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "shop"])),
    },
  };
};

const Shop: NextPage<any> = () => {
  const { t } = useTranslation("shop");

  return (
    <>
      <NextSeo title={t("title") as string} />

      <Section>
        <Typography size="xl">{t("title")}</Typography>
      </Section>

      <Section>
        <ProductsProvider>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
            <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
              <Filters />
            </div>
            <div className="col-span-3">
              <Products />
            </div>
          </div>
        </ProductsProvider>
      </Section>
    </>
  );
};

export default renderWithLayout(Shop, LayoutsENUM.MAIN);
