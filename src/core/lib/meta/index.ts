import { AxiosRequestConfig } from "axios";

export type Fetcher = (
  url: string,
  options?: AxiosRequestConfig
) => Promise<unknown>;
