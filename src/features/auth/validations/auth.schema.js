import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),

  email: z.string().email("Invalid email"),

  password: z
    .string()
    .min(6, "Minimum 6 characters")
    .max(100, "Maximum 100 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),

  password: z.string().min(6, "Minimum 6 characters"),
});
