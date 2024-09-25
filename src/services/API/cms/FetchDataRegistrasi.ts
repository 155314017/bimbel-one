import { useQuery } from "react-query";
import { BaseUrl } from "../BaseUrl";

const fetchDataRegistrasi = async () => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    throw new Error("Access token not found");
  }

  const response = await fetch(`${BaseUrl}/api-bimbelone/data-registration`, {
    method: "POST",
    headers: {
      "Access-Token": accessToken,
    },
    body: JSON.stringify({ access_token: accessToken }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useDataRegistrasi = () => {
  return useQuery("dataRegistrasi", fetchDataRegistrasi, {
    staleTime: 300000, // cache data for 5 minutes
    retry: 1, // retry once on failure
    onError: (error) => {
      console.error("Error fetching data registrasi:", error);
    },
  });
};
