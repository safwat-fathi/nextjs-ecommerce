import axios, {
  AxiosInstance,
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";

// TODO: add toasters for success and error requests
class HttpClient {
  private readonly _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: "https://example.com/api/v1",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this._instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("token");

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    this._instance.interceptors.response.use(
      (response: AxiosResponse) => {
        this.showSuccessToaster(response.data.message || "Request succeeded");
        return response;
      },
      error => {
        if (error.response.status === 401) {
          this.showErrorToaster(
            error.response?.data?.message || "Unauthorized request"
          );

          localStorage.removeItem("token");
          window.location.href = "/login";
        }

        this.showErrorToaster(
          error.response?.data?.message || "Request failed"
        );

        return Promise.reject(error);
      }
    );
  }

  private showSuccessToaster(message: string): void {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  }

  private showErrorToaster(message: string): void {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
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
