import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { AuthResponse } from "../services/authService";

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthResponse["user"] | null;
  token: string | null;
  login: (response: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthResponse["user"] | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for saved auth state on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (response: AuthResponse) => {
    setUser(response.user);
    setToken(response.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
