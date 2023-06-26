import "@/styles/globals.scss";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { AuthProvider } from "@/lib/contexts/auth.context";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import HttpClient from "@/core/lib/http-client";

const httpClient = new HttpClient();

const fetcher = async (url: string) => {
  try {
    const response = await httpClient.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const locale = router.locale as "en" | "ar";
    const dir = locale === "ar" ? "rtl" : "ltr";

    const html = document.querySelector("html") as HTMLElement;
    html.setAttribute("dir", dir);
  }, [router.locale]);

  return (
    // <SSRProvider>
    <>
      <DefaultSeo {...SEO} />
      <ToastContainer />
      <SWRConfig value={{ fetcher: fetcher }}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SWRConfig>
    </>
  );
}

export default appWithTranslation(App);
