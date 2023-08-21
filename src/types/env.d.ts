declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_DEV_API: string;
      NEXT_PUBLIC_BASE_PROD_API: string;
    }
  }
}

export {};
