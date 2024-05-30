import { useState } from "react";
import { useAuthContext } from "~src/hooks/useAuthContext";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await loginUser(email, password);
      localStorage.setItem("userInfo", JSON.stringify(response));
      if (response) {
        dispatch({ type: "LOGIN", payload: response });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, signIn };
};
