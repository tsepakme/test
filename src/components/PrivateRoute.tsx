import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("auth_token");
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;