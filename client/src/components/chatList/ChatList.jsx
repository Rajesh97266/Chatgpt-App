import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./chatList.css";

const ChatList = () => {
   const { isPending, error, data } = useQuery({
     queryKey: ["userChats"],
     queryFn: () =>
       fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
         credentials: "include",
       }).then((res) => res.json()),
   });
  return (
    <div className="chatList">
      <span>DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Chat GPT</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Chat GPT Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
