import axios, {
  AxiosInstance,
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { getStorage } from "@/lib/utils";

class HttpClient {
  private readonly _instance: AxiosInstance;
  private _accessToken: string | null = null;
  private _lang: string;

  constructor() {
    this._lang = getStorage("lang") as string;
    this._accessToken = getStorage("accessToken") as string;

    this._instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_API,
      withCredentials: true,
      headers: {
        "Accept-Language": this._lang,
        "X-Language": this._lang,
      },
    });

    this._instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this._accessToken}`;

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
