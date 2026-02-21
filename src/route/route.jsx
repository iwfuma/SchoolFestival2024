import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import OneClickHome from "../pages/oneClick/Home";
import Claim from "../pages/oneClick/Claim";
import PhishingMail from "../pages/phissing/phishingMail";
import LoginMail from "../pages/phissing/login/mail";
import LoginPass from "../pages/phissing/login/pass";
import Confirm from "../pages/phissing/confirm/confirm";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      {/* ログインページ */}
      <Route path="/login" element={<Login />} />

      {/* 認証必須ページ */}
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route
        path="/oneclick"
        element={<PrivateRoute element={<OneClickHome />} />}
      />
      <Route
        path="/oneclick/claim"
        element={<PrivateRoute element={<Claim />} />}
      />
      <Route
        path="/phishing"
        element={<PrivateRoute element={<PhishingMail />} />}
      />
      <Route
        path="/phishing/login/email"
        element={<PrivateRoute element={<LoginMail />} />}
      />
      <Route
        path="/phishing/login/pass"
        element={<PrivateRoute element={<LoginPass />} />}
      />
      <Route
        path="/phishing/confirm"
        element={<PrivateRoute element={<Confirm />} />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
