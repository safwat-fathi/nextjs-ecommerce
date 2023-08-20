export type TRoutes = (typeof routes)[keyof typeof routes];

const auth = {
  login: "/login",
  logout: "/logout",
} as const;

const products = {
  index: "/products",
  get: (prodId: string) => `/products/${prodId}`,
} as const;

export const routes = {
  ...auth,
  ...products,
} as const;
