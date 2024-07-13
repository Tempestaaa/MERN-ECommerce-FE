import { AxiosResponse } from "axios";
import { User, UserLogin, UserRegister } from "../types/user.type";
import http from "../utils/http";

// REGISTER USER
export const registerUser = async (formData: UserRegister) =>
  await http.post("/api/auth/register", formData);

// LOGIN USER
export const loginUser = async (formData: UserLogin) =>
  await http.post("/api/auth/login", formData);

// LOGOUT USER
export const logoutUser = async () => await http.get("/api/auth/logout");

// AUTH USER
export const authUser = async () => {
  const data: AxiosResponse<User | null> = await http.get("/api/auth/me");
  if (data.data === null) return null;
  return data;
};
