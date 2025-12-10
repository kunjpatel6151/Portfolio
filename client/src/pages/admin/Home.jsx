import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!loggedIn) {
      navigate('/admin/login', { replace: true });
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login', { replace: true });
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-300 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gray-200 text-gray-900 text-sm font-medium rounded hover:bg-gray-300 transition-colors"
        >
          Sign out
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="bg-white border border-gray-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome Admin</h2>
          <p className="text-gray-700 text-lg mb-2">You are logged in successfully.</p>
          <p className="text-gray-600">More features coming soon...</p>
        </div>
      </div>
    </div>
  );
}
