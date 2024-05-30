import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(
    `${process.env.DEV_URL}/api/users/login`,
    {
      email,
      password,
    },
    {
      headers: {"Content-Type": "application/json"},
    }
  );
  return response.data;
};
