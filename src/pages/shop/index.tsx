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
