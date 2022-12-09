import React, { useEffect, useState } from "react";
import { api, chat } from "../data";
import type { Fighter, User } from "../data";
import { fighters } from "../data";
import { fireDb } from "../data";

export function Poll({
  hasVoted,
  setHasVoted,
  name,
  currentUser,
}: {
  hasVoted: boolean;
  name: string;
  setHasVoted: (vote: any) => void;
  currentUser: { name: string };
}) {
  const [count, setCount] = useState(0);
  const [totalVotes, setTotalvotes] = useState(0);

  useEffect(() => {
    fireDb.getFighterVotes(name).then(setCount);
    fireDb.getVotes().then(setTotalvotes);
  }, []);

  function getPourcentage(num: number, total: number) {
    if (num != 0) {
      return (num / total) * 100;
    } else {
      return num;
    }
  }

  const handleVote = () => {
    if (hasVoted) return;
    fireDb.updateUserVote(currentUser.name, `${name}`);
    fireDb.updateFighterVote(name, count + 1);
    setCount(count + 1);
    fireDb.addToChat(
      `${currentUser.name} has placed a bet on ${name}`,
      currentUser.name,
      "notification"
    );
    setHasVoted(true);
  };

  return (
    <div className="poll">
      <button className="voteButton" onClick={handleVote}>
        {name}
      </button>
      <ProgBar done={Math.round(getPourcentage(count, totalVotes))} />
    </div>
  );
}

// data-done="70"
export const ProgBar = ({ done }) => {
  return (
    <div className="progress">
      <div className="progress-indicator" style={{ width: `${done}%` }} />
      <p className="progress-label">{done}%</p>
    </div>
  );
};
