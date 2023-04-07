export type AuthRoutes = {
  login: string;
  logout: string;
};

export type ProductsRoutes = {
  index: string;
  get(prodId: string): string;
};

export type Routes = {
  auth: AuthRoutes;
  products: ProductsRoutes;
};

export const routes: Routes = {
  auth: {
    login: "/test/login",
    logout: "/test/logout",
  },
  products: {
    index: "/test/products",
    get: (prodId: string) => `/test/${prodId}`,
  },
};
