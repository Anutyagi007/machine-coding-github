import React, {useState, useRef} from "react";
import './DragDrop.css';

const DragDrop = () => {
  const initialData = {
    "Todo": [
      "Design UI mockups",
      "Set up project repository",
      "Write unit test",
      "Integrate payment gateway",
    ],
    "InProgress": [
      "Develop authentication flow",
      "Implement responsive design",
    ],
    "Completed": [
      "Set up CI/CD pipeline",
      "Conduct code reviews",
      "Deploy initial version to staging",
    ],
  };
  const [data, setData] = useState(initialData);
  const draggedItem = useRef();
  const draggedContainer = useRef();
  const handleDragStart = (e, item, container) => {
    e.target.style.opacity= "0.5";
    draggedItem.current = item;
    draggedContainer.current = container;
  }
  const handleDragEnd =(e) => {
    e.target.style.opacity = "1";
  }
  const handleDrop = (targetContainer) => {
    const item = draggedItem.current;
    const sourceContainer = draggedContainer.current;
    setData((prev) => {
        const newData = {...prev};
        newData[sourceContainer] = newData[sourceContainer].filter((i) => i!==item);
        newData[targetContainer] = [...newData[targetContainer], item];
        return newData;    
    })
  }
  return <div className="drag-drop-container">
    {
        Object.keys(data).map((key, index) => <div onDrop={() =>handleDrop(key)} onDragOver={(e) => e.preventDefault()} className="box" key={index}>{key}
            {data[key].map((item, idx) => <div onDragStart={(e) =>handleDragStart(e, item, key)} onDragEnd = {handleDragEnd} draggable className="drag-drop-item" key={idx}>{item}</div>)}
        </div>)
    }
  </div>;
};

export default DragDrop;
