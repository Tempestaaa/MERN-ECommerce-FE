import { z } from "zod";
import { UserData } from "./user.type";
import { BrandData } from "./brand.type";
import { CategoryData } from "./category.type";

// PRODUCT DATA
export const ProductData = z.object({
  _id: z.string().readonly(),
  name: z.string().trim().min(1, { message: "Required" }),
  slug: z.string().trim(),
  desc: z.string().trim().min(1, { message: "Required" }),
  images: z
    .instanceof(FileList)
    .refine((data) => data.length > 0, {
      message: "At least provide 1 image",
    })
    .refine((data) => data.length <= 5, { message: "Maximum 5 images" }),
  colors: z.array(z.string().trim().min(1, { message: "Required" })),
  sizes: z.array(
    z.object({
      label: z.string().trim().min(1, { message: "Required" }),
      value: z.string().trim().min(1, { message: "Required" }),
    })
  ),
  brand: BrandData,
  category: CategoryData,
  inStock: z.coerce.number().int().positive(),
  rating: z.coerce.number().int().positive().min(1).max(5),
  oldPrice: z.coerce.number().positive(),
  newPrice: z.coerce.number().optional().default(0).optional(),
  sold: z.coerce.number().int().positive(),
  numOfReviews: z.coerce.number().int().positive(),
  reviews: z.array(
    z.object({
      _id: z.string().readonly(),
      user: UserData,
      review: z.string().trim().min(1, { message: "Required" }),
      rating: z.coerce.number().int().positive().min(1).max(5),
    })
  ),
  createdAt: z.coerce.date().readonly(),
  updatedAt: z.coerce.date().readonly(),
});
export type Product = z.infer<typeof ProductData>;

// PRODUCT DATA ADD
export const ProductDataAdd = ProductData.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
  numOfReviews: true,
  reviews: true,
  slug: true,
  sold: true,
  colors: true,
}).extend({ colors: z.string().min(1, { message: "Required" }) });
export type ProductAdd = z.infer<typeof ProductDataAdd>;

// PRODUCT BACKEND
export const ProductDataBackEnd = z.object({
  products: z.array(ProductData),
  page: z.coerce.number(),
  pages: z.coerce.number(),
  total: z.coerce.number(),
});
export type ProductBackEnd = z.infer<typeof ProductDataBackEnd>;
