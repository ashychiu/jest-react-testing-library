import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red")
  const newButtonColor = buttonColor === "red" ? "blue" : "red"

  const changeColor = () => {
    setButtonColor(newButtonColor)
  }
  return (
    <div className="App">
      <button onClick={changeColor} style={{ backgroundColor: buttonColor }}>Change to {newButtonColor}</button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
