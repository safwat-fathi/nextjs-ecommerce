import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { toast, TypeOptions, ToastPosition } from "react-toastify";

export const flatDeepByKey = (arr: any[], key: string) =>
  arr.reduce((prev, el) => {
    prev.push(el);

    if (el[key]) {
      prev.push(...flatDeepByKey(el[key], key));
    }

    return prev;
  }, []);

export const blobToData = (
  blob: Blob
): Promise<string | ArrayBuffer | null> => {
  const file = new File([blob], "img", { type: blob.type });

  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

// Storage utils
export const setStorage = (
  key: string,
  value: any,
  req?: GetServerSidePropsContext["req"],
  res?: GetServerSidePropsContext["res"]
) => {
  const stringifiedValue = JSON.stringify(value);

  // Server-side rendering (SSR)
  if (typeof window === "undefined") {
    setCookie(key, stringifiedValue, {
      req,
      res,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // max age is 24 hrs
    });
  } else {
    // Client-side rendering (CSR)
    localStorage.setItem(key, stringifiedValue);
  }
};

export const getStorage = (key: string, req?: any, res?: any) => {
  // Server-side rendering (SSR)
  if (typeof window === "undefined") {
    const item = getCookie(key, { req, res });

    return item;
  } else {
    // Client-side rendering (CSR)
    return localStorage.getItem(key);
  }
};

export const removeStorage = (key: string) => {
  // Server-side rendering (SSR)
  if (typeof window === "undefined") {
    deleteCookie(key);
  } else {
    // Client-side rendering (CSR)
    return localStorage.removeItem(key);
  }
};

export const notify = (
  msg: string,
  type: TypeOptions,
  position: ToastPosition
) => {
  toast(msg, {
    type,
    position,
    autoClose: 5000,
  });
};
