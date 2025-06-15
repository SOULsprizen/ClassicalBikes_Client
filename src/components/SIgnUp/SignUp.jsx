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
<div className=''>
  {/* join */}
     <div className='flex flex-col items-center h-screen gap-4'>
         <ul className='font-extrabold'>VROOOOM!</ul>
         <ul>
          Sign Up To Get News 'bout The Latest  Biker Events
         </ul>
     </div>

</div>

</div>
  

  )
}
