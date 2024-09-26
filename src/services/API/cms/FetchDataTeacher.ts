import { useQuery } from "react-query";
import { BaseUrl } from "../BaseUrl";
import Cookies from "js-cookie";

const fetchDataTeacher = async () => {
  const accessToken = Cookies.get("access_token");

  if (!accessToken) {
    throw new Error("Access token not found");
  }

  try {
    const response = await fetch(`${BaseUrl}/api-bimbelone/data-teacher`, {
      method: "GET",
      headers: {
        "Access-Token": accessToken,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error fetching data: ", errorText);
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    try {
      const data = await response.json();
      return data;
    } catch (parseError) {
      // If parsing fails, log the error
      console.error("Failed to parse JSON:", parseError);
      throw new Error("Invalid JSON response");
    }
  } catch (error) {
    console.error("Failed to fetch data student:", error);
    throw error; // Re-throw the error for react-query to handle it
  }
};

export const useDataTeacher = () => {
  return useQuery("data-teacher", fetchDataTeacher, {
    staleTime: 300000, // cache data for 5 minutes
    retry: 1, // retry once on failure
    onError: (error) => {
      console.error("Error fetching data student:", error);
    },
  });
};
