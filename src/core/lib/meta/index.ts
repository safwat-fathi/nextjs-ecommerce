import { AxiosRequestConfig } from "axios";

export type Fetcher = <T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) => Promise<T>;
