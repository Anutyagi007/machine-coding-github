import React, { useState } from 'react'
import './MemoryGame.css'

function generateGrid() {
    const arr = Array.from({length: 18}, (_, index) => index+1);
    const grid = [...arr, ...arr].sort(() => Math.random() - 0.5);
    const cards = grid.map((item, index) => {
        return { id: index, number: item, isFlipped: false}
    });
    return cards;
}

const MemoryGame = () => {
    const [grid, setGrid] = useState(generateGrid());
    console.log(grid);
    const handleClick = (id) => {
        const copyCards =[...grid];
        copyCards[id].isFlipped = true;
        setGrid(copyCards);
    }
  return (
    <div >
        <h2>Memory Game Component</h2>
        <div className='memory-grid-container'>
            {
                grid.map((item)=> {
                    return <div key={item.id} className='cell-memory' onClick={() => handleClick(item.id)}>
                        {item.isFlipped ? item.number : "?"}
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default MemoryGame