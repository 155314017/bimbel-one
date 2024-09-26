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

    const responseText = await response.text(); // Dapatkan respons sebagai teks
    console.log("Response Text:", responseText); // Logging respons untuk debugging

    try {
      const data = JSON.parse(responseText); // Parse sebagai JSON
      return data;
    } catch (parseError) {
      console.error("Failed to parse JSON:", parseError);
      throw new Error("Invalid JSON response");
    }
  } catch (error) {
    console.error("Failed to fetch data teacher:", error);
    throw error; // Re-throw error agar react-query bisa menanganinya
  }
};

export const useDataTeacher = () => {
  return useQuery("data-student", fetchDataTeacher, {
    staleTime: 300000, // cache data for 5 minutes
    retry: 1, // retry once on failure
    onError: (error) => {
      console.error("Error fetching data student:", error);
    },
  });
};
