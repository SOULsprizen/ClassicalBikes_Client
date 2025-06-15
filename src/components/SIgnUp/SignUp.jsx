import React from 'react'
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { SiYamahamotorcorporation } from "react-icons/si";


export default function SignUp() {
  return (
   
 <div className='flex'>

{/* left */}
<div className='w-1/2 text-white bg-gradient-to-r from-blue-500 to-purple-500 h-screen'>

{/* name */}
<div className='flex items-center justify-center gap-4 text-9xl'>
  <div>
<GiFullMotorcycleHelmet />

  </div>
  <div>
    SuperBike
  </div>

</div>

{/* img */}
<div className='text-9xl flex items-center justify-center h-60'>
   <SiYamahamotorcorporation />
   {/* text */}
</div>
      <ul className='text-5xl flex items-center justify-center gap-3'><ul className='font-extrabold'>RIDING</ul> is everything.</ul>
<div>

</div>
{/* moto */}
<div className='text-2xl flex flex-col  justify-center h-60'>
  <li>Four wheels move the body; two wheels move the soul.</li>
<li>Life is short, buy the motorcycle, have a ride, live your dreams.</li>
</div>
</div>



{/* right */}
<div className='w-1/2 text-white bg-gradient-to-r from-purple-500 to-blue-500 h-screen'>
  {/* join */}
     <div className='flex flex-col justify-between text-4xl items-center '>
         <ul className='font-extrabold'>VROOOOM!</ul>
         <ul> Sign Up To Get News 'bout The Latest  Biker Events  </ul>
     </div>

{/* methods */}
<div className='flex items-center h-30 w-fit'>
<ul>Sign Up With Google</ul>
</div>


{/* info */}
<div className='flex flex-col gap-7'>

<div>
<input type="text" className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder='Enter your name' />
</div>
<div>
  <input type="email" className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder='Enter your Email'/>
</div>
<div>
  <input type="password" className='border-2 border-gray-300 rounded-md p-2 w-full' placeholder='Enter Password' />
</div>
<div>
  <input type="checkbox" className='border-2 border-gray-300 rounded-md p-2 w-full ' /><span className='flex justify-center'>Save Password</span>
</div>
<div className='flex items-center justify-center'>
  <button type="submit " >Sign Up</button>
</div>
</div>



</div>

</div>
  

  )
}
