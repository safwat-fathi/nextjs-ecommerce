import { AxiosRequestConfig } from "axios";
import useSWR, { SWRConfiguration } from "swr";
import HttpClient from "../http-client";

type Fetcher<T> = (url: string, options?: AxiosRequestConfig) => Promise<T>;

const httpClient = new HttpClient();

const useData = <T>(url: string, options?: SWRConfiguration) => {
  const fetcher: Fetcher<T> = (url, options) => {
    try {
      const response = httpClient.get<T>(url, options);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate, isLoading, isValidating } = useSWR<T>(
    url,
    fetcher,
    options
  );

  return { data, error, mutate, isLoading, isValidating };
};

export default useData;
