import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";

import renderWithLayout from "@/core/HOC/WithLayout";
import Typography from "@/core/components/Typography";
import Section from "@/core/components/Section";
import { LayoutsENUM } from "@/core/Layout";

import Filters from "@/components/Filters";
import { ProductsProvider } from "@/lib/contexts/products.context";
import Products from "@/components/Products";
import HttpClient from "@/core/lib/http-client";
import { ROUTES } from "@/routes";
import { getCookie } from "cookies-next";
import CONSTANTS from "@/constants";
// import axios from "axios";

const httpClient = new HttpClient();

export const getServerSideProps: GetServerSideProps<any> = async ctx => {
  const { locale } = ctx;

  try {
    const products = await httpClient.get(ROUTES.products.index, {
      params: { page: 1 },
    });

    return {
      props: {
        ...(await serverSideTranslations(locale!, ["common", "shop"])),
        products,
      },
    };
  } catch (error: any) {
    // console.log("🚀 ~ error:", error);

    const statusCode = error?.response?.status === 404 ? 404 : 500;
    // const errMsg = encodeURIComponent(error?.message);
    // const errMsg = error?.response?.statusText;
    // const errMsg = encodeURIComponent(error?.response?.data);
    // console.log("🚀 ~ errMsg:", errMsg);

    return {
      redirect: {
        // destination: `/${statusCode}?error=${errMsg}`,
        destination: `/${statusCode}`,
        permanent: false,
      },
    };
  }
};

const Shop: NextPage<{ products: any }> = ({ products }) => {
  const { t } = useTranslation("shop");

  return (
    <>
      <NextSeo title={t("title") as string} />

      <Section>
        <Typography size="xl">{t("title")}</Typography>
      </Section>

      <Section>
        <ProductsProvider initialData={products}>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
            <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
              <Filters />
            </div>
            <div className="relative col-span-3">
              <Products />
            </div>
          </div>
        </ProductsProvider>
      </Section>
    </>
  );
};

export default renderWithLayout(Shop, LayoutsENUM.MAIN);
