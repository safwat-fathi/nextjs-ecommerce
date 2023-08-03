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
    login: "/login",
    logout: "/logout",
  },
  products: {
    index: "/products",
    get: (prodId: string) => `/products/${prodId}`,
  },
};
