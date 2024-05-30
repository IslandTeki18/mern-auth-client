import axios from "axios";

export const signUpUser = async (
  email: string,
  password: string,
  name: string
) => {
  const response = await axios.post(
    `${process.env.DEV_URL}/api/users/signup`,
    {
      name,
      email,
      password,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};
