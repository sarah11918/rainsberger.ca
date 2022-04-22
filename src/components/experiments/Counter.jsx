
import React, { useState } from 'react'


export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Counter</h3>
      <p>From (<a href="https://github.com/cassidoo/astro-netlify-starter">Cassidy Williams' astro-netlify-starter </a>)</p>
     
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}