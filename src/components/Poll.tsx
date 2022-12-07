import React, { useEffect, useState } from "react";
import { api, chat } from "../data";
import type { Fighter, User } from "../data";
import { fighters } from "../data";
import { fireDb } from "../data";

import "../styles/Poll.css";

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

  useEffect(() => {
    fireDb.getFighterVotes(name).then(setCount);
  }, []);

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
                console.log(count, "count");
              }}
            >
              {name}
            </button>
          ) : (
            <button
              className="voteButton"
              onClick={() => {
                console.log("You have already voted...");
              }}
            >
              bet placed
            </button>
          )}
        </div>
        <div className="displayCount">
          {count}
          <span className="pourcentageBar"></span>
          <span className="pourcentageValue"></span>
        </div>
        <div className="progress">
          <div className="progressDone"></div>
        </div>
      </div>
    </div>
  );
}

// data-done="70"
