import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div className="text-center">Please Wait..........</div>;
  }
  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoutes;
