import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegistroPage from "./pages/register";

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegistroPage />} />
    </Routes>
  );
};