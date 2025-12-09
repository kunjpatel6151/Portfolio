import { useState, useEffect } from "react";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in on component mount
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");
    setIsLoggedIn(!!adminLoggedIn);
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Hardcoded credentials for now
    if (username === "admin" && password === "admin") {
      localStorage.setItem("adminLoggedIn", "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout, loading };
}
