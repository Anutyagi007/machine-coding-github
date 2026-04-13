import React, { useState } from "react";

const AccordionItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <h2>{question}</h2>
        {
          show && <p>{answer}</p>
        }
      </div>
      <span onClick={()=>setShow(!show)}>{show ? '-' : '+'}</span>
    </div>
  );
};

export default AccordionItem;
