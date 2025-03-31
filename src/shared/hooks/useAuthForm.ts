import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockAuth } from "../../shared/api/auth";
import { useAuth } from "../../context/AuthContext";

export const useAuthForm = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await mockAuth(email, password);
      setMessage(response.message);
      if (response.token) {
        login(response.token, email);
        navigate("/dashboard");
        return true;
      }
      return false;
    } catch (error) {
      setMessage(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleCapsLock = (e: React.KeyboardEvent) => {
    setCapsLockOn(e.getModifierState("CapsLock"));
  };

  return {
    message,
    isLoading,
    capsLockOn,
    handleLogin,
    handleCapsLock,
  };
};
