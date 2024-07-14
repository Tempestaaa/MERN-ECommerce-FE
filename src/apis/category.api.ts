import { Category, CategoryAdd } from "../types/category.type";
import http from "../utils/http";

// ADD CATEGORY
export const addCategory = async (formData: CategoryAdd) =>
  await http.post("/api/categories/add", formData);

// UPDATE CATEGORY
export const updateCategory = async (formData: Category, id: string) =>
  await http.put(`/api/categories/one/${id}`, formData);

// DELETE CATEGORY
export const deleteCategory = async (id: string) =>
  await http.delete(`/api/categories/one/${id}`);

// GET ALL CATEGORIES
export const getAllCategories = async () => await http.get("/api/categories");
