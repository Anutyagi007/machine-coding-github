import React, { useState } from 'react';
import './TicTacToe.css'
import Board from './Board';
import { checkWinner } from './checkWinner';

const TicTacToe = ({size}) => {
    const [board, setBoard] = useState(Array.from({length: size}, ()=> new Array(size).fill(null)));
    const [turnX, setTurnX] = useState(true);
    const winner = checkWinner(board, size);
    const handleClick = (rowIdx, colIdx) => {
        if(board[rowIdx][colIdx] || winner) return;
        const newBoard = JSON.parse(JSON.stringify(board));
        newBoard[rowIdx][colIdx] = turnX ? 'X' : '0';
        setBoard(newBoard);
        setTurnX(!turnX);
    }
    const handleReset = () => {
        setBoard(Array.from({length: size}, ()=> new Array(size).fill(null)));
    }
  return (
    <div className='tic-container'>
        <h2>Tic Tac Toe</h2>
        <Board handleClick={handleClick} size={size} board={board}/>
        <span className='winner'>{ winner ? `Winner is ${winner}` : `${turnX ? 'X' : 'O'}'s turn` } </span>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default TicTacToe