import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

export default function RegisterForm() {

    return (
        
        <div className="bg-gray-800/20 border  relative z-5 text-white max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <div className="flex justify-center my-4"><Logo/></div>
            <h2 className="text-xl font-semibold mb-6 text-center text-gray-100">Welcome, Create Your Account </h2>
            <form>
                <input id="email" autoComplete="disabled" className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />
                <input id="password" className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
                <div className="text-right py-4">
                    <a className="text-blue-600 underline" href="#">Forgot Password</a>
                </div>
                <button type="submit" className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white">Log in</button>
            </form>
            <p className="text-center mt-4">Already have an account? <NavLink to="/login" className="text-blue-500 underline">Login</NavLink></p>
            
            
            <button type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                Log in with google
            </button>
        </div>
    );
};