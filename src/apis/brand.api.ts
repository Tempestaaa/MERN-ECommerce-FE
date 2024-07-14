import { Brand, BrandAdd } from "../types/brand.type";
import http from "../utils/http";

// ADD BRAND
export const addBrand = async (formData: BrandAdd) =>
  await http.post("/api/brands/add", formData);

// UPDATE BRAND
export const updateBrand = async (formData: Brand, id: string) =>
  await http.put(`/api/brands/one/${id}`, formData);

// DELETE BRAND
export const deleteBrand = async (id: string) =>
  await http.delete(`/api/brands/one/${id}`);

// GET ALL BRANDS
export const getAllBrands = async () => await http.get("/api/brands");
