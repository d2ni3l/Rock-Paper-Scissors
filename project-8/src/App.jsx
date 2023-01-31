import { useState } from 'react';
import Header from './componets/Header';
import Game from './componets/Game';
import Button from './componets/Button';

function App() {
  const [score, setScore] = useState(0);

  const handleScore = (score) => {
    setScore(score);
  }
  return (
    <>
      
    <Header score={score}/>
    <Game handleScore={handleScore}/>
    <Button/>
    </>
  )
}

export default App
