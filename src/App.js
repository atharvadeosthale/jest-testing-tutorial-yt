import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [percentResult, setPercentResult] = useState(0);
  const [number, setNumber] = useState("");
  const [outOf, setOutOf] = useState("");

  const calculatePercent = () => {
    const result = (number / outOf) * 100;
    setPercentResult(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Percent calculator</h2>
          <div>
            <input
              type="number"
              data-testid="number"
              placeholder="Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              data-testid="outof"
              placeholder="Out of"
              onChange={(e) => setOutOf(e.target.value)}
            />
          </div>
          <div>
            <button onClick={() => calculatePercent()} data-testid="button">
              Calculate Percentage
            </button>
          </div>
          <p>
            Result - <span data-testid="result">{percentResult}</span>%
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
