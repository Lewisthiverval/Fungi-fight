import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "../styles/App.css";
import ChatRoom from "../components/ChatRoom";
import { Video } from "../components/Video";
import Header from "../components/Header";
import { fireDb } from "../data";
import { db } from "../config";

import {
  doc,
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
} from "@firebase/firestore";
import { FightersPannel } from "../components/FightersPannel";
import { Authorize } from "../components/Authorize";
import { PollList } from "../components/PollList";
import { useAppState } from "../store";

// ///////////////////////////////////////////////////////////////////////
export function LiveStreamPage() {
  ///////STATES/////////
  const user = useAppState((x) => x.user);

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

  if (!user) return <Authorize>Not authorised redirecting</Authorize>;

  //JSX
  return (
    <Authorize>
      <div className="livestream-outer">
        <Header />
        <div className="livestream-inner">
          <div className="livestream-container">
            <Video />
            <FightersPannel
              currentUser={user}
              hasVoted={hasVoted}
              setHasVoted={setHasVoted}
            />
            <PollList
              currentUser={user}
              hasVoted={hasVoted}
              setHasVoted={setHasVoted}
            />
          </div>
          <ChatRoom />
        </div>
      </div>
      {/* <div className="home">

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
      </div> */}
    </Authorize>
  );
}
