import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import {
  Home, SignUp, LogIn, Bikes, About, Dealers, PartsandAccessories, Feedback, Shop,
  OtpVerification, UserDashboard
} from './AllComponents.js'

import { useAuth } from './context/AuthContext.jsx'

export default function App() {

  const { userDashboard } = useAuth();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Punlic Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/about' element={<About />} />
        <Route path='/dealers' element={<Dealers />} />
        <Route path='/parts-accessories' element={<PartsandAccessories />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/shop' element={<Shop />} />

        {/* Private Routes */}

        <Route path='/user_dashboard' element={userDashboard ? <UserDashboard /> : <Navigate to="/log-in" />} />
        <Route path='/otp-verification/:type/:userId' element={userDashboard ? <OtpVerification /> : <Navigate to="/log-in" />} />
      </Routes>
    </BrowserRouter>
  )
}
