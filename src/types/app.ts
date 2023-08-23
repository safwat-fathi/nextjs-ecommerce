// export type NotArray = (object | string | bigint | number | boolean) & {
//   length?: never;

import { GetServerSidePropsContext } from "next";

// };
export type NotArray<T> = T extends Array<unknown> ? never : T;

export type GetSSPropsReq = GetServerSidePropsContext["req"];
export type GetSSPropsRes = GetServerSidePropsContext["res"];

export type TNullable<T> = T | null;
