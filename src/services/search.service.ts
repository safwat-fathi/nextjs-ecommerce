import { ROUTES } from "@/routes";
import HttpClient from "@/core/lib/http-client";
import { IBasePaginatedResponse } from "@/types/i-base-response";
import { IProduct } from "@/types/i-product";

const httpClient = new HttpClient();

class SearchService {
  async searchProduct(
    t: string,
    c?: string[] | string
  ): Promise<IBasePaginatedResponse<IProduct>> {
    try {
      const res = await httpClient.get<IBasePaginatedResponse<IProduct>>(
        ROUTES.products.index,
        {
          params: {
            page: 1,
            filter: {
              text: { search: t },
              ...(c ? { categories: { in: c } } : {}),
            },
          },
        }
      );

      return res;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  // async logout(): Promise<TLogoutRes> {
  //   const res = await axios.get<TLogoutRes>(
  //     `${process.env.NEXT_PUBLIC_BASE_DEV_API}${ROUTES.auth.logout}`,
  //     {
  //       withCredentials: true,
  //       headers: {
  //         "Accept-Language": this._lang,
  //       },
  //     }
  //   );
  //   // const res = await httpClient.get<TLogoutRes>(ROUTES.logout);

  //   return res.data;
  // }
}

export default SearchService;
