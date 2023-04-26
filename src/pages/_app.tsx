import "@/styles/globals.css";
import Layout from "@/core/components/Layout";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
