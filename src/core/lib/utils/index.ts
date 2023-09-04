export const flatDeepByKey = (arr: any[], key: string) =>
  arr.reduce((prev, el) => {
    prev.push(el);

    if (el[key]) {
      prev.push(...flatDeepByKey(el[key], key));
    }

    return prev;
  }, []);

export const blobToData = (
  blob: Blob
): Promise<string | ArrayBuffer | null> => {
  const file = new File([blob], "img", { type: blob.type });

  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

// Storage utils for client-side rendering (CSR)
export const setStorage = (key: string, value: any): void => {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringifiedValue);
};

// export function getStorage(key: string): string;
// export function getStorage(
//   key: string,
//   req: GetSSPropsReq,
//   res: GetSSPropsRes
// ): CookieValueTypes;
// export function getStorage(

export const getStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key) || "") ?? false;
  }
};

export const removeStorage = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, "null");
  }
};

export const debounce = (func: (...arg: any[]) => any, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
