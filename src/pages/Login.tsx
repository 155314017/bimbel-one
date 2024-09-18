import { useState } from "react";
import Logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { LoginUser } from "../services/API/Login/Login";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {mutate, isLoading} = LoginUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { email, password },
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSuccess: (users: string | any[]) => {
          if (users.length > 0) {
            const user = users[0];
            const accessToken = user.access_token;
            const userType = user.type;

            if (accessToken) {
              localStorage.setItem("access_token", accessToken);
              localStorage.setItem("userType", userType);

              if (userType === "Administrator") {
                navigate("/cms/admin/*");
              } else if (userType === "Teacher") {
                navigate("/teacher/*");
              } else if (userType === "Student") {
                navigate("/student/*");
              }
            } else {
              toast.error("Login Failed: No token received");
            }
          } else {
            toast.error("Login Failed: No user data received");
          }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (err: any) => {
          console.error("Login failed", err);
          toast.error("Wrong Email or Password");
        },
      }
    );
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-[489px] border-2 rounded-[10px] shadow-lg p-10">
          <div className="flex justify-center mb-5">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>

          <form onSubmit={handleSubmit}>
            <h1 className="capitalize text-[14px] mb-2">email</h1>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className="w-full md:h-[50px] h-[40px] border-2 rounded-[5px] mb-5 p-3 shadow-md"
            />
            <h1 className="capitalize text-[14px] mb-2">password</h1>
            <div className="relative">
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <button
              className="w-full h-[50px] bg-[#E85F10] rounded-[10px] shadow-md text-white font-bold tracking-wide mt-3 capitalize transition-all duration-300 ease-in-out border-[#E85F10] border-2 hover:bg-transparent hover:text-[#E85F10]"
              type="submit"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    </>
  );
}
