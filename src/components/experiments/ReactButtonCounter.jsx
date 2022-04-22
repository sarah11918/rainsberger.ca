import ButtonReact from './ButtonReact.jsx';
import {useState } from 'react';

export default function ReactButtonCounter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#000000')

    const colors = ['#00ff00', '#ff0000', '#0000ff'];

    let handleClick = () => {
    setCount(count+1);
    setColor(colors[Math.floor(Math.random() * 3)]);
    }

    return (
        <div style={{border:"2px solid black", padding:"1em"}}>
        <h1>Hello, I am a React App!</h1>
        <h2>The following button has been clicked {count} times.</h2>
        <ButtonReact color={color} handleClick={handleClick} />
        </div>
      )
      
}


