import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/commons/Input";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { useForm } from "react-hook-form";
import { UserDataLogin, UserLogin } from "../../types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../apis/auth.api";
import toast from "react-hot-toast";
import Loading from "../../components/commons/Loading";

const Login = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [PasswordType, PasswordIcon] = usePasswordToggle();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserLogin>({ resolver: zodResolver(UserDataLogin) });
  const { mutateAsync: loginUserApi, isPending } = useMutation({
    mutationFn: (formData: UserLogin) => loginUser(formData),
    onSuccess: async (data: any) => {
      toast.success("Login success!");
      localStorage.setItem("access_token", data.access_token);
      await queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
      reset();
    },
  });

  const onSubmit = async (data: UserLogin) => {
    await loginUserApi(data);
  };

  return (
    <div className="w-full grid place-items-center bg-gradient-to-b from-pink-200 px-2 h-[calc(100svh-68px)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 border-2 rounded-2xl max-w-md w-full flex flex-col shadow-md glass"
      >
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <Input
          label="Username"
          placeholder="abc@gmail.com"
          autoComplete="username"
          {...register("username")}
          error={errors.username}
        />
        <div className="relative">
          <Input
            type={PasswordType as string}
            label="Password"
            placeholder="******"
            className="pr-10"
            autoComplete="current-password"
            {...register("password")}
            error={errors.password}
          />
          <span
            className={`absolute right-2 ${
              errors.password ? "bottom-6" : "bottom-2"
            } cursor-pointer p-1`}
          >
            {PasswordIcon}
          </span>
        </div>
        <button
          disabled={isPending}
          className="btn btn-neutral mt-4 uppercase hover:font-bold duration-300"
        >
          {isPending ? <Loading /> : "Login"}
        </button>
        <span className="text-xs ml-auto mt-2">
          New user?{" "}
          <Link to="/register" className="font-bold">
            Register here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
