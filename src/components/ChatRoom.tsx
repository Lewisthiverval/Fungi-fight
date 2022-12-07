import React, { useEffect, useState } from "react";
import "../styles/Chat.css";
import { api, fireDb, Message } from "../data";
import { chat } from "../data";

import {
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  orderBy,
} from "@firebase/firestore";
import { db } from "../config";

export default function ChatRoom({
  user,
  addMessage,
}: {
  user: { name: string; email: string; vote: string };
  addMessage: (message: string, user: string, type: string) => any;
}) {
  const [value, setValue] = useState("");
  const [chat, setChat] = useState<Message[]>([]);

  useEffect(() => {
    fireDb.getDbChat().then(setChat);
  }, []);

  useEffect(() => {
    const unsubscribe = fireDb.onDbChat((messages) => {
      setChat(messages);
    });
    return () => unsubscribe();
  }, []);

  const nameStyle = {
    color: "red",
  };
  return (
    <div className="chatContainer">
      <div className="title-bar">
        <div className="title-bar-text">Chat Room</div>
      </div>

      <div className="chat">
        {chat.map((message) =>
          message.type === "message" ? (
            user.name === message.name ? (
              <div className="selfMessage">{`You: ${message.content}`}</div>
            ) : (
              <div className="Message">
                <span className="name">{message.name}: </span>
                {message.content}
              </div>
            )
          ) : (
            <div className="notification">{message.content}</div>
          )
        )}
      </div>
      <form
        className="formChat"
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
  );
}

const onClick = (cb: () => any) => {
  window.addEventListener("click", cb);
  return () => window.removeEventListener("click", cb);
};
