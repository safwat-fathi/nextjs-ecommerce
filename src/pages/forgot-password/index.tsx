import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

type PageProps = {
  name: string;
};

export const getStaticProps: GetStaticProps<PageProps> = async ctx => {
  return {
    props: {
      name: "wwww",
      ...(await serverSideTranslations(ctx.locale!, [
        "common",
        "forgot-password",
      ])),
    },
  };
};

const ForgotPassword: NextPage<PageProps> = props => {
  const { t } = useTranslation("forgot-password");

  return (
    <>
      <NextSeo title="Forgot Password" />

      <h1>{t("title")}</h1>
      <h2>{props.name}</h2>
    </>
  );
};

export default renderWithLayout(ForgotPassword, LayoutsENUM.CLEAN);
