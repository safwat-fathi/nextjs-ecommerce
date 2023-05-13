import { GetStaticProps, NextPage } from "next";
import MainLayout from "@/core/Layout/MainLayout";
import { NextSeo } from "next-seo";
import Breadcrumbs from "@/core/components/Breadcrumbs";
import useBreadcrumbs from "@/lib/hooks/useBreadcrumbs";
import BreadcrumbItem from "@/core/components/Breadcrumbs/BreadcrumbItem";

type PageProps = {
  name: string;
};

export const getStaticProps: GetStaticProps<PageProps> = async ctx => {
  return {
    props: { name: "wwww" },
  };
};

const About: NextPage<PageProps> = props => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <NextSeo title="About" />
      <MainLayout>
        <Breadcrumbs>
          {/* <BreadcrumbItem isLast={} path="/" label="Home" /> */}
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
        <h1>About page</h1>
        <h2>{props.name}</h2>
      </MainLayout>
    </>
  );
};

export default About;
