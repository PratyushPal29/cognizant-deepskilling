import React from "react";

function WelcomeButton() {
  const showMessage = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <button onClick={() => showMessage("Welcome!")}>Say Welcome</button>
    </div>
  );
}

export default WelcomeButton;
