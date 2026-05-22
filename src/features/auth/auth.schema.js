import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Minimum 3 characters").max(50),

  email: z.string().email("Invalid email"),

  password: z.string().min(6, "Minimum 6 characters").max(100),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
