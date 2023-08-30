import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";

import Section from "@/core/components/Section";
import { getCookie } from "cookies-next";
import CONSTANTS from "@/constants";

type PageProps = {
  name: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ctx => {
  const { req, res } = ctx;

  const token = getCookie(CONSTANTS.ACCESS_TOKEN, { req, res });

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      name: "wwww",
      ...(await serverSideTranslations(ctx.locale!, ["common", "profile"])),
    },
  };
};

const Profile: NextPage<PageProps> = () => {
  const { t } = useTranslation("profile");

  return (
    <>
      <NextSeo title={t("title") as string} />

      <Section>
        <div className="grid grid-cols-3 gap-4">
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Personal Profile
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">John Doe</h4>
              <p className="text-gray-800">example@mail.com</p>
              <p className="text-gray-800">0811 8877 988</p>
            </div>
          </div>

          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Shipping address
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">John Doe</h4>
              <p className="text-gray-800">Medan, North Sumatera</p>
              <p className="text-gray-800">20371</p>
              <p className="text-gray-800">0811 8877 988</p>
            </div>
          </div>

          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Billing address
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">John Doe</h4>
              <p className="text-gray-800">Medan, North Sumatera</p>
              <p className="text-gray-800">20317</p>
              <p className="text-gray-800">0811 8877 988</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default renderWithLayout(Profile, LayoutsENUM.PROFILE);
