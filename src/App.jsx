import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addValue = () =>{
    setCount(count++);
  }
  const removeValue = () =>{
    setCount(count--);
  }
  return (
    <>
      <h1>Using Hooks</h1>
      <h3>Counter </h3>
      <h4>Counter value {count}</h4>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
