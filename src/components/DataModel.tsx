import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/Data.css";
import { fighters } from "../data";
import { users } from "../data";
import FighterCard from "./FighterCard";
import "../styles/fighterCard.css";

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
        <div className="title-bar">
          <div className="title-bar-text">Players</div>
        </div>

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
      </div>
    </div>
  );
}
