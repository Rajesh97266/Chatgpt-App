import { useRef } from "react";
import "./chatpage.css";
import { useEffect } from "react";

const ChatPage = () => {

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])


  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Text Message</div>
          <div className="message user">
            User Message Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur ratione unde amet dolor cupiditate tempore, ut fugiat.
            Architecto illum et distinctio ipsa expedita odio debitis autem.
            Fugit laboriosam ab quis!
          </div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div className="message">Text Message</div>
          <div className="message user">
            User Message Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur ratione unde amet dolor cupiditate tempore, ut fugiat.
            Architecto illum et distinctio ipsa expedita odio debitis autem.
            Fugit laboriosam ab quis!
          </div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div className="message">Text Message</div>
          <div className="message user">
            User Message Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur ratione unde amet dolor cupiditate tempore, ut fugiat.
            Architecto illum et distinctio ipsa expedita odio debitis autem.
            Fugit laboriosam ab quis!
          </div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div className="message">Text Message</div>
          <div className="message user">User Message</div>
          <div ref={endRef} /> 
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
