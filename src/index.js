import React from "react";
import ReactDOM from "react-dom";

// Multiple elements Render
let d = document.getElementById("a1");
var e = (
  <div>
    <h1>H1 TAG</h1>
    <h2>H2Tag</h2>
    <h3>h3 tag</h3>
  </div>
);

ReactDOM.render(e, d);

/*
// Single element render
let a = <h1>Hi This is H1 Tag</h1>;
let b = document.getElementById("a1");
ReactDOM.render(a, b);

*/

/*import "./styles.css";
function App() {
return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
