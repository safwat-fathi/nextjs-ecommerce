import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Inter } from "next/font/google";
import { Test } from "@/components/Test";
import { GetStaticPropsContext } from "next";
import MainLayout from "@/core/components/MainLayout";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "home"])),
    },
  };
}

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <MainLayout>
        <div className="h-[200rem]">
          <h1>Home</h1>
          <Test />
        </div>
      </MainLayout>
    </>
  );
}
