import classNames from "classnames"

const Square = ({value, onClick, turn, winner}) => {

  const handleClick = () => {
      (turn !== null && value === null) && onClick()
      
  }

  let squareClass = classNames(
    'p-10 border h-24 w-24 rounded-lg bg-gray-400 cursor-pointer transition-property:all duration-300 cuadrado',
  {
    square: true,
    [`square--${value}`]: value !== null,
    winner: winner
  })
  
  return (
    <div className={squareClass} onClick={() => handleClick()}>
        
    </div>
  )
}

export default Square
