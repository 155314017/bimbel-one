/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/API/Registrasi/Registrasi";
import { useMutation } from "react-query";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mutation = useMutation(registerUser, {
    onSuccess: (data) => {
      toast.success("Registrasi berhasil!");
      console.log(data);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },

    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Registrasi gagal");
      console.error(error);
    }
  });


  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password tidak cocok");
      return;
    }

    mutation.mutate({ full_name: fullName, email, password });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-[489px] border-2 rounded-[10px] shadow-lg p-10">
        <div className="flex justify-center mb-5">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <h1 className="capitalize text-[14px] mb-2">Full name</h1>
          <input
            name="full_name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            type="text"
            required
            className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
          />
          <h1 className="capitalize text-[14px] mb-2">email</h1>
          <input
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
          />
          <h1 className="capitalize text-[14px] mb-2">password</h1>
          <div className="relative">
            <input
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
            {mutation.isLoading ? "Registering..." : "Register"}
          </button>

          <p className="text-[14px] mt-3">
            Already have an account?{" "}
            <span className="font-bold text-[#0047FF]">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
        <Toaster />
      </div>
    </div>
  );
}
export default SignUp;