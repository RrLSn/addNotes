import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[100vw] h-[100vh] bg-[#D9D9D9] p-[10rem]">
      <h1 className='text-4xl my-[1.5rem] text-[#810D0D] font-[600]'>ADD NOTE</h1>
      <form>
      <input type="text" className='w-[30rem] h-[5rem] border border-black bg-[#D9D9D9] outline-none p-[1.5rem]' />
      <br />
      <br />
      <button className='border border-black w-[7rem] h-[2.5rem] rounded-[45%] text-[#810D0D] mx-[23rem] my-[1rem]'>Add</button>

      <div></div>
      </form>
    </div>
  )
}

export default App
