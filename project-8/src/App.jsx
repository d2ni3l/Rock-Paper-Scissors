import { useState } from "react";
import Header from "./componets/Header";
import Game from "./componets/Game";
import Button from "./componets/Button";
import Watermark from "./componets/Watermark";

function App() {
  const [score, setScore] = useState(0);


  // to send score from game to header
  const handleScore = (score) => {
    setScore(score);
  };
  return (
    <>
      <Header score={score} />
      <Game handleScore={handleScore} />
      <Button />
      <Watermark />
    </>
  );
}

export default App;
