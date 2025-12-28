import "../Styles/Authform.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { auth, googleProvider } from "../firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { verifyGoogleAuth } from "../utils/api";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../hooks/useToast";
import ToastContainer from "./ToastContainer";

function Authform() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toasts, toast, removeToast } = useToast();

  const [isRegister, setIsRegister] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectTo, setRedirectTo] = useState('/AiGenerator'); // Default redirect

  // Toggle between login and register forms
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  // Handle form submission
  const handleSubmit = (e) => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const toggleForm = () => setIsRegister((prev) => !prev);

  // ---------- SHARED BACKEND AUTH ----------
  const authenticateWithBackend = async (user) => {
    const idToken = await user.getIdToken(true);
    const backendResponse = await verifyGoogleAuth(idToken);

    // Save to Context (and localStorage internally)
    login(backendResponse);

    // Route based on profile completion
    if (!backendResponse.profileCompleted) {
      navigate("/profile-completion");
    } else {
      navigate("/profile");
    }
  };

  // ---------- EMAIL / PASSWORD ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Get form data
    const formData = new FormData(e.target);
    const email = formData.get('email') || document.getElementById(isRegister ? 'regEmail' : 'loginEmail')?.value;
    const name = isRegister ? (formData.get('username') || document.getElementById('regUsername')?.value) : null;
    
    // Simulate API call
    setTimeout(() => {

    try {
      if (isRegister) {
        if (!regEmail || !regPassword) {
          toast.error("Email and password required");
          return;
        }

        const res = await createUserWithEmailAndPassword(
          auth,
          regEmail,
          regPassword
        );

        await authenticateWithBackend(res.user);
      } else {
        if (!loginEmail || !loginPassword) {
          toast.error("Email and password required");
          return;
        }

        const res = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );

        await authenticateWithBackend(res.user);
      }
    } catch (error) {
      console.error(error);

      switch (error.code) {
        case "auth/invalid-email":
          toast.error("Invalid email address");
          break;
        case "auth/user-not-found":
          toast.error("User not found");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password");
          break;
        case "auth/email-already-in-use":
          toast.error("Email already registered");
          break;
        case "auth/weak-password":
          toast.error("Password must be at least 6 characters");
          break;
        default:
          toast.error(error.message || "Authentication failed");
      }
    } finally {
      setIsLoading(false);
      // Create user object and login
      const userData = {
        email: email,
        name: name || email?.split('@')[0] || 'User',
        loginMethod: 'email'
      };
      login(userData);
      // Navigate to selected page after successful login
      navigate(redirectTo);
    }, 1500);
  };

  // Handle Google authentication
  const handleGoogleAuth = () => {
    }
  };

  // ---------- GOOGLE AUTH ----------
  const handleGoogleAuth = async () => {
    if (isLoading) return;
    setIsLoading(true);
    
    // Simulate Google OAuth flow
    setTimeout(() => {

    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (!result.user) {
        throw new Error("Google sign-in failed");
      }

      await authenticateWithBackend(result.user);
    } catch (error) {
      console.error("Google auth error:", error);
      toast.error(error.message || "Google authentication failed");
    } finally {
      setIsLoading(false);
      // Create user object and login
      const userData = {
        email: 'user@gmail.com',
        name: 'Google User',
        loginMethod: 'google'
      };
      login(userData);
      // Navigate to selected page after successful Google auth
      navigate(redirectTo);
    }, 1500);
  };

  return (
    <div className="login-page-container">
      <div className={`wrapper ${isRegister ? "active" : ""} black-white-theme`}>
        {/* Login Form */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <div className={`wrapper ${isRegister ? "active" : ""}`}>
        {/* LOGIN */}
        <div className="form-box login">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                required
              />
              <label>Email</label>
            </div>

            <div className="input-box">
              <input
                type={showLoginPassword ? "text" : "password"}
                required
              />
              <label>Password</label>
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
              >
                <i className={`bx ${showLoginPassword ? "bx-hide" : "bx-show"}`}></i>
                {showLoginPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="forgot-password">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Forgot Password?
              </a>
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
            <button className="btn" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>

            <div className="google-auth">
              <div className="divider">
                <span>Or continue with</span>
              </div>
              <button 
                type="button" 
                className="btn-google"
                onClick={handleGoogleAuth}
                disabled={isLoading}
              >
                <FcGoogle /> Sign in with Google
              </button>
            </div>

            <div className="logreg-link">
              <p>
                Don&apos;t have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                  Register
                </a>
              </p>
            </div>
            <p className="logreg-link">
              Don&apos;t have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                Register
              </a>
            </p>
          </form>
        </div>

        {/* REGISTER */}
        <div className="form-box register">
          <h2 className="animation">Register</h2>
          <form className="animation" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                id="regUsername"
                name="username"
                type="text"
                placeholder=" "
                required
              />
              <label htmlFor="regUsername">Username</label>
              <i className="bx bxs-user"></i>
            </div>

          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                id="regEmail"
                name="email"
                type="email"
                placeholder=" "
                type="email"
                required
              />
              <label htmlFor="regEmail">Email</label>
              <i className="bx bxs-user"></i>
              <label>Email</label>
            </div>

            <div className="input-box">
              <input
                type={showRegisterPassword ? "text" : "password"}
                required
              />
              <label>Password</label>
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowRegisterPassword(!showRegisterPassword)}
              >
                <i className={`bx ${showRegisterPassword ? "bx-hide" : "bx-show"}`}></i>
                {showRegisterPassword ? "Hide" : "Show"}
              </button>
            </div>


            <button className="btn" type="submit" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>

            <div className="google-auth">
              <div className="divider">
                <span>Or sign up with</span>
              </div>
              <button 
                type="button" 
                className="btn-google"
                onClick={handleGoogleAuth}
                disabled={isLoading}
              >
                <FcGoogle /> Sign up with Google
              </button>
            </div>

            <div className="logreg-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                  Login
                </a>
              </p>
            </div>
            <p className="logreg-link">
              Already have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authform;