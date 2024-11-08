import { useState } from 'react'
import Board from './components/Board'
import Result from './components/Result';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const App = () => {
  const [turn, setTurn] = useState('X')
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [winningSquares, setWinningSquares] = useState([])
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  })

  const checkForWinner = (copiaSquare) => {
    for(let i = 0; i < winningPositions.length; i++ ) {
      const [a,b,c] = winningPositions[i];
      // Ganador

          // Si no es nulo, y a, b y c son iguales:  
      if(copiaSquare[a] && copiaSquare[a] === copiaSquare[b] && copiaSquare[a] === copiaSquare[c]) {
        endGame(copiaSquare[a], winningPositions[i]);
        return;
      }
    }
    // Empate
    if(!copiaSquare.includes(null)) {
      endGame(null, Array.from(Array(10). keys()));
      return;
    }
  }

  const handleClick = square => {
    if (squares[square] !== null) return;

    let newSquare = [...squares];
    newSquare.splice(square, 1, turn)
    setSquares(newSquare);

    setTurn(turn === 'X' ? 'O' : 'X');
    checkForWinner(newSquare);
  }
  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  }

  

  return (
    <>
      <div className='container flex flex-col justify-center items-center h-screen p-0'>
        <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick} />
        <div className='flex justify-center'>
          <Result scoreO={score.O} scoreX={score.X}/>
        </div>
      </div>
    </>
  )
}


export default App;
