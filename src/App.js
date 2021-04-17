import React, { useState, useRef } from 'react';
import './App.css'

function App() {
  const [timer, setTimer] = useState(0)
  const [start, setStart] = useState(false)
  const [stop, setStop] = useState(true)
  const countRef = useRef(null)

  const handleStart = () => {
    if(start){return}
    console.log("started");
    setStart(true)
    setStop(false)
    countRef.current = setInterval(()=>{
      setTimer((timer) => timer+1)
    },1500)
    // 1 added after every 1500 milisecs
  }

  const handleStop = () => {
    if(stop){return}
    console.log(timer);
    clearInterval(countRef.current)
    setStart(false)
    setStop(true)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setStart(false)
    setStop(true)
    setTimer(0)
  }


  return (
    <div className="wrapper">
      <h1>React Timer</h1>
      <h2 className="timer">{ timer }</h2>
      <button className="button" onClick={handleStart}> START </button>
      <button className="button" onClick={handleStop}> STOP </button>
      <button className="button" onClick={handleReset}> RESET </button>
    </div>
  );
}

export default App;
