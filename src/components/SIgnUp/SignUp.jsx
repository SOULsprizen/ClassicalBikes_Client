import { useState } from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { SiYamahamotorcorporation } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

export default function SignUp() {

  const [data, SetData] = useState({})

  const SignData = [
    { name: 'name', placeholder: 'Enter your name', type: 'text' },
    { name: 'email', placeholder: 'Enter your email', type: 'email' },
    { name: 'password', placeholder: 'Enter your password', type: 'password' },
  ]

  const objData = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSignupDB = async (e) => {

    try {
      e.preventDefault()
      const response = await axios.post('http://localhost:8080/CreateUser', data)

      console.log(response)

    }
    catch (err) {

      alert(err.response?.data?.msg || 'An error occurred')
    }
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen font-sans">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full text-white bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col justify-center items-center p-10 gap-10">
        <div className="flex items-center gap-4 text-6xl font-bold">
          <GiFullMotorcycleHelmet className="text-white" />
          <span>SuperBike</span>
        </div>

        <div className="text-8xl">
          <SiYamahamotorcorporation />
        </div>

        <div className="text-3xl font-semibold text-center">
          <span className="font-extrabold text-white">RIDING</span> is everything.
        </div>

        <ul className="text-xl space-y-4 text-center max-w-md">
          <li>Four wheels move the body; two wheels move the soul.</li>
          <li>Life is short, buy the motorcycle, have a ride, live your dreams.</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full bg-gradient-to-r from-purple-600 to-blue-600 flex flex-col justify-center items-center px-8 py-12 text-white gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-2">VROOOOM!</h2>
          <p className="text-xl">Sign Up To Get News 'bout The Latest Biker Events</p>
        </div>

        {/* Google Sign Up */}
        <button className="flex items-center gap-3 bg-white text-black px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          <FcGoogle className="text-2xl" />
          <span className="text-md font-medium">Sign Up with Google</span>
        </button>

        {/* Divider */}
        <div className="w-full max-w-md border-b border-white/30"></div>

        {/* Input Fields */}
        <form className="flex flex-col gap-5 w-full max-w-md">

          {
            SignData.map(({ name, placeholder, type }, index) => (
              <input onChange={objData} key={index} type={type} name={name} placeholder={placeholder} className="p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white" />
            ))
          }

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-white" />
            Save Password
          </label>

          <button onClick={handleSignupDB} type="submit" className="bg-white text-blue-600 font-semibold py-3 rounded-md hover:bg-gray-200 transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
