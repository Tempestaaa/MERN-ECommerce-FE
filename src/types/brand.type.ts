import { z } from "zod";

// BRAND DATA
export const BrandData = z.object({
  _id: z.string().readonly(),
  name: z.string().trim().min(1, { message: "Required" }),
});
export type Brand = z.infer<typeof BrandData>;

// BRAND ADD
export const BrandDataAdd = BrandData.pick({ name: true });
export type BrandAdd = z.infer<typeof BrandDataAdd>;

// BRAND BACKEND
export const BrandDataBackEnd = z.object({
  brands: z.array(BrandData),
  page: z.coerce.number(),
  pages: z.coerce.number(),
  total: z.coerce.number(),
});
export type BrandBackEnd = z.infer<typeof BrandDataBackEnd>;
