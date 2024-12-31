import React, { useState } from "react";
import "./../styles/App.css";
import ChildComponent1 from "./ ChildComponent1";
import ChildComponent2 from "./ ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div
        className="parent"
        style={{
          backgroundColor: "rgb(115,255,0)",
          padding: "10px",
          width: "400px",
        }}
      >
        <h1>Parent Component</h1>
        <div>
          <ChildComponent1 updateOption={handleOptionChange} />
          <ChildComponent2 updateOption={handleOptionChange} />
        </div>
        <p>Selected Option: {selectedOption}</p>
      </div>
    </div>
  );
};

export default App;
