import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredits from './pages/BuyCredits'
import Result from './pages/Result'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-[#e2e8f0]'>
    <Navbar/>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<BuyCredits/>}/>
      </Routes>
    </div>
  )
}

export default App
