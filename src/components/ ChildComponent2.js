import React from 'react';

const ChildComponent2 = ({ updateOption }) => {
  const handleClick = () => {
    updateOption('Option 2');
  };

  return (
    <>
    <div style={{backgroundColor:'rgb(254,209,0)',padding:'5px'}}>
     <h2>Child Component2</h2>
   <button onClick={handleClick}>Select Option 2</button>
    </div>
     </>
  );
};

export default ChildComponent2;
