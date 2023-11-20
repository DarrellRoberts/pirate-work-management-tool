import { useState } from 'react'
import ScrollButton from './components/ScrollButton.tsx'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="bg-ship h-screen bg-no-repeat bg-cover">
    <ScrollButton/>
    </div>
  )
}

export default App
