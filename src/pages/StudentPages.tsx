import { useState } from "react";
import { Link } from "react-router-dom";
import CalendarGfg from "../components/medium/CalendaGfg";
import NavbarTeacher from "../components/navbar/NavbarDashboard";
import Card from "../components/small/Card";
import CardTaskList from "../components/medium/CardTaskList";

export default function StudentPages() {
    const [showTaskList, setShowTaskList] = useState(false);

    return (
        <>
            <NavbarTeacher />
            <div className="flex flex-row">
                <div className="h-[100vh] w-[268px] bg-[#125B9A]">
                    <ul className="flex flex-col gap-9 py-4 items-center cursor-pointer text-decoration-none mt-28">

                        <li
                            className={`relative pb-1 after:absolute after:left-1/2 after:bottom-0 text-white after:bg-white after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full
                            ${!showTaskList ? "text-l font-bold text-white after:w-full" : ""}`}
                            onClick={() => setShowTaskList(false)}
                        >
                            <Link to="#">Dashboard</Link>
                        </li>

                        <li
                            className={`relative pb-1 after:absolute after:left-1/2 after:bottom-0 text-white after:bg-white after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full
                            ${showTaskList ? "text-l font-bold text-white after:w-full" : ""}`}
                            onClick={() => setShowTaskList(true)}
                        >
                            Task List
                        </li>
                    </ul>
                </div>


                <div className="mt-28">
                    {!showTaskList && (
                        <>
                            <div className="ml-28 flex flex-row gap-5">
                                <a href="#">
                                    <Card count={20} label="Task Done" />
                                </a>
                                <a href="#">
                                    <Card count={19} label="Pending Task" />
                                </a>
                            </div>
                            <CalendarGfg />
                        </>
                    )}

                    {showTaskList && (
                        <>
                            <CardTaskList />
                            <CardTaskList/>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
