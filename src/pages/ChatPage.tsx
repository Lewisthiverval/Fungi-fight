import ChatRoom from "../components/ChatRoom";
import { Authorize } from "../components/Authorize";
import Header from "../components/Header";

export const ChatPage = () => {
  return (
    <Authorize>
      <div className="chat-page">
        <Header />
        <ChatRoom />
      </div>
    </Authorize>
  );
};
