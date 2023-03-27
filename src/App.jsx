import { useState } from 'react'

import Nav1 from './Component/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import About1 from './Component/About'
import Services from './Component/Services'
import { Avatar } from 'flowbite-react'
import Contact from './Component/Contact'
import Cards from './Component/Cards'
import Login from './Component/Login'
import Notfound from './Component/Notfound'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
      <BrowserRouter>
      
  <Nav1></Nav1>
  
      <div className="App">
        
      </div>
      <Routes>
        <Route path='/' element={<><Home />
        
        <Cards></Cards></>} />
        <Route path='/About' element={<><About1></About1></>}></Route>
        <Route path='/Services' element={<><Services /></>} />
        <Route path='/Pricing' element={<><Avatar /></>} />
        <Route path='/Contact' element={<><Contact /></>} />
        <Route path='/Login' element={<><Login/></>} />
        <Route path='*' element={<><Notfound/></>} />
        
        </Routes>
        </BrowserRouter>
  


    </>
  )
}

export default App
