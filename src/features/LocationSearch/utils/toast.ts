import { ToastOptions, toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions: ToastOptions = {
  autoClose: 3000,
  position: "top-center",
  closeOnClick: true,
  style: {
    width: "80%",
    margin: "10px auto",
    borderRadius: "4px",
  },
};

export const showToast = (
  message: string,
  type: TypeOptions,
  options?: ToastOptions
) => {
  toast(message, { ...defaultOptions, ...options, type });
};
