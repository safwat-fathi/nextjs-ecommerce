import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import Hero from "@/core/components/Hero";
import Categories from "@/core/components/Category";
import { HomeProps } from "./meta/i-home";

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

const Home: NextPage<HomeProps> = ({ categories }) => {
  // const { t } = useTranslation("home");
  // const { isAuthenticated, user } = useAuth();
  // const breadcrumbs = useBreadcrumbs();

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
        <Categories categories={categories} />
        {/* <h1>{t("title")}</h1> */}
        {/* <Test /> */}
      </div>
    </>
  );
};

export default renderWithLayout(Home, LayoutsENUM.MAIN);
