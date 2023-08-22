// Next.js API route support: https://nextjs.org/docs/api-ROUTES/introduction
import CONSTANTS from "@/constants";
import HttpClient from "@/core/lib/http-client";
import { setStorage } from "@/lib/utils";
import { ROUTES } from "@/routes";
import { IBaseSingleResponse } from "@/types/i-base-response";
import { IUser } from "@/types/i-user";
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

type Data = {
  email: string;
};

const httpClient = new HttpClient(process.env.NEXT_PUBLIC_BASE_DEV_API);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Credentials is missing" });
    }

    const loginRes = await httpClient.post<
      IBaseSingleResponse<{
        accessToken: string;
        user: IUser;
      }>
    >(ROUTES.login, { email, password }, { withCredentials: true });

    console.log("🚀 ~ loginRes:", loginRes);

    if (loginRes.success) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", loginRes.data.accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );

      // setStorage(CONSTANTS.ACCESS_TOKEN, loginRes.data.accessToken, req, res);
      setStorage(CONSTANTS.USER, loginRes.data.user, req, res);

      res.status(200).json({
        ...loginRes.data.user,
      });
    } else {
      res.status(500).json(loginRes);
    }
  } catch (err: any) {
    res.status(err?.response?.status || 500).json({
      err:
        (Array.isArray(err?.response?.data?.error)
          ? err?.response?.data?.error[0].message
          : err?.response?.data?.message) || "Internal server error",
    });
  }
};

// export default handler;
