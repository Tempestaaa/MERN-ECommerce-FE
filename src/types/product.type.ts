import { z } from "zod";

// PRODUCT DATA
export const ProductData = z.object({
  _id: z.string().readonly(),
  name: z.string().trim().min(1, { message: "Required" }),
  // category: z
  //   .union([z.enum(["men", "women", "kids"]), z.null()])
  //   .refine((data) => data !== null, { message: "Required" }),
  category: z.string().min(1, { message: "Required" }),
  image: z
    .instanceof(FileList)
    .refine((data) => data.length !== 0, {
      message: "Please provide an image",
    })
    .refine((data) => data.length < 6, { message: "Maximum 5 images" })
    .or(z.string()),
  newPrice: z.coerce.number().positive(),
  oldPrice: z.coerce.number().positive(),
  date: z.coerce.date().readonly(),
  available: z.boolean(),
  createdAt: z.coerce.date().readonly(),
  updatedAt: z.coerce.date().readonly(),
});
export type Product = z.infer<typeof ProductData>;

// PRODUCT DATA ADD
export const ProductDataAdd = ProductData.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
  date: true,
  available: true,
});
export type ProductAdd = z.infer<typeof ProductDataAdd>;

// FRONTEND DATA
export const ProductDataFE = ProductData.omit({
  available: true,
  createdAt: true,
  date: true,
  updatedAt: true,
});
export type ProductFE = z.infer<typeof ProductDataFE>;
