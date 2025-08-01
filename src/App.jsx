import React from "react";
import AppRoutes from "./route/route";
import TopBar from "./component/layout/Topbar"
import "./App.css";

function App() {
  return (
    <div className="app">
      <TopBar />
      <AppRoutes />
    </div>
  );
}

export default App;
