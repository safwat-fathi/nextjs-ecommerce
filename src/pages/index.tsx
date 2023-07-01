import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import useSWR from "swr";

import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import Hero from "@/core/components/Hero";
import { HomeProps } from "./meta/i-home";
import DataView from "@/core/components/DataView";
import { fetcher } from "@/core/lib/data-fetcher";
import GridView from "@/core/components/DataView/GridView";
import ListView from "@/core/components/DataView/ListView";
import Skeleton from "@/core/components/Skeleton";

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
      ...(await serverSideTranslations(locale!, ["common", "home"])),
      categories,
    },
  };
};

const Home: NextPage<HomeProps> = ({ categories }) => {
  // const { t } = useTranslation("home");
  // const { isAuthenticated, user } = useAuth();
  // const breadcrumbs = useBreadcrumbs();
  const [page, setPage] = useState(0);
  const [isGrid, setIsGrid] = useState(true);

  {
    /* `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10` 
	`https://official-joke-api.appspot.com/jokes/programming/ten` */
  }
  const { data, error, isLoading } = useSWR<any>(
    [`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`, page],
    fetcher,
    {
      fallbackData: categories,
    }
  );

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
        <DataView
          error={error}
          isLoading={isLoading}
          page={page}
          setPage={setPage}
          isGrid={isGrid}
          setIsGrid={setIsGrid}
        >
          {isGrid ? (
            <GridView>
              {data?.results?.map((item: any) => (
                <div
                  key={item.name}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-lg font-semibold">{item.url}</p>
                </div>
              ))}
            </GridView>
          ) : (
            <ListView>
              {data?.results?.map((item: any) => (
                <li key={item.name} className="border-b py-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-lg font-semibold">{item.url}</p>
                </li>
              ))}
            </ListView>
          )}
        </DataView>
        {/* <h1>{t("title")}</h1> */}
        {/* <Test /> */}
      </div>
    </>
  );
};

export default renderWithLayout(Home, LayoutsENUM.MAIN);
