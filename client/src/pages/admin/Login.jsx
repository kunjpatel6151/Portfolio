import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('adminLoggedIn', 'true');
        setTimeout(() => navigate('/admin/dashboard', { replace: true }), 300);
      } else {
        setError(data.message || 'Invalid credentials');
        setLoading(false);
      }
    } catch (err) {
      setError('Connection failed. Ensure backend is running on localhost:5000');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Blob 1 */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl" style={{animation: 'blob 7s infinite'}}></div>
        
        {/* Floating Blob 2 */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl" style={{animation: 'blob 7s infinite', animationDelay: '2s'}}></div>
        
        {/* Floating Blob 3 */}
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl" style={{animation: 'blob 7s infinite', animationDelay: '4s'}}></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Animated Glass Card */}
        <div
          className={`backdrop-blur-xl bg-white/15 rounded-3xl shadow-2xl border border-white/25 p-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:shadow-3xl hover:border-white/40 hover:bg-white/20`}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent mb-2" style={{animation: 'fadeIn 0.8s ease-out'}}>
              Admin Portal
            </h1>
            <p className="text-white/70 text-sm font-medium tracking-wide" style={{animation: 'fadeIn 0.8s ease-out 0.1s both'}}>
              Secure Access Panel
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/20 backdrop-blur border border-red-400/30" style={{animation: 'slideDown 0.4s ease-out'}}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
                <p className="text-red-100 text-sm font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5" style={{animation: 'fadeIn 0.8s ease-out 0.2s both'}}>
            {/* Username Field */}
            <div className="group">
              <label className="block text-white/80 text-sm font-semibold mb-3 tracking-wide">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full px-5 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-white/40 transition-all duration-200"
                required
              />
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-white/80 text-sm font-semibold mb-3 tracking-wide">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-5 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-white/40 transition-all duration-200"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 relative group py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed hover:scale-105 transform"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100" style={{animation: 'shimmer 2s infinite'}}></div>
              
              {/* Text */}
              <span className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" style={{animation: 'spin 0.6s linear infinite'}}></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/15 text-center" style={{animation: 'fadeIn 0.8s ease-out 0.3s both'}}>
            <p className="text-white/60 text-xs font-medium tracking-wide">
              Default Credentials:{' '}
              <span className="text-pink-200 font-mono bg-white/10 px-2 py-1 rounded-md">
                admin / admin
              </span>
            </p>
          </div>
        </div>

        {/* Floating Glow Orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-500/20 rounded-full filter blur-3xl" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '1s'}}></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full filter blur-3xl" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '2s'}}></div>
      </div>

      {/* Tailwind Animation Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
}
