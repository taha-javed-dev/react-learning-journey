import { useState } from 'react';
import './App.css';

 const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <>
    <h1>Counter is {count}</h1>
    <div className="card m-8">Count is {count}</div>
    <div className="gap-5">
      <button
    onClick={() => setCount( count + 1)}
    style={{ margin: "0 5px"}}>
      Increase
    </button>
    <button 
    onClick={() => setCount( Math.max(count - 1, 0))}
    style={{ margin: "0 5px"}}>
      Decrease
    </button>
    
    <button
    onClick={() => setCount( 0 )}
    style={{ margin: "0 5px"}}>
      Reset
    </button>
    </div> 
    <div style={{ margin: "18px 0px"}}>
      <input style={{
        width: "100px",
        border: "1px solid white",
        margin: "0 5px",
        padding: "0.6em 1.2em"
      }}
      value={inputValue}
      onChange={(e) => setInputValue(Number(e.target.value))}
      type="text" />
      <button style={{ margin: "0 5px"}}
      onClick={() => {
        setCount(inputValue);
        setInputValue(0);
        }}>
        Set to {inputValue}
        </button>
    </div>
    </>
  )
}
export default App;