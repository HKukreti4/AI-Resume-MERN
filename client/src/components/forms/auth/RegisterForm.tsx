import { NavLink } from "react-router-dom";
import Logo from "../../logo/Logo";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPass: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const passwordValue = watch("password"); // needed for confirm password
  const usernameValue=watch("username")
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-800/20 border relative z-5 text-white w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <div className="flex justify-center my-4">
        <Logo />
      </div>

      <h2 className="text-xl font-semibold  text-center text-gray-100">
        Welcome, {usernameValue}
      </h2>
    <p className="mb-4 text-center text-gray-500">Please fill details</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {/* Username */}
        <div className="">
          <input
            {...register("username", { required: "Name is required" })}
            className={`w-full bg-transparent border outline-none rounded-full py-2.5 px-4 
            ${errors.username ? "border-red-400" : "border-gray-500/30"}
          `}
            type="text"
            placeholder="Enter your name"
          />
          <div className="px-4">
            {errors.username && (
              <p className="text-red-400 text-xs">{errors.username.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className={`w-full bg-transparent border outline-none rounded-full py-2.5 px-4 
            ${errors.email ? "border-red-400" : "border-gray-500/30"}
          `}
            type="email"
            placeholder="Enter your email"
          />
          <div className="px-4">
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full bg-transparent border outline-none rounded-full py-2.5 px-4 
            ${errors.password ? "border-red-400" : "border-gray-500/30"}
          `}
            type="password"
            placeholder="Enter your password"
          />
          <div className=" px-4">
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password.message}</p>
            )}
          </div>
        </div>
        {/* Confirm Password */}
        <div className="">
          <input
            {...register("confirmPass", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
            className={`w-full bg-transparent border outline-none rounded-full py-2.5 px-4 
            ${errors.confirmPass ? "border-red-400" : "border-gray-500/30"}
          `}
            type="password"
            placeholder="Confirm your password"
          />
          <div className="h-4 px-4">
            {errors.confirmPass && (
              <p className="text-red-400 text-xs">
                {errors.confirmPass.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer w-full my-4 bg-indigo-500 py-2.5 hover:bg-indigo-700 duration-200 rounded-full text-white"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue-500 underline">
          Login
        </NavLink>
      </p>
    </div>
  );
}
