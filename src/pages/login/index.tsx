import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import renderWithLayout from "@/core/HOC/WithLayout";
import { LayoutsENUM } from "@/core/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthService from "@/services/auth.service";
import { getStorage, notify, setStorage } from "@/lib/utils";
import { useRouter } from "next/router";
import clsx from "clsx";
import CONSTANTS from "@/constants";
import axios from "axios";

type PageProps = {
  name: string;
};

export const getStaticProps: GetStaticProps<PageProps> = async ctx => {
  // export const getStaticProps: GetServerSideProps<PageProps> = async ctx => {
  // console.log("🚀 ~ awdawd");
  // const { req, res } = ctx;

  // const token = getStorage(CONSTANTS.ACCESS_TOKEN, req, res);
  // console.log("🚀 ~ token:", token);
  return {
    props: {
      name: "wwww",
      ...(await serverSideTranslations(ctx.locale!, ["common", "login"])),
    },
  };
};

const authService = new AuthService();

const Login: NextPage<PageProps> = () => {
  const router = useRouter();

  const { t } = useTranslation("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await authService.login(email, password);
      console.log("🚀 ~ handleLogin ~ res:", res);

      if (res.success) {
        setStorage("accessToken", res.data.accessToken);
        setStorage("user", res.data.user);

        notify(
          "Logged in successfully",
          "success",
          router.locale === "ar" ? "top-left" : "top-right"
        );

        router.push("/");
      }
      // const res = await axios.post(
      //   // "http://localhost:8000/api/auth/login",
      //   "/api/auth/login",
      //   { email, password },
      //   { withCredentials: true }
      // );
      // console.log("🚀 ~ handleLogin ~ res:", res);

      // TODO: change user nav state
    } catch (error: any) {
      console.log("🚀 ~ handleLogin ~ error:", error);
      const errRes = error?.response?.data;

      if (errRes) {
        // if (Array.isArray(errRes.error)) {
        //   const errs: any[] = errRes.error.map(
        //     (err: { param: string; message: string }) => err.message
        //   );

        //   notify(
        //     // `${errs[0]} and ${errs.length - 1} more errors`,
        //     t("error", { error: errs[0], count: errs.length - 1 }),
        //     "error",
        //     router.locale === "ar" ? "top-left" : "top-right"
        //   );

        //   return;
        // }

        notify(
          errRes.err,
          "error",
          router.locale === "ar" ? "top-left" : "top-right"
        );
      }

      console.error(`Error@handleLogin ${error}`);
    }
  };

  return (
    <>
      <NextSeo title={t("title") as string} />
      <section className="bg-white dark:bg-gray-900">
        <div className="min-h-screen flex w-full max-w-sm mx-auto overflow-hidden bg-white shadow-lg dark:bg-gray-800 lg:max-w-4xl">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
            }}
          ></div>

          <div className="h-[100vh] flex flex-col justify-center w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <Image
                className="w-auto h-7 sm:h-8"
                width={100}
                height={100}
                src="/images/logo.svg"
                alt=""
              />
            </div>

            <div className="">
              <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                Welcome back!
              </p>

              <Link
                href="#"
                className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <div className="px-4 py-2">
                  <Image
                    src="/icons/google.svg"
                    width={30}
                    height={30}
                    alt="google logo"
                  />
                </div>

                <span className="w-5/6 px-4 py-3 font-bold text-center">
                  Sign in with Google
                </span>
              </Link>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                  or login with email
                </span>
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
              </div>

              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <input
                  id="loggingPassword"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              {/* 
              <div
                className={clsx("mt-6 bg-white p-4 rounded", {
                  hidden: !error,
                  block: error,
                })}
              >
                {error ? (
                  Array.isArray(error) ? (
                    error.map(err => (
                      <p key={err.message} className="text-red-600">
                        * {err.message}
                      </p>
                    ))
                  ) : (
                    <p className="text-red-600">* {error}</p>
                  )
                ) : null}
              </div> */}

              <div className="mt-6">
                <button
                  onClick={handleLogin}
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign In
                </button>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                <Link
                  href="/signup"
                  className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  or sign up
                </Link>

                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default renderWithLayout(Login, LayoutsENUM.CLEAN);
