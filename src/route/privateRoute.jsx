import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
