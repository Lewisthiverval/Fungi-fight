import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/Data.css";
import { fighters } from "../data";
import { users } from "../data";
import FighterCard from "./FighterCard";

export default function Model({}: {}) {
  useEffect(() => {
    console.log(fighters);
  }, []);
  const style = {
    fontWeight: "bold",
  };
  return (
    <div className="dataContainer">
      <div className="data">
        <h2 className="title">fighters</h2>
        <div className="cardContainer2">
          <FighterCard
            name="P.Velutina"
            phrase1="Spiking hyphea growth"
            phrase2="Resilient"
          />
        </div>

        <div className="cardContainer2">
          <div>
            <FighterCard
              name="S.Hirsutum"
              phrase1="Chemical warfare"
              phrase2="silent attack"
            />
          </div>
        </div>
        <div className="cardContainer2">
          <FighterCard
            name="C.Versicolor"
            phrase1="Distributing Hyphea growth"
            phrase2="Barrage building"
          />
        </div>

        <div className="cardContainer2">
          <div>
            <FighterCard
              name="Daldinia Concentrica"
              phrase1="Symbiotic relations"
              phrase2="Friendly killer"
            />
          </div>
        </div>

        <h2 className="title">users</h2>
        {Object.keys(users).map((key) => {
          return (
            <div>
              <div style={style}>{users[key].name}</div>
              <div>{users[key].vote}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
