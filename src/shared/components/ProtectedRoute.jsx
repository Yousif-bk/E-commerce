import React from 'react'
import { Navigate } from "react-router-dom";
// import { AuthContextProvider } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    // const { user } = AuthContextProvider();
    const user = {login: false};

  
    console.log("Check user in Private: ", user);
    if (!user.login) {
      return <Navigate to="/" />;
    }
    return children;
  };
  
  export default ProtectedRoute;