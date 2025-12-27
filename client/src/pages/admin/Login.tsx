import { useState, useEffect } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Set localStorage first
        localStorage.setItem("adminLoggedIn", "true");

        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent("adminLoginSuccess"));

        // Small delay to ensure localStorage is set before navigation
        setTimeout(() => {
          navigate("/admin/dashboard", { replace: true });
        }, 100);
      } else {
        setError(data.message || "Invalid credentials");
        setLoading(false);
      }
    } catch (err) {
      setError(
        "Connection failed. Ensure backend is running on localhost:5000"
      );
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      {/* Spline 3D Background */}
      <div className="spline-background">
        {/* @ts-ignore */}
        <spline-viewer
          loading-anim-type="spinner-small-dark"
          url="https://prod.spline.design/z3DhAumooiH3XWS2/scene.splinecode"
        >
          {/* @ts-ignore */}
          <img
            src="data:image/png;base64,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"
            alt="Spline preview"
            style={{ width: "100%", height: "100%" }}
          />
          {/* @ts-ignore */}
        </spline-viewer>
        {/* Overlay for better text readability */}
        <div className="spline-overlay"></div>
      </div>

      {/* Admin Login Box */}
      <div className="admin-login-box">
        <div className={`login-card ${mounted ? "login-card--mounted" : ""}`}>
          {/* Subtle Glow Effect */}
          <div className="login-card__glow"></div>

          {/* Animated Border */}
          <div className="login-card__border"></div>

          {/* Header */}
          <div className="login-header">
            <div className="login-title">
              <h1>ACCESS</h1>
              <div className="login-title__underline"></div>
            </div>
            <p className="login-subtitle">SECURE ADMIN PORTAL</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="error-message">
              <div className="error-message__content">
                <div className="error-icon"></div>
                <p>{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Username Field */}
            <div className="form-group">
              <label className="form-label">Username</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                  }
                  placeholder="admin"
                  className="form-input"
                  required
                />
                <div className="input-indicator"></div>
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  className="form-input"
                  required
                />
                <div className="input-indicators">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="input-indicator"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Access Button */}
            <button type="submit" disabled={loading} className="login-button">
              <div className="login-button__background"></div>
              <div className="login-button__waves">
                <div className="wave"></div>
                <div className="wave wave--delayed"></div>
              </div>
              <span className="login-button__text">
                {loading ? (
                  <>
                    <div className="spinner">
                      <div className="spinner__inner"></div>
                    </div>
                    <span>ACCESSING...</span>
                  </>
                ) : (
                  <>
                    <span>GRANT ACCESS</span>
                    <svg
                      className="arrow-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Footer */}
          <div className="login-footer">
            <p className="login-footer__text">
              DEFAULT CREDENTIALS:{" "}
              <span className="credentials">admin / admin</span>
            </p>
          </div>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style>{`
        /* ============================================
           ADMIN LOGIN PAGE - MODERN GLASSMORPHISM
           ============================================ */

        /* Container - Full viewport with Flexbox centering */
        .admin-login-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Spline Background - Full coverage */
        .spline-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .spline-background spline-viewer {
          width: 100% !important;
          height: 100% !important;
          background: transparent !important;
        }

        .spline-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          pointer-events: none;
        }

        /* Admin Login Box - Flexbox centered */
        .admin-login-box {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 420px;
          padding: 0 1rem;
        }

        /* Login Card - Glassmorphism design */
        .login-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }

        .login-card--mounted {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .login-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow:
            0 35px 60px -12px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        /* Glow and Border Effects */
        .login-card__glow {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 51, 234, 0.1) 50%,
            rgba(236, 72, 153, 0.1) 100%);
          filter: blur(20px);
          opacity: 0.6;
          z-index: -1;
        }

        .login-card__border {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg,
            rgba(59, 130, 246, 0.3) 0%,
            rgba(147, 51, 234, 0.3) 50%,
            rgba(236, 72, 153, 0.3) 100%);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
          animation: borderGlow 3s ease-in-out infinite;
        }

        /* Header Styles */
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-title h1 {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg,
            #60a5fa 0%,
            #a855f7 50%,
            #ec4899 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.75rem;
          letter-spacing: 0.05em;
        }

        .login-title__underline {
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg,
            #60a5fa 0%,
            #a855f7 50%,
            #ec4899 100%);
          border-radius: 1px;
          opacity: 0.6;
        }

        .login-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          margin-top: 1rem;
        }

        /* Error Message */
        .error-message {
          margin-bottom: 1.5rem;
          padding: 1rem;
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(239, 68, 68, 0.3);
          animation: slideDown 0.4s ease-out;
        }

        .error-message__content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .error-icon {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .error-message p {
          color: #fca5a5;
          font-size: 0.875rem;
          font-weight: 500;
          margin: 0;
        }

        /* Form Styles */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .input-wrapper {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-input:focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-input:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .input-indicator {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #60a5fa;
          opacity: 0.6;
          animation: blink 1s infinite;
        }

        .input-indicators {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 2px;
        }

        /* Button Styles */
        .login-button {
          position: relative;
          width: 100%;
          margin-top: 2rem;
          padding: 0;
          border: none;
          background: none;
          border-radius: 8px;
          font-weight: 600;
          color: white;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-button:not(:disabled):hover {
          transform: scale(1.02);
        }

        .login-button__background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            #3b82f6 0%,
            #8b5cf6 50%,
            #ec4899 100%);
          transition: all 0.3s ease;
        }

        .login-button__waves {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .login-button:hover .login-button__waves {
          opacity: 1;
        }

        .wave {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%);
          animation: wave 1.5s infinite;
        }

        .wave--delayed {
          animation-delay: 0.3s;
        }

        .login-button__text {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
        }

        .spinner {
          position: relative;
          width: 20px;
          height: 20px;
        }

        .spinner__inner {
          position: absolute;
          inset: 0;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        .spinner__inner::before {
          content: '';
          position: absolute;
          inset: -2px;
          border: 1px solid rgba(59, 130, 246, 0.5);
          border-radius: 50%;
          animation: spin 0.6s linear infinite reverse;
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .login-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Footer */
        .login-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
        }

        .login-footer__text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .credentials {
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Monaco', 'Menlo', monospace;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Animations */
        @keyframes borderGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
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

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }

        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 640px) {
          .admin-login-box {
            max-width: 100%;
            padding: 0 1rem;
          }

          .login-card {
            padding: 1.5rem;
          }

          .login-title h1 {
            font-size: 2rem;
          }

          .form-input {
            padding: 0.875rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 1.25rem;
          }

          .login-title h1 {
            font-size: 1.75rem;
          }

          .login-subtitle {
            font-size: 0.8125rem;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .login-card {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .login-card,
          .error-message,
          .login-button,
          .input-indicator,
          .login-card__border,
          .wave {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
