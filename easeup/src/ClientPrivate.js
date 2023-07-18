import React from "react";
import { Navigate, Outlet } from "react-router";

const ClientPrivate = ({ element: Component, ...rest }) => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);
  console.log(userInfo)

  const isAuthenticated = userInfo?.approval === "chosen";

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }

 


  // return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ClientPrivate;
