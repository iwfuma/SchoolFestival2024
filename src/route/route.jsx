import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import OneClickHome from "../views/oneClick/oneClickHome";
import PhishingMail from "../views/phissing/phishingMail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oneclick" element={<OneClickHome />} />
      <Route path="/phishing" element={<PhishingMail />} />
    </Routes>
  );
};

export default AppRoutes;
