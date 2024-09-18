import axios from "axios";
import { BaseUrl } from "../BaseUrl";

const url = `${BaseUrl}/api-bimbelone/register`;

export const registerUser = async (data: {
  fullName: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(url, data)
  return response.data
}