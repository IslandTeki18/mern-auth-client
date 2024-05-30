import { useState } from "react";
import { useAuthContext } from "~src/hooks/useAuthContext";
import { signUpUser } from "../api";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signUp = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await signUpUser(email, password, name);
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

  return { error, isLoading, signUp };
};
