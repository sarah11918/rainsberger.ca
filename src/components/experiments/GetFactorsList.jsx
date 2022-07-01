import React, { useState, useEffect } from "react";

export const GetFactorsList = ({ getFactors }) => {
  const [items, setItems] = useState([]);
  const [isTriggered, setIsTriggered] = useState(false)
  const [count, setCount] = useState(0)



  useEffect(() => {
    console.log("Calculating... (from list)");
    setItems(getFactors());
    setCount(c => c+1)

  }, [getFactors]);

  return (
    <>
         <div>
        {count}
        <span style={{paddingLeft: "1em"}}>Count of useEffect Triggers (ie list of factors re-calculated and re-rendered)</span>
        </div>
        <ul>
        {items?.map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>
      
    </>
  );
};