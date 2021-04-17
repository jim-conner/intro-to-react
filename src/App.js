import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  const array = [
    {
      appName: "Counter 1",
      initalValue: 200
    },
    {
      appName: "Counter 2",
      initalValue: 0
    },
    {
      appName: "Counter 3",
      initalValue: 100
    }
  ];

  // const counterOnDom = {
  //     return( {array.map((counter, i) => <Counter key={i} appName={counter.appName} initalValue={counter.initialValue}/>)
  //     )
  //   }
  
  return(
    <>
    {array.map((counter, i) => <Counter key={i} appName={counter.appName} initalValue={counter.initialValue}/>)
    }
    </>
  )
}

export default App;
