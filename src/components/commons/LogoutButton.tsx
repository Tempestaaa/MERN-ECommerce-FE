import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../apis/auth.api";
import toast from "react-hot-toast";
import Loading from "./Loading";

const LogoutButton = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: logoutUserApi, isPending } = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: async () => {
      toast.success("Logout success!");
      localStorage.removeItem("access_token");
      await queryClient.invalidateQueries({ queryKey: ["authUser"] });
      queryClient.removeQueries({ queryKey: ["authUser"], exact: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const handleLogout = async () => await logoutUserApi();
  return (
    <button
      disabled={isPending}
      onClick={handleLogout}
      className="btn btn-outline"
    >
      {isPending ? <Loading /> : "Logout"}
    </button>
  );
};

export default LogoutButton;
