import { useQuery } from "react-query";
import { BaseUrl } from "../BaseUrl";

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

const fetchDataStudent = async (): Promise<ApiResponse> => {
  const accessToken = localStorage.getItem("access_token");
  console.log(accessToken);
  

  if (!accessToken) {
    throw new Error("Access token not found");
  }

  const response = await fetch(`${BaseUrl}/api-bimbelone/data-student`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Access-Token": accessToken,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useDataStudent = () => {
  return useQuery("data-student", fetchDataStudent, {
    staleTime: 300000, // cache data for 5 minutes
    retry: 1, // retry once on failure
    onError: (error) => {
      console.error("Error fetching data student:", error);
    },
  });
};
