import { z } from "zod";

// USER DATA
export const UserData = z.object({
  _id: z.string().readonly(),
  fullName: z.string().trim().min(1, { message: "Required" }),
  username: z.string().trim().min(6, { message: "Minimum 6 characters" }),
  password: z.string().trim().min(6, { message: "Minimum 6 characters" }),
  avatar: z.any().refine((data) => data !== 0, { message: "Required" }),
  isAdmin: z.coerce.boolean().readonly(),
  cart: z.array(z.string()),
  createdAt: z.coerce.date().readonly(),
  updatedAt: z.coerce.date().readonly(),
});
export type User = z.infer<typeof UserData>;

// USER DATA REGISTER
export const UserDataRegister = UserData.pick({
  fullName: true,
  username: true,
  password: true,
})
  .extend({
    confirm: z.string().trim().min(6, { message: "Minimum 6 characters" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password do not match",
    path: ["confirm"],
  });
export type UserRegister = z.infer<typeof UserDataRegister>;

// USER DATA LOGIN
export const UserDataLogin = UserData.pick({ username: true, password: true });
export type UserLogin = z.infer<typeof UserDataLogin>;
