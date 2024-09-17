/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useMutation } from "react-query";
import { BaseUrl } from "../BaseUrl";

const url = `${BaseUrl}/api-bimbelone/register`;

export interface RegistrationData {
  full_name: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
  code: string;
  result?: string;
}

export const registerUser = async (
  registrationData: RegistrationData
): Promise<RegistrationResponse> => {
  try {
    const response = await axios.post(url, registrationData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('API Error:', error.response.data);
    } else {
      console.error('Unknown Error:', error);
    }
    throw error;
  }
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onError: (error: any) => {
      console.error('Registration failed:', error);
    },
    onSuccess: (data: any) => {
      console.log('Registration successful:', data);
    },
  });
};
