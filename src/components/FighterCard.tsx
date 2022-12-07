import React, { useState } from "react";

import { db } from "../config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { nanoid } from "nanoid";

export default function FighterCard({
  name,
  phrase1,
  phrase2,
}: {
  name: string;
  phrase1: string;
  phrase2: string;
}) {
  const hello = "hello";

  const stylesName = {
    fontSize: "40px",
    fontWeight: "bold",
  };

  const stylesList = {
    fontSize: "25px",

    marginleft: "8px",
    justifyContent: "center",
  };

  const styleBox = {
    padding: "5px",

    justifycontent: "center",
  };

  return (
    <div style={styleBox}>
      <div style={stylesName}></div>
      <h4>{name}</h4>
      <ul style={stylesList}>
        <li>{phrase1}</li>
        <li>{phrase2}</li>
      </ul>
    </div>
  );
}
