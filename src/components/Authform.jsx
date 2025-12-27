import "../Styles/Authform.css";
import { useState } from "react";

function Authform() {
  const [isRegister, setIsRegister] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Toggle between login and register forms
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Reset form or show success message
    }, 2000);
  };

  return (
    <div className={`wrapper ${isRegister ? "active" : ""} black-white-theme`}>
      {/* Login Form */}
      <div className="form-box login">
        <h2 className="animation">Login</h2>
        <form className="animation" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              id="loginEmail"
              type="email"
              placeholder=" "
              required
            />
            <label htmlFor="loginEmail">Email</label>
            <i className="bx bxs-envelope"></i>
            <span className="error-message"></span>
          </div>

          <div className="input-box">
            <input
              id="loginPassword"
              type={showLoginPassword ? "text" : "password"}
              placeholder=" "
              required
            />
            <label htmlFor="loginPassword">Password</label>
            <i className="bx bxs-lock-alt"></i>
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
            >
              <i className={`bx ${showLoginPassword ? "bx-hide" : "bx-show"}`}></i>
            </button>
            <span className="error-message"></span>
          </div>

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
          <div className="logreg-link">
            <p>
              Don&apos;t have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <h2 className="animation">Register</h2>
        <form className="animation" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              id="regUsername"
              type="text"
              placeholder=" "
              required
            />
            <label htmlFor="regUsername">Username</label>
            <i className="bx bxs-user"></i>
            <span className="error-message"></span>
          </div>

          <div className="input-box">
            <input
              id="regMobile"
              type="tel"
              placeholder=" "
              required
            />
            <label htmlFor="regMobile">Mobile Number</label>
            <i className="bx bxs-phone"></i>
            <span className="error-message"></span>
          </div>

          <div className="input-box">
            <input
              id="regEmail"
              type="email"
              placeholder=" "
              required
            />
            <label htmlFor="regEmail">Email</label>
            <i className="bx bxs-envelope"></i>
            <span className="error-message"></span>
          </div>

          <div className="input-box">
            <input
              id="regPassword"
              type={showRegisterPassword ? "text" : "password"}
              placeholder=" "
              required
            />
            <label htmlFor="regPassword">Password</label>
            <i className="bx bxs-lock-alt"></i>
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowRegisterPassword(!showRegisterPassword)}
            >
              <i className={`bx ${showRegisterPassword ? "bx-hide" : "bx-show"}`}></i>
            </button>
            <span className="error-message"></span>
          </div>

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>
          <div className="logreg-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Info Texts */}
      <div className="info-text login">
        <h2 className="animation">Welcome Back!</h2>
        <p className="animation">
          To keep connected with us please login with your personal info.
        </p>
      </div>
      <div className="info-text register">
        <h2 className="animation">Hello, Friend!</h2>
        <p className="animation">
          Enter your personal details and start your journey with us.
        </p>
      </div>

      {/* Background Animations */}
      <div className="bg-animate"></div>
      <div className="bg-animate2"></div>
    </div>
  );
}

export default Authform;