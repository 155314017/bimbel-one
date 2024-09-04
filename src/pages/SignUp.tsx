import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center mt-[100px]">
      <div className="md:w-[489px] border-2 rounded-[10px] shadow-lg p-10">
        <div className="flex justify-center mb-5">
          <img src={Logo} alt="" />
        </div>

        <form action="">
          <h1 className="capitalize text-[14px] mb-2">Full name</h1>
          <input
            type="text"
            required
            className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
          />
          <h1 className="capitalize text-[14px] mb-2">email</h1>
          <input
            required
            type="email"
            className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
          />
          <h1 className="capitalize text-[14px] mb-2">password</h1>
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={toggleShowPassword}
              className="absolute inset-y-3 md:inset-y-4 right-4 flex items-center text-gray-400 cursor-pointer"
            />
          </div>
          <h1 className="capitalize text-[14px] mb-2">re-type password</h1>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
            />
             <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={toggleShowPassword}
              className="absolute inset-y-3 md:inset-y-4 right-4 flex items-center text-gray-400 cursor-pointer"
            />
          </div>

          <button
            className="w-full h-[50px] bg-[#E85F10] rounded-[10px] shadow-md text-white font-bold tracking-wide mt-3 capitalize transition-all duration-300 ease-in-out border-[#E85F10] border-2 hover:bg-transparent hover:text-[#E85F10]"
            type="submit"
          >
            Sign Up
          </button>

          <p className="text-[14px] mt-3">
            Already have an account?{" "}
            <span className="font-bold text-[#0047FF]">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
