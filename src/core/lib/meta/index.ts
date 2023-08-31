import { AxiosRequestConfig } from "axios";

export type Fetcher = <T>(
  url: string,
  options?: AxiosRequestConfig
) => Promise<T>;
