import React from "react";

function SyntheticEventButton() {
  const handleClick = (event) => {
    alert("I was clicked");
    console.log("SyntheticEvent: ", event);
  };

  return (
    <div>
      <button onClick={handleClick}>Click on me</button>
    </div>
  );
}

export default SyntheticEventButton;
