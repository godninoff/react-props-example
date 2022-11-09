import "./App.css";
import FirstChild from "./FirstChild";
import React from "react";

function App() {
  const [propValue, setPropValue] = React.useState(
    "State из родительского компонента"
  );

  return (
    <div className="App">
      Родительский компонент откуда "рождается": {propValue}
      <FirstChild propValue={propValue} />
    </div>
  );
}

export default App;
