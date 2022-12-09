import { useEffect, useId, useState } from "react";

import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Video.css";

import { Poll } from "./components/Poll";
import { Video } from "./components/Video";
import { Form } from "./components/Form";
import { db } from "./config";
import Sketch from "react-p5";
import p5Types from "p5";
import { nanoid } from "nanoid";
import FighterCard from "./components/FighterCard";
import ChatRoom from "./components/ChatRoom";
import Model from "./components/DataModel";
import Timetable from "./components/Timetable";
import Header from "./components/Header";
import { fireDb } from "./data";

import {
  limit,
  serverTimestamp,
  Timestamp,
  doc,
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from "@firebase/firestore";
import { FightersPannel } from "./components/FightersPannel";

// ///////////////////////////////////////////////////////////////////////
function App() {
  ///////STATES/////////
  const [user, setCurrentUser] = useState({
    name: "",
    email: "",
    vote: "",
    hasVoted: false,
  });
  const [users, setUsers] = useState([]);
  const [chat, updateChat] = useState([]);
  const [toggleRight, setToggleRight] = useState("chat");
  const [hasVoted, setHasVoted] = useState(false);

  ///////COLLECTIONS///////////////
  const messageCollection = collection(db, "chat");

  ////GET COLLECTIONS
  const getMessages = async () => {
    const q = query(messageCollection, orderBy("createdAt", "asc"));

    const data = await getDocs(q);

    updateChat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addMessage = async (message: string, name: string, type: string) => {
    const newMessage = {
      type: type,
      id: nanoid(),
      message: message,
      name: name,
      createdAt: serverTimestamp(),
    };

    await addDoc(messageCollection, newMessage);

    getMessages();
  };

  // ////////////DELETE COLLECTIONS//////////////
  async function deleteAllMessages() {
    chat.map((message) => {
      const messageDoc = doc(db, "chat", message.id);
      deleteDoc(messageDoc);
    });
    updateChat([]);
  }

  async function deleteAllUsers() {
    users.map((user) => {
      const userDoc = doc(db, "users", user.id);
      deleteDoc(userDoc);
    });
    setUsers([]);
  }

  const deleteUser = async (name: any) => {
    users.map((user) => {
      if (user.name === name) {
        const userDoc = doc(db, "users", user.id);
        deleteDoc(userDoc);
        setUsers(users.splice(user));
      }
    });
  };

  // ///////////////////////////////////////////////////
  useEffect(() => {
    setUsers(fireDb.getDbUsers());
    // console.log(user, "user");
  }, []);

  ////////////////////////////////////////////////////////////
  function logOut() {
    setCurrentUser({ name: "", email: "", vote: "", hasVoted: false });
    setHasVoted(false);
  }
  function toggleChatData() {
    setToggleRight("chat");
  }

  function toggleViewData() {
    setToggleRight("viewData");
  }
  function toggleCreateNewFigtht() {
    setToggleRight("createNewFight");
  }

  //JSX
  return user.name === "" ? (
    <div>
      <Form onLogin={setCurrentUser} />
    </div>
  ) : (
    <div className="home">
      {/* <Sketch setup={setup} draw={draw} /> */}
      <div className="container">
        <Header
          logOut={logOut}
          toggleChatData={toggleChatData}
          toggleViewData={toggleViewData}
          toggleCreateNewFigtht={toggleCreateNewFigtht}
          deleteAllUsers={deleteAllUsers}
          deleteAllMessages={deleteAllMessages}
        />
        <div className="mainContainer">
          <div className="main">
            <div className="videoContainer">
              <Video />
            </div>

            <FightersPannel
              currentUser={user}
              hasVoted={hasVoted}
              setHasVoted={setHasVoted}
            />
          </div>
          {toggleRight === "chat" ? (
            <ChatRoom user={user} addMessage={addMessage} />
          ) : toggleRight === "viewData" ? (
            <Model />
          ) : (
            <Timetable />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
