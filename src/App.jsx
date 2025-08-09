import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredits from './pages/BuyCredits'
import Result from './pages/Result'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/buy" element={<BuyCredits/>}/>
      </Routes>
    </div>
  )
}

export default App
