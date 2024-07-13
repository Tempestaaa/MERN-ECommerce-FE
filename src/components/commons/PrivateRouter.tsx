import { useQuery } from "@tanstack/react-query";
import { User } from "../../types/user.type";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { data } = useQuery<User>({ queryKey: ["authUser"] });
  return data?.username ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRouter;
