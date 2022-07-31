import React from 'react'
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useUserAuth();

  
    console.log("Check user in Private: ", user);
    if (!user.login) {
      return <Navigate to="/" />;
    }
    return children;
  };
  
  export default ProtectedRoute;