import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Inter } from "next/font/google";
import { Test } from "@/components/Test";
import { GetStaticPropsContext } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Test />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "home"])),
    },
  };
}
