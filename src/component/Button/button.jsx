import React from "react";

const Button = ({ children, onClick, style = {}, ...props }) => {
  const defaultStyle = {
    padding: "12px 24px",
    backgroundColor: "#ff9900",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    ...style, // 上書き可能
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#e68a00";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#ff9900";
  };

  return (
    <button
      onClick={onClick}
      style={defaultStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
