import { toast, TypeOptions, ToastPosition } from "react-toastify";

// notify util
export const notify = (
  msg: string,
  type: TypeOptions,
  position: ToastPosition
) => {
  toast(msg, {
    type,
    position,
    autoClose: 5000,
  });
};
