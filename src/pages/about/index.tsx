import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Modal from "@/core/components/Modal";
import { useState } from "react";

type PageProps = {
  name: string;
};

export const getStaticProps: GetStaticProps<PageProps> = async ctx => {
  return {
    props: {
      name: "wwww",
      ...(await serverSideTranslations(ctx.locale!, ["common", "about"])),
    },
  };
};

const About: NextPage<PageProps> = props => {
  // use state boolean
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("about");

  return (
    <>
      <NextSeo title="About" />

      <h1>{t("title")}</h1>
      <h2>{props.name}</h2>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal
        isStatic={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Tessssssst"
      />
    </>
  );
};

export default renderWithLayout(About, LayoutsENUM.MAIN);
