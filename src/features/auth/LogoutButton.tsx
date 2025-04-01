import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/");
  };

  return <Button onClick={handleLogout} className="cursor-pointer">Logout 🚪</Button>;
};