export interface IBasePaginatedResponse<T = any> {
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
  success: boolean;
}
