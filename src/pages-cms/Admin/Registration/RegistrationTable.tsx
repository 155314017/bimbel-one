import SearchBar from "../../../components/small/SearchBar";
import { useState } from "react";
import { useDataRegistrasi } from "../../../services/API/cms/FetchDataRegistrasi";
import { Toaster, toast } from "react-hot-toast";

interface User {
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
    user: User[];
  };
}

export default function RegistrationTable() {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const {
    data: apiResponse = {} as ApiResponse,
    isLoading,
    isError,
  } = useDataRegistrasi();

  const dataRegis = apiResponse?.data?.user || [];
  const totalPages = Math.ceil(dataRegis.length / rowsPerPage);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    toast.error("Failed to fetch data");
    return <div>Error loading data</div>;
  }

  const displayData = Array.isArray(dataRegis)
    ? dataRegis.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    : [];

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

  return (
    <div>
      <Toaster />
      <div className="mb-5 flex justify-between items-center">
        <h1 className="text-xl font-bold">Registration List</h1>
        <SearchBar />
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr className="sticky top-0 bg-slate-50">
              <th className="border text-[12px] p-1">Id</th>
              <th className="border text-[12px] p-1">Name</th>
              <th className="border text-[12px] p-1">Email</th>
              <th className="border text-[12px] p-1">Type</th>
              <th className="border text-[12px] p-1">Status</th>
              <th className="border text-[12px] p-1 w-[120px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((user: User, index: number) => (
              <tr key={index}>
                <td className="border capitalize p-2 text-center text-[12px]">
                  {user.teacher_id || "N/A"}
                </td>
                <td className="border capitalize p-2 text-[12px] bg-slate-100">
                  {user.full_name}
                </td>
                <td className="border p-2 text-[12px]">{user.email}</td>
                <td className="border uppercase p-2 text-center text-[12px] bg-slate-100">
                  {user.type || "N/A"}
                </td>
                <td className="border p-2 text-center text-[12px]">
                  <span
                    className={`px-2 py-1 rounded-md font-bold tracking-wide lowercase ${
                      user.status === "active"
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="border capitalize p-2 flex justify-center gap-5 bg-slate-100">
                  <button className="border-2 rounded-md capitalize bg-[#125B9A] text-slate-50 text-[12px] px-2 py-1 tracking-wide transition-all ease hover:border-[#125B9A] hover:text-[#125B9A] hover:bg-slate-50">
                    activate
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
          Showing {page} to {displayData.length} of {displayData.length}
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
          {/* previous button */}
          <button
            className="shadow-sm border-2 rounded-md capitalize bg-[#125B9A] text-slate-50 text-[12px] px-2 py-1 tracking-wide transition-all ease hover:border-[#125B9A] hover:text-[#125B9A] hover:bg-slate-50"
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          {/* Angka Pagination */}
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

          {/* next button */}
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
