import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import SignUp from './components/SIgnUp/SignUp.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import Bikes from './components/Bikes/Bikes.jsx'
import About from './components/About/About.jsx'
import Dealers from './components/Dealer/Dealers.jsx'
import PartsandAccessories from './components/Parts/PartsandAccessories.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Shop from './components/Shop/Shop.jsx'
import OtpVerification from './components/OtpVerification.jsx'
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
        <Route path='/feedback' element={<Feedback/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/otp-verification/:type/:userId' element={<OtpVerification/>} />
      </Routes>
    </BrowserRouter>
  )
}
