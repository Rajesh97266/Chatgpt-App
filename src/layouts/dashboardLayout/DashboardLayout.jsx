import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";
import { useAuth } from "@clerk/react-router";
import { useEffect } from "react";
import ChatList from "../../components/chatList/ChatList/";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const auth = useAuth();
  console.log(auth);
  const navigate = useNavigate();
  console.log(userId);


  

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);




  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="dashboardLayout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
