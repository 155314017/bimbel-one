import CalendarGfg from "../components/medium/CalendarGfg";
import NavbarTeacher from "../components/navbar/NavbarTeacher";
import Card from "../components/small/Card";

export default function TeacherPages() {
    return (
        <>
            <NavbarTeacher />
            {/* <div className="h-96 w-80 bg-black" ></div> */}
            <div className="mt-28 " >
                <div className="ml-24 flex flex-row gap-5 " >
                    <Card count={20} label="Task Done" />
                    <Card count={19} label="Pending Task" />
                </div>
                <CalendarGfg />
            </div>
        </>
    );
}
