import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters"),
    email: z
      .string()
      .email("Invalid email format")
      .max(100, "Email cannot exceed 100 characters"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(30, "Password cannot exceed 30 characters"),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters")
      .optional(),
    email: z
      .string()
      .email("Invalid email format")
      .max(100, "Email cannot exceed 100 characters")
      .optional(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(30, "Password cannot exceed 30 characters")
      .optional(),
  }),
  params: z.object({
    id: z.string().min(1, "User ID is required"),
  }),
});

export const getUserSchema = z.object({
  params: z.object({
    id: z.string().min(1, "User ID is required"),
  }),
});

export const deleteUserSchema = z.object({
  params: z.object({
    id: z.string().min(1, "User ID is required"),
  }),
});