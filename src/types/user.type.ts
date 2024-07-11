import { z } from "zod";

// USER DATA
export const UserData = z.object({
  _id: z.string().readonly(),
  firstName: z.string().trim().min(1, { message: "Required" }),
  lastName: z.string().trim().min(1, { message: "Required" }),
  email: z.string().email().trim().min(1, { message: "Required" }),
  password: z.string().trim().min(6, { message: "Minimum 6 characters" }),
  createdAt: z.coerce.date().readonly(),
  updatedAt: z.coerce.date().readonly(),
});
export type User = z.infer<typeof UserData>;

// USER DATA REGISTER
export const UserDataRegister = UserData.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
})
  .extend({
    confirm: z.string().trim().min(6, { message: "Minimum 6 characters" }),
  })
  .refine((data) => data.password !== data.confirm, {
    message: "Password do not match",
    path: ["confirm"],
  });
export type UserRegister = z.infer<typeof UserDataRegister>;

// USER DATA LOGIN
export const UserDataLogin = UserData.pick({ email: true, password: true });
export type UserLogin = z.infer<typeof UserDataLogin>;
