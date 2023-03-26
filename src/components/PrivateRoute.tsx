import React from "react";
import { Navigate } from "react-router-dom";
import { selectAuth } from "./../redux/authSlice";
import { useAppSelector } from './../redux/state';

const PrivateRoute = ({ children }: { children: any }) => {
  const { token } = useAppSelector(selectAuth);

  return token ? children : <Navigate to="/reg" />;
};

export default PrivateRoute;
