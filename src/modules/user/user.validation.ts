import {z} from "zod"

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Name must be at least 2 characters").max(30, "password can not exced 30 characters"),
        email: z.string().email("Invalid email format").max(100),
        password: z.string().min(6, "Password must be at least 6 characters").max(30, "password can not exced 30 characters")
    })
})

export const updateUserSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Name must be at least 2 characters").max(50).optional(),
        email: z.string().email("Invalid email format").max(100)
    })
})