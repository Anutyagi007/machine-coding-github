import { useEffect, useRef, useState } from "react";
import "./InteractiveShape.css";

export default function InteractiveShape() {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false)),
  );
  const queue = useRef([]);

  const handleOnClick = (rowIdx, colIdx, flag) => {
    if (grid[rowIdx][colIdx] && flag) {
      return;
    }
    setGrid((prevGrid) => {
      const gridDeepCopy = prevGrid.map((row) => [...row]);
      gridDeepCopy[rowIdx][colIdx] = flag;
      if (flag) queue.current.push([rowIdx, colIdx]);
      return gridDeepCopy;
    });
  };

  useEffect(() => {
    if (queue.current.length === 9) {
      queue.current.forEach(([rowIdx, colIdx], idx) => {
        setTimeout(() => {
            handleOnClick(rowIdx, colIdx, false);
          },1000 * (idx + 1),
        );
      });
      queue.current = [];
    }
  }, [grid]);

  return (
    <div className="container">
      {grid.map((row, rowIdx) => {
        return row.map((cell, colIdx) => {
          return (
            <div
              className={`cell ${cell ? "active" : ""}`}
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleOnClick(rowIdx, colIdx, true)}
            ></div>
          );
        });
      })}
    </div>
  );
}
