/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegistrationUser } from "../services/API/Registrasi/Registrasi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
    const password = (formElements.namedItem("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      formElements.namedItem("confirmPassword") as HTMLInputElement
    ).value;

    if (password !== confirmPassword) {
      toast.error("Password tidak cocok");
      return;
    }

    const registerPromise = RegistrationUser(formData);

    toast.promise(registerPromise, {
      loading: "Sedang melakukan registrasi...",
      success: "Registrasi berhasil!",
      error: (error) =>
        `${error.response?.data?.message || "Registrasi gagal"}`,
    });

    try {
      const response = await RegistrationUser(formData);
      console.log(response);
      setFormData({
        full_name: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error: any) {
      console.error(error);
    }
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
            value={formData.full_name}
            onChange={handleChange}
            type="text"
            required
            className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
          />
          <h1 className="capitalize text-[14px] mb-2">email</h1>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
          />
          <h1 className="capitalize text-[14px] mb-2">password</h1>
          <div className="relative">
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
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
        <Toaster />
      </div>
    </div>
  );
}
