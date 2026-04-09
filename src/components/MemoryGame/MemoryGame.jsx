import React, { useEffect, useState } from 'react'
import './MemoryGame.css'

const MemoryGame = () => {
    const [grid, setGrid] = useState(generateGrid());
    const [isLock, setIsLock] = useState(false);
    const [flippedCards, setFlippedCards] = useState([]);
    const handleClick = (id) => {
        if(grid[id].isFlipped  || isLock) {
            return;
        }
        const copyCards =[...grid];
        copyCards[id].isFlipped = true;
        setGrid(copyCards);
        setFlippedCards([...flippedCards, id]);
    }
    useEffect(()=> {
        if(flippedCards.length === 2) {
            setIsLock(true);
            setTimeout(()=> {
                if(grid[flippedCards[0]].number !== grid[flippedCards[1]].number) {
                    setGrid((prevGrid) => {
                        const copyCards = [...prevGrid];
                        copyCards[flippedCards[0]].isFlipped = false;
                        copyCards[flippedCards[1]].isFlipped = false;
                        return copyCards;
                    })
                }
                setIsLock(false);
                setFlippedCards([]);
            }, 3000 )
        }
    }, [flippedCards])
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

export default MemoryGame;

function generateGrid() {
    const arr = Array.from({length: 18}, (_, index) => index+1);
    const grid = [...arr, ...arr].sort(() => Math.random() - 0.5);
    const cards = grid.map((item, index) => {
        return { id: index, number: item, isFlipped: false}
    });
    return cards;
}