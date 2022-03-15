import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/BasicContext";

const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  console.log("auth", auth);
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return children;
};
export default RequireAuth;
