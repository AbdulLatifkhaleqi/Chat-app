import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { registerUser } from "../../../api/auth.api";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,

    onSuccess: () => {
      toast.success("Account created successfully");
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};
