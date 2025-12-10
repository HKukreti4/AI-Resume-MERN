import { NavLink } from "react-router-dom";
import Logo from "../../logo/Logo";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  // const googleResponse=async(authResult:any)=>{
  //     try {
  //         console.log("auth result",authResult);
  //     } catch (error) {
  //       console.log(error);
  //     }
  // }
  const loginWithGoogle = () => {
    // Starts Passport Google OAuth flow in same tab
    window.location.href = `http://localhost:5000/api/v1/auth/google`;
  };

  return (
    <div className="bg-gray-800/20 border relative z-5 text-white w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <div className="flex justify-center my-4">
        <Logo />
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-100">
        Welcome back
      </h2>

      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        
        {/* Email Input */}
        <input
          id="email"
          autoComplete="off"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          className={`w-full bg-transparent border my-3 outline-none rounded-full py-2.5 px-4 
            ${errors.email ? "border-red-400" : "border-gray-500/30"}
          `}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-400 text-xs px-4 -mt-2">
            {errors.email.message}
          </p>
        )}

        {/* Password Input */}
        <input
          id="password"
          autoComplete="off"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password must be 6+ characters" },
          })}
          className={`w-full bg-transparent border mt-3 outline-none rounded-full py-2.5 px-4 
            ${errors.password ? "border-red-400" : "border-gray-500/30"}
          `}
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-400 text-xs px-4 mt-2">
            {errors.password.message}
          </p>
        )}

        {/* Forgot Password */}
        <div className="text-right py-4">
          <a className="text-blue-600 underline" href="#">
            Forgot Password
          </a>
        </div>
        {
            isSubmitting?<span className="loading loading-dots loading-xs"></span>:  <button
          type="submit"
          className="w-full cursor-pointer mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
        >
          Log in
        </button>
        }
      
      </form>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <NavLink to="/register" className="text-blue-500 underline">
          Signup
        </NavLink>
      </p>

      <button
      onClick={loginWithGoogle}
        type="button"
        className="w-full cursor-pointer flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
          alt="googleFavicon"
        />
        Log in with Google
      </button>
    </div>
  );
}
