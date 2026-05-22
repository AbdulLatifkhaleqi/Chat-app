import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../../components/ui/Input";

import { registerSchema } from "../validations/auth.schema";

import { useRegister } from "../hooks/useRegister";

export default function Register() {
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gradient-to-br
      from-slate-950
      via-indigo-950
      to-black
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
        <h1
          className="
          text-4xl
          font-bold
          text-white
          text-center
          mb-8
        "
        >
          Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Name"
            placeholder="Enter your name"
            register={register("name")}
            error={errors.name}
          />

          <Input
            label="Email"
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

          <button
            disabled={isPending}
            className="
              w-full
              py-3
              rounded-xl
              bg-indigo-600
              hover:bg-indigo-700
              transition
              text-white
              font-semibold
            "
          >
            {isPending ? "Loading..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
