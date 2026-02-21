import React from "react";
import { useLocation } from "react-router-dom"; // ← 追加
import AppRoutes from "./route/route";
import TopBar from "./component/layout/Topbar";
import "./styles/global/App.css";

function App() {
  const location = useLocation();

  const shouldHideTopBar = location.pathname === "/login";

  return (
    <div className="app">
      {!shouldHideTopBar && <TopBar />}
      <AppRoutes />
    </div>
  );
}

export default App;
