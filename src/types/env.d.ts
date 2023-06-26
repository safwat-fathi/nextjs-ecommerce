declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_JOKES_API_URL: string;
      NEXT_PUBLIC_POKEMON_API_URL: string;
    }
  }
}

export {};
