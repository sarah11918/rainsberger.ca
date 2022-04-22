import React, { useState, useCallback } from "react";
import { GetFactorsList } from "./GetFactorsList.jsx";


function GetFactorsExample() {
  const [number, setNumber] = useState(0);
  const [isDark, setDark] = useState(false);

  const getFactors = () => {
      let factors = []
      for(let i = 1; i <= number/2; i++) {
          if(number % i === 0) {
              factors.push(i)
          }
      }
      return factors
  }

//   const getFactors = useCallback(() => {
//     let factors = [];
//     for (let i = 1; i <= number / 2; i++) {
//       if (number % i === 0) {
//         factors.push(i);
//       }
//     }
//     return factors;
//   }, [number]);

  const theme = {
    color: isDark ? "#ffffff" : "#333333",
    backgroundColor: isDark ? "#333333" : "#ffffff"
  };

  return (
    <div style={theme} className="App">
      <input
        type="number"
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Toggle Theme
      </button>
      <GetFactorsList getFactors={getFactors} />
    </div>
  );
}

export default GetFactorsExample;
