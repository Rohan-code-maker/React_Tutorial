import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setisNumber] = useState(false);
  const [isChar, setisChar] = useState(false);
  const [password, setPassword] = useState("");

  //useCallback is for memoization(remember previous values)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
    if (isNumber) str += "0123456789"
    if (isChar) str += ")(*&^%$#@!{}[]~`:?"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, isChar, isNumber, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect is called when the browser starts
  useEffect(()=> {
    passwordGenerator()
  },[length, isChar, isNumber, passwordGenerator])

  //useRef reference lena hai kisika  tab use karte hai
  const passwordRef = useRef(null)

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700">
        <div className="">
          <input type="text" value={password} placeholder="password" readOnly
          ref={passwordRef}
          className="w-4/5 py-1 rounded-l-lg border border-gray-300"
          />
          <button 
          className="px-4 py-1 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600"
          onClick={copyPassword}
          >copy</button>
        </div>
        <div className="flex gap-3 pt-3">
          <div>
            <input
            onChange={(e) => {setLength(e.target.value)}}
             type="range" min={6} max={100} value={length} className="cursor-pointer" />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={isNumber} id="numberInput" onChange={() => {
              setisNumber((prev) => !prev)
            }} />
            <label htmlFor="">Numbers</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={isChar} id="charInput" onChange={() => {
              setisChar((prev) => !prev)
            }} />
            <label htmlFor="">Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
