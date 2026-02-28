
import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter <= 20)
    setCounter(counter + 1)
    console.log(counter)
  }

  const removeValue = () => {
    if (counter >= 0)
    setCounter(counter - 1)
    console.log(counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}
      >add value</button>
      <br />
      <br />
      <button onClick={removeValue}>decrease value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
