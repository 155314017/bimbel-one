import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function NavbarTeacher() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="h-[72px] bg-white shadow-lg flex fixed top-0 left-0 right-0 z-50">
                <div className="container flex justify-between items-center px-6 md:px-0 md:max-w-[1700px] ml-28">
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
                        className={`${isOpen ? "block" : "hidden"
                            } absolute shadow-xl md:shadow-none top-[70px] left-0 w-full bg-white transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:w-auto`}
                    >
                        <ul className="flex flex-col gap-28 py-4 items-center md:flex-row md:gap-12 cursor-pointer text-decoration-none font-bold">
                            <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#E85F10] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                                <Link to="/">Setting</Link>
                            </li>
                            <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 text-[#E85F10] after:bg-[#E85F10]  after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
