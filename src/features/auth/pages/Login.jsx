import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../../components/ui/Input";
import SubmitButton from "../../../components/ui/SubmitButton";

import { loginSchema } from "../validations/auth.schema";

import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-black
        via-slate-950
        to-indigo-950
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          shadow-2xl
        "
      >
        <div className="mb-8 text-center">
          <h1
            className="
              text-4xl
              font-bold
              text-white
              mb-3
            "
          >
            Welcome Back
          </h1>

          <p className="text-slate-300">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            register={register("password")}
            error={errors.password}
          />

          <SubmitButton title="Login" loading={isPending} />
        </form>
      </div>
    </div>
  );
}
