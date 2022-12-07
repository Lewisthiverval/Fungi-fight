import React, { useEffect, useState } from "react";
import { api, chat } from "../data";
import type { Fighter, User } from "../data";
import { fighters } from "../data";
import { fireDb } from "../data";

import "../styles/Poll.css";

export const ProgBar = ({ done }) => {
  return (
    <div className="progress">
      <div
        className="progressDone"
        style={{
          opacity: 1,
          width: `${done}%`,
        }}
      >
        {done}%
      </div>
    </div>
  );
};

export function Poll({
  hasVoted,
  setHasVoted,
  name,
  currentUser,
}: {
  hasVoted: boolean;
  name: string;
  setHasVoted: (vote: any) => void;
  currentUser: { email: string; name: string; vote: string };
}) {
  const [count, setCount] = useState(0);
  const [totalVotes, setTotalvotes] = useState(0);

  useEffect(() => {
    fireDb.getFighterVotes(name).then(setCount);
    fireDb.getVotes().then(setTotalvotes);
  }, []);

  function getPourcentage(num: number, total: number) {
    return (num / total) * 100;
  }

  const style = {
    fontSize: "50px",
  };

  const progress = document.querySelector("progress");

  return (
    <div className="poll">
      <div className="countContainer">
        <div className="voteButtonContainer">
          {!hasVoted ? (
            <button
              className="voteButton"
              onClick={() => {
                fireDb.updateUserVote(currentUser.name, `${name}`);
                fireDb.updateFighterVote(name, count + 1);
                setCount(count + 1);
                fireDb.addToChat(
                  `${currentUser.name} has placed a bet on ${name}`,
                  currentUser.name,
                  "notification"
                );
                setHasVoted(true);
              }}
            >
              {name}
            </button>
          ) : (
            <button
              className="votedButton"
              onClick={() => {
                console.log("You have already voted...");
                fireDb.getVotes().then((x) => {
                  console.log(x);
                });
              }}
            >
              {name}
            </button>
          )}
        </div>
        <div className="displayCount">
          {Math.round(getPourcentage(count, totalVotes))}%
          <span className="pourcentageBar"></span>
          <span className="pourcentageValue"></span>
        </div>
        <ProgBar done={Math.round(getPourcentage(count, totalVotes))} />
      </div>
    </div>
  );
}

// data-done="70"
