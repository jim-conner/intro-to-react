
import React, { useState } from 'react';

export default function Counter({ appName, initalValue }) {
  const [counter, setCounter ] = useState(initalValue);
  const [userInput, setUserInput ] = useState();
  const [counterName, setCounterName] = useState(appName);
  return (
  <>
    <input onChange={(e) => setCounterName(e.target.value)}></input>
    <h1>{counterName}</h1>
    <h2>{counter}</h2>
    <input 
      onChange={(e) => setUserInput(Number(e.target.value))}>
    </input>
    <br />
    {/* Increment Button */}
    <button 
      onClick={(e) => setCounter((prevCounterState) => prevCounterState + userInput)}>Increment by {userInput}
    </button>

    {counter <= 0 ? '' : 
      <button onClick={() => setCounter((prevCounterState) => prevCounterState - userInput)}>Decrement by {userInput}</button>}
    
    <button 
      onClick={() => setCounter(0)}>Reset
    </button>
  </>
  );
}
