import axios from "axios";
import { BaseUrl } from "../BaseUrl";

const url = `${BaseUrl}/api-bimbelone/registration`;

export const registerUser = async (data: {
  full_name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(url, data)
  return response.data
}