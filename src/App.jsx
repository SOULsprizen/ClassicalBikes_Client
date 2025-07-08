import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import { Home, SignUp, LogIn, Bikes, About, Dealers, PartsandAccessories, Feedback, Shop, OtpVerification } from './AllComponents.js'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/about' element={<About />} />
        <Route path='/dealers' element={<Dealers />} />
        <Route path='/parts-accessories' element={<PartsandAccessories />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/otp-verification/:type/:userId' element={<OtpVerification />} />
      </Routes>
    </BrowserRouter>
  )
}
