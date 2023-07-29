import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";

import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import Section from "@/core/components/Section";
import TextInput from "@/core/components/Inputs/TextInput";
import DateInput from "@/core/components/Inputs/DateInput";
import SelectInput from "@/core/components/Inputs/SelectInput";
import Button from "@/core/components/Button";

type PageProps = {
  name: string;
};

export const getStaticProps: GetStaticProps<PageProps> = async ctx => {
  return {
    props: {
      name: "wwww",
      ...(await serverSideTranslations(ctx.locale!, ["common", "profile"])),
    },
  };
};

const Addresses: NextPage<PageProps> = () => {
  const { t } = useTranslation("profile");

  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <NextSeo title={t("title") as string} />

      <Section>
        <h4 className="text-lg font-medium capitalize mb-4">Addresses</h4>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <TextInput name="first" id="first" label="First name" />
              </div>
              <div>
                <TextInput name="last" id="last" label="Last name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <DateInput
                  name="birthDate"
                  id="birthDate"
                  label="Date of birth"
                />
              </div>
              <div>
                <SelectInput
                  name="gender"
                  options={[
                    { label: "male", value: 1 },
                    { label: "female", value: 2 },
                  ]}
                  label="Gender"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <TextInput name="email" id="email" label="Email Address" />
              </div>
              <div>
                <TextInput name="phone" id="phone" label="Phone number" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Button size="lg">save changes</Button>
          </div>
        </form>
      </Section>
    </FormProvider>
  );
};

export default renderWithLayout(Addresses, LayoutsENUM.PROFILE);
