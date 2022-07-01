import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

const indexjs = `import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
); `

const styles = `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`

const indexhtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`

const code = `export default function App() {
  return <h1>Hello World</h1>
}`;

function MySandpack({codez = code}) {
  return (
    <>
      <h1>Code Playground</h1>
     
      <Sandpack 
      template="react"
      files={{
        "/App.js": codez,
        "/index.js": indexjs,
        "/styles.css": styles,
        "/index.html": indexhtml,
      }}
       />
    </>
  )
}
export default MySandpack;