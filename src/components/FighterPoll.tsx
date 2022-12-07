import { useState, useEffect } from "react";
// import { fighters } from "../data";
import { Poll } from "./Poll";
import { fireDb } from "../data";

const getPourcentage = (count: number) => {
  let total = 0;

  return total;
};

export const FighterPoll = ({
  currentUser,
  hasVoted,
  setHasVoted,
}: {
  currentUser: { name: string; email: string; vote: string };
  hasVoted: boolean;
  setHasVoted: (vote: any) => void;
}) => {
  const fighters = [
    "C.Versicolor",
    "Daldinia Concentrica",
    "P.Velutina",
    "S.HIrsitum",
  ];
  return (
    <div className="pollContainer">
      <div className="pollSubContainer">
        {!hasVoted ? (
          <div className="title">Place Bet</div>
        ) : (
          <div className="title">You have placed your bet</div>
        )}
        {fighters.map((fighter) => (
          <Poll
            hasVoted={hasVoted}
            setHasVoted={setHasVoted}
            name={fighter}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};
