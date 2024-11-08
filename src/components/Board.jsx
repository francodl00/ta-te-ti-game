import handleClick from '../App'
import Square from './Square'

const Board = ({squares, onClick, turn, winningSquares}) => {
    const createSquares = values => {
        return values.map(value => (
              //clase cuadrado y cruz cradas en index.css
           <Square 
                winner={winningSquares.includes(value)}
                turn={turn}
                key={`square_${value}`} 
                value={squares[value]}               
                onClick={() => onClick(value)}
           /> 
            
        ))
    }
  return (
    <div className="board border-2 border-emerald-200 p-5 flex flex-col translate-x-36 rounded-lg">
        <div className="row flex gap-7 p-5" >
            {createSquares([0,1,2])}
        </div>
        <div className="row flex gap-7 p-5">
            {createSquares([3,4,5])} 
        </div>
        <div className="row flex gap-7 p-5">
            {createSquares([6,7,8])}
        </div>
    </div>
  )
}

export default Board
