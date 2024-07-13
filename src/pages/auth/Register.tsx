import { useForm } from "react-hook-form";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import Input from "../../components/commons/Input";
import { Link, useNavigate } from "react-router-dom";
import { UserDataRegister, UserRegister } from "../../types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../apis/auth.api";
import toast from "react-hot-toast";
import Loading from "../../components/commons/Loading";

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [PasswordType, PasswordIcon] = usePasswordToggle();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserRegister>({ resolver: zodResolver(UserDataRegister) });
  const { mutateAsync: registerUserApi, isPending } = useMutation({
    mutationFn: (formData: UserRegister) => registerUser(formData),
    onSuccess: async () => {
      toast.success("Registration success!");
      await queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
      reset();
    },
  });

  const onSubmit = async (data: UserRegister) => {
    await registerUserApi(data);
  };
  return (
    <div className="w-full grid place-items-center bg-gradient-to-b from-pink-200 px-2 h-[calc(100svh-68px)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 border-2 rounded-2xl max-w-2xl w-full flex flex-col shadow-md glass"
      >
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <Input
          label="Username"
          placeholder="E.g. willsmith"
          autoComplete="username"
          {...register("username")}
          error={errors.username}
        />
        <Input
          label="Full name"
          placeholder="E.g. Will Smith"
          autoComplete="name"
          {...register("fullName")}
          error={errors.fullName}
        />
        <div className="relative">
          <Input
            type={PasswordType as string}
            label="Password"
            placeholder="******"
            className="pr-10"
            autoComplete="new-password"
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
        <div className="relative">
          <Input
            type={PasswordType as string}
            label="Confirm password"
            placeholder="******"
            className="pr-10"
            autoComplete="new-password"
            {...register("confirm")}
            error={errors.confirm}
          />
          <span
            className={`absolute right-2 ${
              errors.confirm ? "bottom-6" : "bottom-2"
            } cursor-pointer p-1`}
          >
            {PasswordIcon}
          </span>
        </div>

        <button
          disabled={isPending}
          className="btn btn-neutral mt-4 uppercase hover:font-bold duration-300"
        >
          {isPending ? <Loading /> : "Register"}
        </button>
        <span className="text-xs ml-auto mt-2">
          Have an account?{" "}
          <Link to="/login" className="font-bold">
            Login here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
