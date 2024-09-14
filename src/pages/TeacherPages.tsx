import Sidebar from "../components/navbar/Sidebar";
import CardCustom from "../components/small/CardCustom";

export default function TeacherPages() {
    return (
        <div>
            <Sidebar />
            <div className="flex flex-row mt-[500px] ml-[1000px] gap-14 " >
                <CardCustom text="Task Done" totalTask={20} />
                <CardCustom text="Pending Task" totalTask={20} />
            </div>
        </div>
    );
}
