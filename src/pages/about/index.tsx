import Head from "next/head";
import { Test } from "@/components/Test";
import { GetServerSidePropsContext, GetStaticProps } from "next";

type Props = {
  name: string;
};

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  console.log(process.env.TEST);
  console.log(ctx.previewData);

  return {
    props: { name: "wwww" },
  };
};

const About = (props: Props) => {
  return (
    <>
      <h1>About page</h1>
      <h2>{props.name}</h2>
    </>
  );
};

export default About;
