import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../../components/small/SearchBar";
import Spinners from "../../../assets/spinners.svg";
import { useDataStudent } from "../../../services/API/cms/FetchDataStudent";
import DetailStudent from "./DetailStudent";

interface Student {
  id: string;
  teacher_id: string | null;
  full_name: string;
  email: string;
  type: string;
  status: string;
}

interface ApiResponse {
  result: string;
  code: string;
  data: {
    user: Student[];
  };
}

export default function StudentTable() {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const {
    data: apiResponse = {} as ApiResponse,
    isLoading,
    isError,
  } = useDataStudent();

  const dataStudent = apiResponse?.data?.user || [];

  const totalPages = Math.ceil(dataStudent.length / rowsPerPage);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-3">
        <img src={Spinners} alt="spinner" className="w-10" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="font-bold text-center text-lg mt-3">
        Error loading data
      </div>
    );
  }

  const displayData = dataStudent.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const paginationNumbers = () => {
    const pageRange = [];
    const maxButtons = 5;

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageRange.push(i);
      }
    } else {
      if (page <= 3) {
        pageRange.push(1, 2, 3, 4, "...", totalPages);
      } else if (page > totalPages - 3) {
        pageRange.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageRange.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return pageRange;
  };

  const handleDetailClick = (id: string) => {
    setSelectedStudentId(id);  // Set student ID ketika detail diklik
  };

  // Handler untuk kembali ke tabel dari halaman detail
  const handleBack = () => {
    setSelectedStudentId(null);  // Kembalikan ke tabel
  };

  // Jika ada ID student yang dipilih, tampilkan halaman detail
  if (selectedStudentId) {
    const selectedStudent = dataStudent.find((student: { id: string; }) => student.id === selectedStudentId);
    return <DetailStudent student={selectedStudent} onBack={handleBack} />;
  }

  return (
    <div>
      <div className="mb-5 flex justify-between items-center">
        <h1 className="text-xl font-bold">Student List</h1>
        <SearchBar />
      </div>
      <div className="max-h-[500px] overflow-y-auto">
        <table className="table-auto w-full border">
          <thead className="border">
            <tr className="sticky top-0 bg-slate-50">
              <th className="border text-[12px] p-1">Id</th>
              <th className="border text-[12px] p-1">Name</th>
              <th className="border text-[12px] p-1">Email</th>
              <th className="border text-[12px] p-1">Type</th>
              <th className="border text-[12px] p-1">Status</th>
              <th className="border text-[12px] p-1 w-[100px]">Detail</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((student: Student) => (
              <tr key={student.id}>
                <td className="border capitalize p-2 text-center text-[12px]">
                  {student.teacher_id || "-"}
                </td>
                <td className="border capitalize p-2 text-[12px] bg-slate-100">
                  {student.full_name}
                </td>
                <td className="border p-2 text-[12px]">{student.email}</td>
                <td className="border capitalize p-2 text-center text-[12px] bg-slate-100">
                  {student.type}
                </td>
                <td className="border p-2 text-center text-[12px]">
                  <span
                    className={`px-2 py-1 rounded-md font-bold tracking-wide ${
                      student.status === "active"
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="border capitalize p-2 flex justify-center gap-5 bg-slate-100">
                  <button
                    className="border-2 border-slate-300 w-[25px] h-[25px] rounded-md flex justify-center bg-white items-center text-[12px] transition-all ease hover:border-[#125B9A]"
                    onClick={() => handleDetailClick(student.id)}
                  >
                    <FontAwesomeIcon
                      className="text-[#125B9A]"
                      icon={faEllipsisVertical}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 gap-3">
        <h1 className="text-[14px] text-slate-400">
          Showing {page} to {dataStudent.length} of {dataStudent.length}
        </h1>

        <div className="flex gap-5">
          <div className="flex gap-3 items-center text-[14px] text-slate-400">
            <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
              <option value={10}>10 rows</option>
              <option value={25}>25 rows</option>
              <option value={50}>50 rows</option>
            </select>
          </div>

          <div className="flex gap-3">
            {/* Previous button */}
            <button
              className="shadow-sm border-2 rounded-md capitalize bg-[#125B9A] text-slate-50 text-[12px] px-2 py-1 tracking-wide transition-all ease hover:border-[#125B9A] hover:text-[#125B9A] hover:bg-slate-50"
              onClick={() => handleChangePage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>

            {/* Pagination Numbers */}
            <div className="flex gap-2">
              {paginationNumbers().map((number, index) =>
                typeof number === "number" ? (
                  <button
                    key={index}
                    className={`shadow-sm border-2 rounded-md capitalize bg-slate-300 text-[#125B9A] text-[12px] w-[30px] py-1 tracking-wide transition-all ease hover:border-[#125B9A] hover:text-[#125B9A] hover:bg-slate-50 ${
                      page === number ? "bg-slate-50 text-[#125B9A]" : ""
                    }`}
                    onClick={() => handleChangePage(number)}
                  >
                    {number}
                  </button>
                ) : (
                  <span key={index} className="text-slate-500">
                    ...
                  </span>
                )
              )}
            </div>

            {/* Next button */}
            <button
              className="shadow-sm border-2 rounded-md capitalize bg-[#125B9A] text-slate-50 text-[12px] px-2 py-1 tracking-wide transition-all ease hover:border-[#125B9A] hover:text-[#125B9A] hover:bg-slate-50"
              onClick={() => handleChangePage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
