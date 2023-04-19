import React from 'react'
import { Link } from 'react-router-dom'
function Homebread() {
  return (
    <>
      <section>
  <div className="bg-gray-900">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap xs:h-16 py-4 items-center">
        <div className="w-full xs:w-auto mb-2 xs:mb-0 xs:mr-2">
          
        </div>
        <a className="inline-block text-sm text-green-500 font-bold" href="#">Home</a>
        <span className="mx-3">
          <svg width="6" height="10" viewbox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.453338 1.05338L0.453338 5.20671L0.453339 8.94671C0.453339 9.58671 1.22667 9.90671 1.68001 9.45338L5.13334 6.00005C5.68667 5.44671 5.68667 4.54671 5.13334 3.99338L3.82 2.68005L1.68001 0.540046C1.22667 0.093379 0.453338 0.41338 0.453338 1.05338Z" fill="white"></path>
          </svg>
        </span>
        <a className="inline-block text-sm text-white font-bold" href="#"><Link to="/about" style={{
                  color:"white"
                }}>About</Link></a>
        <span className="mx-3">
          <svg width="6" height="10" viewbox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.453338 1.05338L0.453338 5.20671L0.453339 8.94671C0.453339 9.58671 1.22667 9.90671 1.68001 9.45338L5.13334 6.00005C5.68667 5.44671 5.68667 4.54671 5.13334 3.99338L3.82 2.68005L1.68001 0.540046C1.22667 0.093379 0.453338 0.41338 0.453338 1.05338Z" fill="white"></path>
          </svg>
        </span>
        <a className="inline-block text-sm text-white font-bold" href="#"><Link to="/services" style={{
                  color:"white"
                }}>Services</Link></a>
        <span className="mx-3">
          <svg width="6" height="10" viewbox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.453338 1.05338L0.453338 5.20671L0.453339 8.94671C0.453339 9.58671 1.22667 9.90671 1.68001 9.45338L5.13334 6.00005C5.68667 5.44671 5.68667 4.54671 5.13334 3.99338L3.82 2.68005L1.68001 0.540046C1.22667 0.093379 0.453338 0.41338 0.453338 1.05338Z" fill="white"></path>
          </svg>
        </span>
        <a className="inline-block text-sm text-white font-bold" href="#"><Link to="/login" style={{
                  color:"white"
                }}>Login</Link></a>
        
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Homebread
