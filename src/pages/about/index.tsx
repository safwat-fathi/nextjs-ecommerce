import { GetStaticProps } from "next";
import MainLayout from "@/core/components/MainLayout";
import { NextSeo } from "next-seo";

type Props = {
  name: string;
};

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  return {
    props: { name: "wwww" },
  };
};

const About = (props: Props) => {
  return (
    <>
      <NextSeo title="About" />
      <MainLayout>
        <h1>About page</h1>
        <h2>{props.name}</h2>
      </MainLayout>
    </>
  );
};

export default About;
