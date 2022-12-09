import React, { useEffect, useRef, useState } from "react";
import { fireDb, Message } from "../data";
import "./ChatRoom.css";

import { useAppState } from "../store";

export default function ChatRoom({}: {}) {
  const [value, setValue] = useState("");
  const [chat, setChat] = useState<Message[]>([]);
  const ref = useRef(null);

  const user = useAppState((x) => x.user);

  useEffect(() => {
    fireDb.getDbChat().then(setChat);
  }, []);

  useEffect(() => {
    const unsubscribe = fireDb.onDbChat((messages) => {
      setChat(messages);
      ref.current.scrollTop = ref.current.scrollHeight;
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="chatContainer">
      <div className="title-bar">
        <div className="title-bar-text">Chat Room</div>
      </div>

      <div className="chat" ref={ref}>
        {chat.map((message) =>
          message.type === "message" ? (
            user.name === message.name ? (
              <div className="message self">{`You: ${message.content}`}</div>
            ) : (
              <div className="message">
                <span className="name">{message.name}: </span>
                {message.content}
              </div>
            )
          ) : (
            <div className="notification">{message.content}</div>
          )
        )}
      </div>
      <div className="formChat">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fireDb.addToChat(value, user.name, "message");
            setValue("");
            console.log(chat);
          }}
        >
          <input
            className="inputChat"
            name="message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
}
