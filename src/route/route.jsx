import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import OneClickHome from "../views/oneClick/Home";
import Claim from "../views/oneClick/Claim";
import PhishingMail from "../views/phissing/phishingMail";
import LoginMail from "../views/phissing/login/mail";
import LoginPass from "../views/phissing/login/pass";
import Confirm from "../views/phissing/confirm/confirm";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/oneclick" element={<OneClickHome />} />
      <Route path="/oneclick/claim" element={<Claim/>}/>

      <Route path="/phishing" element={<PhishingMail />} />
      <Route path="/phishing/login/email" element={<LoginMail/>}/>
      <Route path="/phishing/login/pass" element={<LoginPass/>}/>
      <Route path="/phishing/confirm" element={<Confirm/>}/>


    </Routes>
  );
};

export default AppRoutes;
