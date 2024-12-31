import React from 'react';

const ChildComponent1 = ({ updateOption }) => {
  const handleClick = () => {
    updateOption('Option 1');
  };

  return (
    <>
   <div style={{backgroundColor:'rgb(204,91,27)',padding:'5px'}}>
    <h2>Child Component1</h2>
  <button onClick={handleClick}>Select Option 1</button>
   </div>
    </>
);
};

export default ChildComponent1;
