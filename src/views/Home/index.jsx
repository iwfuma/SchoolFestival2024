import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

    const handleTetrisClick = () => {
      window.location.href = "https://iwfuma.github.io/new_tetris/";
    }


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>2024 学園祭 ホーム</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "200px", margin: "0 auto" }}>
        <button onClick={() => navigate("/oneclick")}>One Click Home</button>
        <button onClick={() => navigate("/phishing")}>Phishing Mail</button>
        <button onClick={handleTetrisClick}>tetris</button>
      </div>
    </div>
  );
};

export default Home;
