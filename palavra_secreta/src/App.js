// css
import './App.css';

// react
import {useCallback, useEffect, useState} from 'react'

// data
import {wordsList} from './data/Words'

// components
import StartScreen from './Components/StartScreen';
import GameOver from './Components/GameOver';
import Game from './Components/Game';

const stages = [
  {id: 1, name:'start'},
  {id: 2, name:'game'},
  {id: 3, name: ' end'},
];

function App() {
  const [gameStage, setGameState] = useState(stages[0].name);
  const [words] = useState(wordsList)

  // start game
  const startGame = () => {
    setGameState(stages[1].name)
  };

  // entrada de letras
  const verifyLetter = () => {
    setGameState(stages[2].name)

    // reiniciar o jogo
    const retry = () => {
      setGameState(stages[0].name);
    }

  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
};

export default App;
