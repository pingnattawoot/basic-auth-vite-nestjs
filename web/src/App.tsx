import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import "./styles/auth.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
