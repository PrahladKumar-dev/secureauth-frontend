import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./Auth.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/auth/profile");
        setUser(res.data.user || res.data);
      } catch (err) {
        navigate("/login");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await API.post("/auth/logout");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>SecureAuth Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <h1>Welcome back  {user ? user.name : "Loading..."}</h1>

        <p>
          You are successfully authenticated using a secure JWT-based
          authentication system.
        </p>
        <p className="project-description">
          This SecureAuth application is a full-stack authentication system
          built using the MERN stack. It implements secure JWT-based login,
          protected routes, HTTP-only cookie storage, and backend validation
          using Node.js and Express. The project demonstrates real-world
          authentication flow, session handling, and secure API communication
          between client and server.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
