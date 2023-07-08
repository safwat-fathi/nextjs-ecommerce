import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";

import ProductCard from "@/components/ProductCard";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import Banner from "@/core/components/Banner";
import Categories from "@/components/Categories";
import Typography from "@/core/components/Typography";
import Section from "@/core/components/Section";

import { HomeProps } from "./meta/i-home";

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const categories = [
    {
      id: 0,
      name: "Category 1",
      url: "Category 1 description",
    },
    {
      id: 1,
      name: "Category 2",
      url: "Category 2 description",
    },
    {
      id: 2,
      name: "Category 3",
      url: "Category 3 description",
    },
  ];

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["home"])),
      categories,
    },
  };
};

const Home: NextPage<HomeProps> = ({ categories }) => {
  const { t } = useTranslation("home");
  // const { isAuthenticated, user } = useAuth();

  return (
    <>
      <NextSeo title={t("title") as string} />

      <Section centered={false} role="banner">
        <Banner />
      </Section>

      <Section>
        <div className="py-16">
          <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <Image
                width={50}
                height={50}
                src="assets/images/icons/delivery-van.svg"
                alt="Delivery"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-medium capitalize text-lg">
                  Free Shipping
                </h4>
                <p className="text-gray-500 text-sm">Order over $200</p>
              </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <Image
                width={50}
                height={50}
                src="assets/images/icons/money-back.svg"
                alt="Money Back"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
                <p className="text-gray-500 text-sm">30 days money returs</p>
              </div>
            </div>
            <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
              <Image
                width={50}
                height={50}
                src="assets/images/icons/service-hours.svg"
                alt="Service Hrs"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                <p className="text-gray-500 text-sm">Customer support</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Typography size="xl" variant="primary" className="uppercase font-bold">
          shop by category
        </Typography>
        <Categories initialData={categories} />
      </Section>

      <Section>
        <Typography size="xl" variant="primary" className="uppercase font-bold">
          top new arrival
        </Typography>
        <ProductCard />
      </Section>

      <Section>
        <Typography size="xl">{t("title")}</Typography>
      </Section>

      {/* <Test /> */}
    </>
  );
};

export default renderWithLayout(Home, LayoutsENUM.MAIN);
