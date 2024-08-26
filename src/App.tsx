import { useState } from 'react'
import { generateMnemonic } from 'bip39'
import './App.css'

function App() {
  const [mnemonic, setMnemonic] = useState<string>('')

  const generateNewMnemonic = async() => {
    const mn = await generateMnemonic()
    setMnemonic(mn)
  }

  return (
    <>
      <button className='btn btn-primary' onClick={generateNewMnemonic}>
        Create Seed Phrase
      </button>

      <input type="text" placeholder="Generated Seed Phrase" className="input input-bordered w-full max-w-xs" value={mnemonic} />
    </>
  )
}

export default App
