import http from "../utils/http";

// ADD PRODUCT
export const addProduct = async (formData: FormData) =>
  await http.post("/api/products/add", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// GET ALL PRODUCTS
export const getAllProducts = async () => await http.get("/api/products");
