import { createContext, useContext, useEffect, ReactNode } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuthStore } from "../stores/authStore";
import { userService } from "../services/firebase";
interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  error: string | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { setUser, setLoading, setError } = useAuthStore();
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          // User is signed in
          const userProfile = await userService.getUserProfile(firebaseUser.uid);
          if (!userProfile) {
            // Create new user profile if it doesn't exist
            await userService.createUserProfile(firebaseUser.uid, {
              id: firebaseUser.uid,
              email: firebaseUser.email || "",
              name: firebaseUser.displayName || "",
              avatar: firebaseUser.photoURL || "",
            });
          }
          setUser({
            id: firebaseUser.uid,
            email: firebaseUser.email || "",
            name: firebaseUser.displayName || "",
            avatar: firebaseUser.photoURL || "",
            createdAt: new Date().toISOString(),
          });
        } else {
          // User is signed out
          setUser(null);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "Authentication error";
        setError(message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [setUser, setLoading, setError]);
  return (
    <AuthContext.Provider value={{ user: null, loading: false, error: null }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
