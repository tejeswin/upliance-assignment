import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Counter = () => {
  // Retrieve count from localStorage or default to 0
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });

  useEffect(() => {
    // Save count to localStorage whenever it updates
    localStorage.setItem("counter", count);
  }, [count]);

  // Animate background color based on count (Bezier-like smooth transition)
  const bgProps = useSpring({
    backgroundColor: `rgba(91, 1, 60, ${Math.min(count / 20, 1)})`,
    config: { tension: 120, friction: 20 }, // Bezier curve effect
  });

  // Animate number scaling effect
  const scaleProps = useSpring({
    transform: `scale(${1 + Math.min(count / 50, 0.2)})`,
    config: { tension: 150, friction: 10 },
  });

  return (
    <animated.div
      style={{
        ...bgProps,
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(94, 1, 60, 0.88)",
        marginBottom: "20px",
        
      }}
    >
      <animated.h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          ...scaleProps, // Apply scale animation
        }}
      >
        {count}
      </animated.h1>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        -
      </button>
      <button style={buttonStyle} onClick={() => setCount(0)}>
        Reset
      </button>
    </animated.div>
  );
};

const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "black",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1rem",
};

export default Counter;
