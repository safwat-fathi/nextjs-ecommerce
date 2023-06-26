import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import Hero from "@/core/components/Hero";
import { HomeProps } from "./meta/i-home";
import DataView from "@/core/components/DataView";
import useSWR from "swr";

// const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const categories = [
    {
      id: 0,
      name: "Category 1",
      description: "Category 1 description",
    },
    {
      id: 1,
      name: "Category 2",
      description: "Category 2 description",
    },
    {
      id: 2,
      name: "Category 3",
      description: "Category 3 description",
    },
  ];

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "home"])),
      categories,
    },
  };
};
import HttpClient from "@/core/lib/http-client";

const Home: NextPage<HomeProps> = ({ categories }) => {
  // const { t } = useTranslation("home");
  // const { isAuthenticated, user } = useAuth();
  // const breadcrumbs = useBreadcrumbs();
  const [page, setPage] = useState(0);

  const { data, error, isLoading } = useSWR(
    // `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`
    // `https://official-joke-api.appspot.com/jokes/programming/ten`
    "/random_joke"
  );
  console.log("🚀 ~ data:", data);
  console.log("🚀 ~ error:", error);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <NextSeo title="Home" />
      <div className="h-[200rem]">
        {/* <Breadcrumbs>
          {breadcrumbs &&
            breadcrumbs.map(breadcrumb => (
              <BreadcrumbItem
                key={breadcrumb.path}
                path={breadcrumb.path}
                isLast={breadcrumb.isLast}
                label={breadcrumb.label}
              />
            ))}
        </Breadcrumbs> */}
        <hr />
        <Hero />
        {/* <DataView
          items={data.data.results}
          page={page}
          setPage={setPage}
          count={data.data.count}
        /> */}
        {/* <h1>{t("title")}</h1> */}
        {/* <Test /> */}
      </div>
    </>
  );
};

export default renderWithLayout(Home, LayoutsENUM.MAIN);
