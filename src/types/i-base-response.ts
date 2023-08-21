export interface IBaseResponse {
  success: boolean;
  message?: string;
  error?: string | string[];
}
// export interface IBaseErrorResponse {
//   success: boolean;
//   error: string | string[];
// }

export interface IBaseSingleResponse<T = any> extends IBaseResponse {
  data: T;
}

export interface IBasePaginatedResponse<T = any> extends IBaseResponse {
  data: T[];
  links: {};
  meta: {
    current_page: number;
    total_pages: number;
    has_previous: boolean;
    previous: number;
    has_next: boolean;
    next: number;
  };
}

const a: IBaseResponse = {
  success: true,
  error: "awd",
  message: "awd",
};
