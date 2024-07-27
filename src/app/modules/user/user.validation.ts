import { z } from 'zod'


const createUserZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string({
      required_error: 'Phone number is required',
    }),
    password: z.string(),
    name: z.string({
      required_error: 'name is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
  }),
})

const updateUserZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string({
      required_error: 'Phone number is required',
    }),
    password: z.string(),
    name: z.string({
      required_error: 'address is required',
    }),
    email: z.string({
      required_error: 'budget is required',
    }),
  }),
})

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
}
