import { useState } from "react";
import Logo from "../../assets/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="h-[72px] bg-white shadow-lg flex justify-center fixed top-0 left-0 right-0 z-50">
        <div className="container flex justify-between items-center md:max-w-[1328px]">
          <img src={Logo} alt="bimbel-one" className="cursor-pointer" />
          <div className="md:hidden z-50" onClick={toggleMenu}>
            <div className="space-y-2 cursor-pointer">
              {isOpen ? (
                <span className="block w-8 h-0.5 bg-[#E85F10] rotate-45 transform origin-center"></span>
              ) : (
                <span className="block w-8 h-0.5 bg-[#E85F10]"></span>
              )}
              {isOpen ? (
                <span className="block w-8 h-0.5 bg-[#E85F10] -rotate-45 transform origin-center"></span>
              ) : (
                <span className="block w-8 h-0.5 bg-[#E85F10]"></span>
              )}
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-[72px] left-0 w-full bg-white transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:w-auto`}
          >
            <ul className="flex flex-col gap-4 py-4 items-center md:flex-row md:gap-12 cursor-pointer text-decoration-none">
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                Home
              </li>
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                About
              </li>
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                Contact
              </li>
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                Our Team
              </li>
              <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                Expertise
              </li>
            </ul>
            <button className="md:ml-8 bg-[#E85F10] border-2 border-[#E85F10] rounded-lg text-white px-4 py-1 font-bold transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#E85F10]">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
