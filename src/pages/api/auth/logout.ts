// Next.js API route support: https://nextjs.org/docs/api-ROUTES/introduction
import CONSTANTS from "@/constants";
import HttpClient from "@/core/lib/http-client";
import { removeStorage } from "@/core/lib/utils";
import { ROUTES } from "@/routes";
import { TLogoutRes } from "@/services/types/services";
import type { NextApiRequest, NextApiResponse } from "next";

const httpClient = new HttpClient(process.env.NEXT_PUBLIC_BASE_DEV_API);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const logoutRes = await httpClient.get<TLogoutRes>(ROUTES.logout, {
      headers: { Cookie: req.headers.cookie },
    });

    if (logoutRes.success) {
      // removeStorage(CONSTANTS.TOKEN, req, res);
      // removeStorage(CONSTANTS.ACCESS_TOKEN, req, res);
      removeStorage(CONSTANTS.USER, req, res);

      res.status(200).json(logoutRes);
    } else {
      res.status(500).json(logoutRes);
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
