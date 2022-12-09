import ChatRoom from "../components/ChatRoom";
import { Authorize } from "../components/Authorize";
import Header from "../components/Header";

export const ChatPage = () => {
  return (
    <Authorize>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "max-content 1fr",
          width: "100%",
          height: "100%",
          minWidth: 0,
          minHeight: 0,
        }}
      >
        <Header />
        <ChatRoom />
      </div>
    </Authorize>
  );
};
