import React, { useState } from "react";
import "../styles/fighterCard.css";

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

  return (
    <div className="styleBox">
      <h4>{name}</h4>
      <h2 style={stylesList}></h2>
      <p className="p">{phrase1}</p>
      <p className="p">{phrase2}</p>
    </div>
  );
}
