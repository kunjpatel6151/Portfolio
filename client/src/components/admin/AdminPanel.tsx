import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../../pages/admin/Login";
import Dashboard from "../../pages/admin/Home";

const AdminPanel: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem("adminLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
      setLoading(false);
    };

    // Check auth on mount
    checkAuth();

    // Listen for storage changes (in case login happens in another tab/window)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "adminLoggedIn") {
        checkAuth();
      }
    };

    // Listen for custom login event
    const handleLoginSuccess = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("adminLoginSuccess", handleLoginSuccess);

    // Also check periodically in case localStorage is set in the same tab
    const interval = setInterval(checkAuth, 200);

    // Clear interval after 3 seconds to avoid unnecessary checks
    setTimeout(() => clearInterval(interval), 3000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("adminLoginSuccess", handleLoginSuccess);
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-cyan-400 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Login route - always accessible */}
      <Route path="login" element={<Login />} />

      {/* Protected routes */}
      {isLoggedIn ? (
        <>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </>
      ) : (
        <>
          {/* Redirect all protected routes to login */}
          <Route path="dashboard" element={<Navigate to="login" replace />} />
          <Route path="/" element={<Navigate to="login" replace />} />
          <Route path="*" element={<Navigate to="login" replace />} />
        </>
      )}
    </Routes>
  );
};

export default AdminPanel;
