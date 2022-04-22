import React, {useEffect, useState} from 'react'

function PropChangeWatch({ a, b }) {
    const [color, setColor] = useState('white');
    const colors = ['lightblue', 'red', 'lightgreen','yellow','lavender','pink','aqua'];
    useEffect(() => {
      console.log("value of 'a' changed to", a);
      setColor(colors[Math.floor(Math.random() * 7)]);
    }, [a]);
  
    return (
      <div style={{backgroundColor: color}}>
        I'm adding to two counts, but only one makes me change colour: a={a} and b={b}
      </div>
    );
  }
  
  function PropsUpdate() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
   
  
    return (
      <div>
        <PropChangeWatch a={count1} b={count2} />
        <button onClick={() => setCount1(count1 + 1)}>Add 1 to the value of a</button>
        <button onClick={() => setCount2(count2 + 1)}>Add 1 to the value of b</button>
      </div>
    );
  }

  export default PropsUpdate;