import React, { useState, useEffect} from "react";

function IntervalCounterColor() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [color, setColor] = useState('white');
  const colors = ['blue', 'red', 'green','yellow','purple','pink','aqua'];

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + step);
      setColor(colors[Math.floor(Math.random() * 7)]);
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  return (
    <>
      <h1><span style={{background: color, padding:'.25em .5em'}}>{count}</span></h1>
      <label htmlFor="countInput">Amount to add each second:</label>
      <input id="countInput" value={step} onChange={e => setStep(Number(e.target.value))} />
    </>
  );
}

export default IntervalCounterColor;