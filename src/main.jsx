import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Button from './components/button.jsx'
import { SmoothScrollHero } from './components/SmoothScrollHero.jsx'
import Bubble from './components/BubbleText.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
   <div className='bg-black'>
  <App />
  <div className='flex justify-between items-center'>
<Navbar/>
<Button/>
</div>
<SmoothScrollHero/>
<Bubble/>
</div>
  
   
  </StrictMode>
 
)
