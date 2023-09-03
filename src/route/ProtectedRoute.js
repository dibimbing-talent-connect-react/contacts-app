import React from "react";
import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isLogin = Cookies.get("access_token");

  if (!isLogin) {
    alert("Please login first");
  }

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
