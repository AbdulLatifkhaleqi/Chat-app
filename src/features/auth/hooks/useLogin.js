import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { loginUser } from "../../../api/auth.api";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,

    onSuccess: () => {
      toast.success("Login successful");
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || "Invalid credentials");
    },
  });
};
