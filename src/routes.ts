export type TRoutes = (typeof ROUTES)[keyof typeof ROUTES];

const auth = {
  login: "/auth/login",
  logout: "/auth/logout",
} as const;

const products = {
  index: "/products",
  getProduct: (prodSlug: string) => `/products/${prodSlug}`,
} as const;

export const ROUTES = {
  auth: { ...auth },
  products: { ...products },
};
