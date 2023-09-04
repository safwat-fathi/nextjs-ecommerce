import axios, {
  AxiosInstance,
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import CONSTANTS from "@/constants";
import { TNullable } from "@/types/app";
import { getCookie } from "cookies-next";
import { getStorage } from "@/core/lib/utils";

class HttpClient {
  private readonly _instance: AxiosInstance;
  private _accessToken: TNullable<string>;
  private _lang: TNullable<string>;
  private _baseURL: TNullable<string>;

  constructor(
    token?: string,
    lang?: string,
    baseUrl = process.env.NEXT_PUBLIC_BASE_DEV_API
  ) {
    this._accessToken =
      (getCookie(CONSTANTS.ACCESS_TOKEN) as string) || token || null;

    this._lang =
      (getCookie(CONSTANTS.NEXT_LOCALE) as string) ||
      getStorage(CONSTANTS.LANG) ||
      lang ||
      null;

    this._baseURL = baseUrl;

    this._instance = axios.create({
      baseURL: this._baseURL,
      withCredentials: true,
      headers: {
        "Accept-Language": this._lang,
        // "X-Language": this._lang,
        Authorization: `Bearer ${this._accessToken}`,
      },
    });

    this._instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => config,
      (error: any) => Promise.reject(error)
    );

    this._instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => Promise.reject(error)
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this._instance.get<T>(url, config);

    return response.data;
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this._instance.post<T>(url, data, config);

    return response.data;
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this._instance.put<T>(url, data, config);

    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this._instance.delete<T>(url, config);

    return response.data;
  }

  public async upload<T>(
    url: string,
    formData: FormData,
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
  ): Promise<T> {
    const response = await this._instance.post<T>(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });

    return response.data;
  }
}

export default HttpClient;

// Usage: import HttpClient from "./HttpClient";

// const httpClient = new HttpClient();

// Make a GET request
// const data = await httpClient.get("/users");

// Make a POST request
// const newUser = { name: "John Doe" };
// const createdUser = await httpClient.post("/users", newUser);

// Make a PUT request
// const updatedUser = { ...createdUser, name: "Jane Doe" };
// const result = await httpClient.put(`/users/${createdUser.id}`, updatedUser);

// Make a DELETE request
// const deletedUser = await httpClient.delete(`/users/${createdUser.id}`);

// Upload a file
// const fileInput = document.querySelector<HTMLInputElement>("#fileInput");
// const file = fileInput.files[0];
// const formData = new FormData();
// formData.append("file", file);
// const uploadedFile = await httpClient.upload("/files", formData, event => {
//   const percent = Math.round((event.loaded / event.total) * 100);
//   console.log(`Upload progress: ${percent}%`);
// });
