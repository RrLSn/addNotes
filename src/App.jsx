import { useState } from 'react'
import './App.css'

function App() {
  const initialNote = [
    {
      note: 'Good Morning'
    },
    {
      note: 'Hello Everyone'
    }
  ]
  const [notes, setNote] = useState("")
  const [initNotes, setInitNote] = useState(initialNote)

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitNote(initNotes.concat({notes: note}));
    setNote('')
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#D9D9D9] p-[10rem]">
      <h1 className='text-4xl my-[1.5rem] text-[#810D0D] font-[700]'>ADD NOTE</h1>
      <form>
        <input type="text" className='w-[30rem] h-[5rem] border border-black bg-[#D9D9D9] outline-none p-[1.5rem]' value={notes} onChange={(e) => setNote(e.target.value)} />
      <br />
      <br />
      <button type='submit' className='border border-black w-[7rem] h-[2.5rem] rounded-[50%] text-[#810D0D] mx-[23rem] my-[1rem] font-[600]'>Add</button>

      <div className='my-[2rem]'>
        {initNotes.map((initNote, index) =>(
          <ul key={`${initNote.note} - ${index}`}>
            <li className='list-disc'>{initNote.note}</li>
          </ul>
        ))}
      </div>
      </form>
    </div>
  )
}

export default App
