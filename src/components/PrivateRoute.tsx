import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "./../redux/authSlice";

const PrivateRoute = ({ children }: { children: any }) => {
  const { token } = useSelector(selectAuth);

  return token ? children : <Navigate to="/reg" />;
};

export default PrivateRoute;
