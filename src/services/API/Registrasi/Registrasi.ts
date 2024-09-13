/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {BaseUrl} from "../BaseUrl";

const url = `${BaseUrl}/api-bimbelone/registration`;
const api = axios.create({
  url,
  headers: { "Content-Type": "application/json" },
});

export const RegistrationUser = async (userData: any) => {
  try {
    const response = await api.post(url, userData);
    return response.data;
    
  } catch (error: any) {
    throw new error(
      error.response ? error.response.data.message : error.message
    );
  }
};
