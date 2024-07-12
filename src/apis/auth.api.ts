import { AxiosResponse } from "axios";
import { User, UserLogin, UserRegister } from "../types/user.type";
import http from "../utils/http";

// REGISTER USER
export const registerUser = (formData: UserRegister) =>
  http.post("/api/auth/register", formData);

// LOGIN USER
export const loginUser = (formData: UserLogin) =>
  http.post("/api/auth/login", formData);

// AUTH USER
export const authUser = async () => {
  const data: AxiosResponse<User> = await http.get("/api/auth/me");
  return data;
};
