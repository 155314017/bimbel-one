import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="h-[72px] bg-white shadow-lg flex justify-center fixed top-0 left-0 right-0 z-50">
        <div className="container flex justify-between items-center px-6 md:px-0 md:max-w-[1200px]">
          <img src={Logo} alt="bimbel-one" className="cursor-pointer" />
          <div className="md:hidden z-50" onClick={toggleMenu}>
            <div className="{`transition-transform duration-300 ease-in-out transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-10 text-[#E85F10]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-10 text-[#E85F10]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute shadow-xl md:shadow-none top-[70px] left-0 w-full bg-white transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:w-auto`}
          >
            <ul className="flex flex-col gap-4 py-4 items-center md:flex-row md:gap-12 cursor-pointer text-decoration-none">
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                <Link to="/">Home</Link>
              </li>
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                <a href="#about">About Us</a>
              </li>
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                <a href="#academics">Academics</a>
              </li>
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                <a href="#register">Registration Now</a>
              </li>
            </ul>
            <div className="flex justify-center gap-3 mb-5 md:mb-0">
              <button className="md:ml-8 bg-[#E85F10] rounded-lg text-white px-4 py-1 font-bold transition-all duration-300 ease-in-out hover:bg-orange-500">
                <Link to="/signup">Sign Up</Link>
              </button>
              <button className="border-2 border-[#E85F10] rounded-lg text-[#E85F10] px-4 py-1 font-bold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-orange-500 hover:border-orange-500">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
