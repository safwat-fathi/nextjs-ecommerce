// import MainLayout from "@/core/Layout/MainLayout"
import Layout from "@/core/Layout";
import { LayoutsENUM } from "@/core/Layout";
import { NextPage } from "next";

const renderWithLayout = <P extends object>(
  Page: NextPage<P>,
  type: LayoutsENUM
) => {
  const WithLayout: NextPage<P> = (props: P) => (
    <Layout type={type}>
      <Page {...props} />
    </Layout>
  );

  return WithLayout;
};

export default renderWithLayout;
