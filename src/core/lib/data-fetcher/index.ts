import axios, { AxiosRequestConfig } from "axios";
import useSWR, { useSWRConfig } from "swr";

type Fetcher<T> = (
  url: string,
  options?: AxiosRequestConfig
) => Promise<responseInterface<T, any>>;

const useData = <T>(
  url: string,
  options?: ConfigInterface<T, any> & AxiosRequestConfig
) => {
  const fetcher: Fetcher<T> = (url, options) =>
    axios(url, options).then(res => res.data);

  const { data, error, mutate, isLoading, isValidating } = useSWR<T>(
    url,
    fetcher,
    options
  );

  return { data, error, mutate };
  // return (useSWR<T>(url, fetcher, options));
};

export default useData;
