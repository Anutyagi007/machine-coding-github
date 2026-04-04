import React from 'react'

const Board = ({size= 4, board, handleClick}) => {
    console.log(board, size);
  return (
    <div className='board' style={{gridTemplateColumns: `repeat(${size}, 80px)`}}>
        {
            board.map((row, rowIdx) => {
                return row.map((cell, colIdx) => {
                    return <span onClick={()=>handleClick(rowIdx, colIdx)} className='cell-tic' key={rowIdx + colIdx}>{cell}</span>
                })
            })
        }
    </div>
  )
}

export default Board