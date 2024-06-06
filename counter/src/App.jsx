import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] =useState(0)

  const addValue = () => {
    // if(counter < 20){
    //   counter++
    // }
    // else{
    //   counter = 20
    // }
    // setCounter(counter)

    //IMP NOTE
    //setcounter function takes callback function to work separately otherwise it will work in bulk for one time
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
  };

  const removeValue = () => {
    // if(counter > 0){
    //   counter--
    // }
    // else{
    //   counter = 0
    // }
    // setCounter(counter)
    setCounter( prevCounter => prevCounter - 1)
    setCounter( prevCounter => prevCounter - 1)
    setCounter( prevCounter => prevCounter - 1)
    setCounter( prevCounter => prevCounter - 1)
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
