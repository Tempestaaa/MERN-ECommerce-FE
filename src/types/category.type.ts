import { z } from "zod";

// CATEGORY DATA
export const CategoryData = z.object({
  _id: z.string().readonly(),
  name: z.string().trim().min(1, { message: "Required" }),
});
export type Category = z.infer<typeof CategoryData>;

// CATEGORY ADD
export const CategoryDataAdd = CategoryData.pick({ name: true });
export type CategoryAdd = z.infer<typeof CategoryDataAdd>;

// CATEGORY BACKEND
export const CategoryDataBackEnd = z.object({
  categories: z.array(CategoryData),
  page: z.coerce.number(),
  pages: z.coerce.number(),
  total: z.coerce.number(),
});
export type CategoryBackEnd = z.infer<typeof CategoryDataBackEnd>;
