import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(9)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const password_generator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numAllow) {
        str += "0123456789"
      } else if (charAllow) {
        str += "/*-+!@#$%^&*)(_=\|}{][:;><,./?"
      }

      for (let i = 1; i <= array.length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        
        pass = str.charAt(char)
      }

      setPassword(pass)


    },
    [length, numAllow, charAllow, setPassword, ],
  )
  

  return (
    <>
      <div className='w-92 h-60 mx-auto shadow-md rounded-lg px-2 my-8 text-lime-300 bg-purple-700' >
        <h1 className='text-white mb-6 text-center' >Password Generator</h1>
      <div className='flex shadow-lg overflow-hidden mb-4' >
        <input type="text" value={password} className='outline-none text-center  bg-green-800 w-96 h-20 py-1 px-3' placeholder='password' readOnly  name="" id="" />
        <button className='outline-none bg-blue-600 text-white px-3  py-0.5 shrink-0' > Copy </button>
      </div>
      </div>
    </>
  )
}

export default App
