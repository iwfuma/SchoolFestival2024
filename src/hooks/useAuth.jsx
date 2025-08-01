import { useState, useEffect } from "react";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const key = import.meta.env.VITE_LOGIN_KEY;
    const value = import.meta.env.VITE_LOGIN_VALUE;
    const stored = localStorage.getItem("auth");
    if (stored === `${key}:${value}`) {
      setAuthenticated(true);
    }
  }, []);

  return { authenticated };
};
