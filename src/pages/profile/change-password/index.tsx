import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FormProvider, useForm } from "react-hook-form";

import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import { useTranslation } from "next-i18next";
import Section from "@/core/components/Section";
import Button from "@/core/components/Button";
import TextInput from "@/core/components/Inputs/TextInput";

type PageProps = {
  name: string;
  resetToken: string | null;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ctx => {
  const { query } = ctx;
  const { resetToken } = query;

  return {
    props: {
      name: "wwww",
      resetToken: resetToken ? (resetToken as string) : null,
      ...(await serverSideTranslations(ctx.locale!, ["common", "profile"])),
    },
  };
};

const ChangePassword: NextPage<PageProps> = ({ resetToken }) => {
  console.log("🚀 ~ resetToken:", resetToken);
  const { t } = useTranslation("profile");

  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <NextSeo title={t("title") as string} />

      <FormProvider {...methods}>
        <Section>
          <h4 className="text-lg font-medium capitalize mb-4">
            change password
          </h4>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <TextInput
                    name="oldPassword"
                    id="oldPassword"
                    label="Old password"
                  />
                </div>
                <div>
                  <TextInput name="password" id="password" label="Password" />
                </div>
                <div>
                  <TextInput
                    name="confirmPassword"
                    id="confirmPassword"
                    label="Confirm password"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Button>save changes</Button>
              </div>
            </div>
          </form>
        </Section>
      </FormProvider>
    </>
  );
};

export default renderWithLayout(ChangePassword, LayoutsENUM.PROFILE);
