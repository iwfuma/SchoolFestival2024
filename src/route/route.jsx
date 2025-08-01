import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home";
import OneClickHome from "../views/oneClick/Home";
import Claim from "../views/oneClick/Claim";
import PhishingMail from "../views/phissing/phishingMail";
import LoginMail from "../views/phissing/login/mail";
import LoginPass from "../views/phissing/login/pass";
import Confirm from "../views/phissing/confirm/confirm";
import Login from "../views/Login";

const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* ログインページ */}
      <Route path="/login" element={<Login />} />

      {/* 認証必須ページ */}
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/oneclick" element={<PrivateRoute element={<OneClickHome />} />} />
      <Route path="/oneclick/claim" element={<PrivateRoute element={<Claim />} />} />
      <Route path="/phishing" element={<PrivateRoute element={<PhishingMail />} />} />
      <Route path="/phishing/login/email" element={<PrivateRoute element={<LoginMail />} />} />
      <Route path="/phishing/login/pass" element={<PrivateRoute element={<LoginPass />} />} />
      <Route path="/phishing/confirm" element={<PrivateRoute element={<Confirm />} />} />
    </Routes>
  );
};

export default AppRoutes;
