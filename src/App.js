import {useMemo, useState } from 'react';
import './App.css'

function App(){
  const [stylesOn, setStylesOn] = useState(false)
  const [number, setNumber] = useState(100)
  const currentValue = useMemo(() => getRandomNumber(number), [number])
  const currentClass = stylesOn ? "app" : ""
  
  
  return <div className={currentClass}>
    <h1>Optimization!</h1>
    <p>styles have {stylesOn ? "been" : "not been" } included</p>
    <button onClick={() => setStylesOn(!stylesOn)}>Switch</button>
    <p>Getting random number from 0 to {number}</p>
    <h2>and the random number is - {currentValue}</h2>
    <button onClick = {() => setNumber(number + 10)}>up</button>
    <button onClick = {() => setNumber(number - 10)}>down</button>
  </div>
}

function getRandomNumber(n){
  for(let i = 0; i < 100000; i++){
    console.log("Ok")
  }
  return Math.floor(Math.random() * n)
}

export default App