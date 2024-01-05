import React from "react";
import { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container1">
      <h1>Automated Counter App</h1>
      <p className="counter">Count: {count}</p>
      <div className="button-container">
        <MDBBtn className="me-1" color="success" onClick={handleToggle}>
          {isRunning ? "Pause" : "Resume"}
        </MDBBtn>
        <MDBBtn className="me-1" color="danger" onClick={handleReset}>
          Reset
        </MDBBtn>
      </div>
    </div>
  );
}

export default Counter;
