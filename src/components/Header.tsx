import React from "react";
import { fireDb } from "../data";
import logo from "../assets/logo.png";

export default function Header({
  deleteAllMessages,
  deleteAllUsers,
  toggleChatData,
  toggleViewData,
  toggleCreateNewFigtht,
  logOut,
}: {
  deleteAllMessages: () => any;
  deleteAllUsers: () => any;
  toggleChatData: () => any;
  toggleCreateNewFigtht: () => any;
  logOut: () => any;
  toggleViewData: () => any;
}) {
  return (
    <div>
      <div className="headerContainer">
        <img src={logo} className="logo"></img>
        <header className="header">
          <button className="headerButtons" onClick={logOut}>
            Log out
          </button>
          {/* <button
            className="headerButtons"
            onClick={() => {
              deleteAllUsers();
            }}
          >
            delete all users
          </button> */}
          {/* <button
            className="headerButtons"
            onClick={() => {
              deleteAllMessages();
            }}
          >
            delete chat
          </button> */}
          <button className="headerButtons" onClick={toggleChatData}>
            Chat
          </button>
          <button className="headerButtons" onClick={toggleViewData}>
            Species
          </button>
          <button className="headerButtons" onClick={toggleCreateNewFigtht}>
            Timetable
          </button>
          {/* <button
            className="headerButtons"
            onClick={() => {
              fireDb.getDbUsers();
              fireDb.getDbFighters();
            }}
          >
            {" "}
            Delete votes
          </button> */}
        </header>
      </div>
    </div>
  );
}
