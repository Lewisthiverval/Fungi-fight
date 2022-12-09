import FighterCard from "./FighterCard";
import { PollList } from "./PollList";

import "./FightersPannel.css";

export const FightersPannel = ({
  currentUser,
  hasVoted,
  setHasVoted,
}: {
  currentUser: { name: string };
  hasVoted: boolean;
  setHasVoted: (vote: any) => void;
}) => {
  return (
    <div className="fighter-pannel">
      <FighterCard
        name="P.Velutina"
        phrase1="Spiking hyphea growth"
        phrase2="Resilient"
      />
      <h3>vs</h3>
      <FighterCard
        name="S.Hirsutum"
        phrase1="Chemical warfare"
        phrase2="silent attack"
      />
    </div>
  );
};
