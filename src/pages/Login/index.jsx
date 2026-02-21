// src/pages/Login/index.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const envKey = import.meta.env.VITE_LOGIN_KEY;
    const envValue = import.meta.env.VITE_LOGIN_PASSWORD;

    if (key === envKey && value === envValue) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      setError("ログイン情報が正しくありません");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>ログイン</h2>
      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>ログイン</button>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default Login;
