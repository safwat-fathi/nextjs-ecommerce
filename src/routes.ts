export type TRoutes = (typeof ROUTES)[keyof typeof ROUTES];

const auth = {
  login: "/api/auth/login",
  logout: "/api/auth/logout",
} as const;

const products = {
  index: "/api/products",
  get: (prodId: string) => `/products/${prodId}`,
} as const;

export const ROUTES = {
  ...auth,
  ...products,
} as const;
