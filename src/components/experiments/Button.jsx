import React, {useState} from 'react';


const Button = ({ children }) => {
  const [status, setStatus] = useState(true)
  return (
    <>
      <h3 data-testid="header">Toggle Button</h3>
      <button onClick={() => setStatus(!status)}>Press to Toggle True/False</button>
      
      {' '}{status ? "True" : "False"}
     
    </>
  )
}

export default Button;