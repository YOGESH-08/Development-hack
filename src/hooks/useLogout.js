import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/useToast";

const useLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      // 1️⃣ Firebase logout
      await signOut(auth);

      // 2️⃣ Clear AuthContext + localStorage
      logout();

      // 3️⃣ Redirect to login
      navigate("/login", { replace: true });

      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return handleLogout;
};

export default useLogout;
