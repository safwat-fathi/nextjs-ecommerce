// Next.js API route support: https://nextjs.org/docs/api-ROUTES/introduction
import CONSTANTS from "@/constants";
import HttpClient from "@/core/lib/http-client";
import { getStorage, removeStorage, setStorage } from "@/lib/utils";
import { ROUTES } from "@/routes";
import { IBaseSingleResponse } from "@/types/i-base-response";
import { IUser } from "@/types/i-user";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  email: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log("req.cookies.NEXT_LOCALE API", req.cookies.NEXT_LOCALE);
  // setStorage(CONSTANTS.LANG, req.cookies.NEXT_LOCALE);
  const httpClient = new HttpClient(
    process.env.NEXT_PUBLIC_BASE_DEV_API,
    req.cookies.NEXT_LOCALE
  );

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Credentials is missing" });
    }

    const url = `${process.env.NEXT_PUBLIC_BASE_DEV_API}${ROUTES.login}`;

    const loginRes = await httpClient.post<
      IBaseSingleResponse<{
        accessToken: string;
        user: IUser;
      }>
    >(url, { email, password }, { headers: { Cookie: req.headers.cookie } });
    if (loginRes.success) {
      // setStorage(CONSTANTS.ACCESS_TOKEN, loginRes.data.accessToken, req, res);
      // setStorage(CONSTANTS.TOKEN, loginRes.data.accessToken, req, res);
      // setStorage("userToken", loginRes.data.accessToken, req, res);
      // setStorage(CONSTANTS.USER, loginRes.data.user, req, res);

      // removeStorage("userToken", req, res);
      // removeStorage(CONSTANTS.USER, req, res);
      // removeStorage(CONSTANTS.TOKEN, req, res);
      // removeStorage(CONSTANTS.ACCESS_TOKEN, req, res);

      res.status(200).json(loginRes);
    } else {
      res.status(500).json(loginRes);
    }
  } catch (err: any) {
    res.status(err?.response?.status || 500).json({
      err:
        (Array.isArray(err?.response?.data?.error)
          ? err?.response?.data?.error[0].message
          : err?.response?.data?.message) ||
        err?.response?.data?.error ||
        "Internal server error",
    });
  }
};

// export default handler;
