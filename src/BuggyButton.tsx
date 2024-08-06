import React from "react";

const BuggyButton: React.FC = () => {
  const handleClick = () => {
    throw new Error("Test error from BuggyButton!");
  };

  return <button onClick={handleClick}>Break the world</button>;
};

export default BuggyButton;
