import { NotArray } from "./app";

interface IBaseSuccessResponse {
  success: true;
  message: string;
}
interface IBaseErrorResponse {
  success: false;
  error: string | string[];
}

export type IBaseResponse = IBaseSuccessResponse | IBaseErrorResponse;
export type IBaseSingleResponse<T> = IBaseResponse & {
  data: NotArray<T>;
};

export type IBasePaginatedResponse<T> = IBaseResponse & {
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
};

// const a: IBaseSingleResponse<{token: string; }> = {
//   success: true,
// 	data: {token: 'awdawd'},
// 	message: 'awdawawd'
// };

// const b: IBasePaginatedResponse<{token: string}> = {
//   success: true,
// 	data: [{token: 'awd'}, {token: 'awdawdawdawd'}],
// 	message: 'awdawawd'
// };
