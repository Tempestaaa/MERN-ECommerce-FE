import { useQuery } from "@tanstack/react-query";
import { User } from "../../types/user.type";
import { Navigate, Outlet } from "react-router-dom";

const AdminRouter = () => {
  const { data } = useQuery<User>({ queryKey: ["authUser"] });
  return data?.username && data?.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminRouter;
