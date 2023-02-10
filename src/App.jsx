import { useState } from 'react'
import './App.css'

function App() {
  const initialNote = [
    "Good morning",
    "Hello everyone"
  ]
  const [notes, setNote] = useState("")
  const [initNotes, setInitNote] = useState(initialNote)

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitNote(initNotes.concat(notes));
    setNote('')
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#D9D9D9] p-[10rem]">
      <h1 className='text-4xl my-[1.5rem] text-[#810D0D] font-[700]'>ADD NOTE</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className='w-[30rem] h-[5rem] border border-black bg-[#D9D9D9] outline-none p-[1.5rem]' value={notes} onChange={(e) => setNote(e.target.value)} />
        <br />
        <br />
        <button type='submit' className='border border-black w-[7rem] h-[2.5rem] rounded-[50%] text-[#810D0D] mx-[23rem] my-[1rem] font-[600]'>Add</button>
        <div className='my-[2rem]'>
        <ul>
        {initNotes.map((aNote, index) =>(
          
            <li className='list-disc' key={`${aNote} - ${index}`}>{aNote}</li>
          
        ))}
        </ul>
        </div>
      </form>
      
    </div>
  )
}

export default App
