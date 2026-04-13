import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import "./Tabs.css";

const Tabs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabs = [
    {
      id: 1,
      name: "Profile",
      content: Profile,
    },
    {
      id: 2,
      name: "Interests",
      content: Interests,
    },
    {
      id: 3,
      name: "Settings",
      content: Settings,
    },
  ];
  const ActiveComponent = tabs[currentIndex].content;
  return (
    <div>
      <div>
        {tabs.map((tab, index) => {
          return (
            <span
              className="tab-com"
              style={{ borderBottom: `${currentIndex === index ? '2px solid blue': '2px solid black'}` }}
              key={tab.idd}
              onClick={()=>setCurrentIndex(index)}
            >
              {tab.name}
            </span>
          );
        })}
      </div>
      <div className="active-comp">{<ActiveComponent />}</div>
    </div>
  );
};

export default Tabs;
