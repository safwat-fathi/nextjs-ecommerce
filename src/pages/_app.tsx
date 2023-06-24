import "@/styles/globals.scss";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { AuthProvider } from "@/lib/contexts/auth.context";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

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
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default appWithTranslation(App);
