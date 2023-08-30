import { useEffect } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { AuthProvider } from "@/lib/contexts/auth";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

import "@/styles/globals.scss";
import { getCookie } from "cookies-next";
import CONSTANTS from "@/constants";
import { removeStorage } from "@/lib/utils";

// type AppOwnProps = { isAuth: boolean };

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const locale = router.locale as "en" | "ar";

    const dir = locale === "ar" ? "rtl" : "ltr";

    const html = document.querySelector("html") as HTMLElement;
    html.setAttribute("dir", dir);
  }, [router.locale]);

  useEffect(() => {
    const isAuthenticated = getCookie(CONSTANTS.IS_AUTHENTICATED);

    if (!isAuthenticated) {
      removeStorage(CONSTANTS.IS_AUTHENTICATED);
      removeStorage(CONSTANTS.USER);
    }
  }, []);

  return (
    // <SSRProvider>
    <>
      <DefaultSeo {...SEO} />
      <ToastContainer />
      {/* <AuthProvider> */}
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </>
  );
}

// MyApp.getInitialProps = async (
//   context: AppContext
// ): Promise<AppOwnProps & AppInitialProps> => {
//   const ctx = await App.getInitialProps(context);

//   // const token = getStorage("accessToken", context.ctx.req, context.ctx.res);
//   const token = getCookie("accessToken", {
//     req: context.ctx.req,
//     res: context.ctx.res,
//   });
//   console.log("🚀 ~ token:", token);

//   return { ...ctx, isAuth: !!token };
// };

export default appWithTranslation(MyApp);
