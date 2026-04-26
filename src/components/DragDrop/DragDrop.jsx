import React, {useState} from "react";
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
  return <div className="drag-drop-container">
    {
        Object.keys(data).map((key, index) => <div className="box" key={index}>{key}
            {data[key].map((item, idx) => <div draggable className="drag-drop-item" key={idx}>{item}</div>)}
        </div>)
    }
  </div>;
};

export default DragDrop;
