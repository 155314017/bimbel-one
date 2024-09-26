import { useMutation } from "react-query";
import { BaseUrl } from "../BaseUrl";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

const url = `${BaseUrl}/api-bimbelone/login`;

interface LoginData {
  email: string;
  password: string;
}

interface User {
  id: string;
  teacher_id: string | null;
  full_name: string;
  email: string;
  access_token: string;
  type: string;
  status: string;
}

interface LoginResponse {
  result: string;
  code: string;
  data: {
    user: User[];
  };
}

const loginUser = async (loginData: LoginData): Promise<User[]> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      url,
      loginData
    );

    const users = response.data.data.user;

    if (users.length > 0) {
      // Simpan access_token ke cookies
      Cookies.set("access_token", users[0].access_token, {
        expires: 1, // Expired dalam 1 hari
        secure: true, // Pastikan secure cookie untuk HTTPS
        sameSite: 'strict', // Mencegah pengiriman cookie di context pihak ketiga
      });
    }
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// login mutation
export const LoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
