import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../../components/ui/Input";
import SubmitButton from "../../../components/ui/SubmitButton";

import { registerSchema } from "../validations/auth.schema";
import { useRegister } from "../hooks/useRegsiter";

export default function Register() {
  const { mutate, isPending } = useRegister();
  const navigate = useNavigate();

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
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-950
        via-indigo-950
        to-slate-950
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
            className="text-4xl
              font-bold
              text-white
              mb-3
            "
          >
            Create Account
          </h1>

          <p className="text-slate-300">Start your professional journey</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            register={register("name")}
            error={errors.name}
          />

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

          <SubmitButton title="Create Account" loading={isPending} />
          <div className="flex items-center text-white  gap-3 justify-center w-fit">
            <p>Already have an account</p>
            <p className="cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
