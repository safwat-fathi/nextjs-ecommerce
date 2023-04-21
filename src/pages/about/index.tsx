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
      <Head>
        <title>About page</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About page</h1>
        <h2>{props.name}</h2>
      </main>
    </>
  );
};

export default About;
