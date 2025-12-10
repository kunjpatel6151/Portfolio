import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from '../../pages/admin/Login';
import Dashboard from '../../pages/admin/Home';

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setLoading(false);
  }, []);

  if (loading) {
    return null;
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
}
