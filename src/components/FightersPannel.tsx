import FighterCard from "./FighterCard";
import { FighterPoll } from "./FighterPoll";

export const FightersPannel = ({
  currentUser,
  hasVoted,
  setHasVoted,
}: {
  currentUser: { name: string; email: string; vote: string };
  hasVoted: boolean;
  setHasVoted: (vote: any) => void;
}) => {
  const fighters = {} as any;

  return (
    <div className="lowerHeader">
      <div className="welcomeContainer">
        <div className="cardContainer">
          <FighterCard
            name="P.Velutina"
            phrase1="Spiking hyphea growth"
            phrase2="Resilient"
          />
        </div>
        <p className="welcome">
          P. Velutina <br></br> vs <br></br> S. Hirsutum
        </p>
        <div className="cardContainer">
          <div>
            <FighterCard
              name="S.Hirsutum"
              phrase1="Chemical warfare"
              phrase2="silent attack"
            />
          </div>
        </div>
      </div>
      <FighterPoll
        currentUser={currentUser}
        hasVoted={hasVoted}
        setHasVoted={setHasVoted}
      />
    </div>
  );
};
