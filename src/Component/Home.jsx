import React from 'react'
import { Carousel } from 'flowbite-react'
export default function Home() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img
      src="assets/nature1.jpg"
      alt="..."
      
    />
    <img
      src="assets/nature1.jpg"
      alt="..."
    />
    <img
      src="assets/nature1.jpg"
      alt="..."
    />
    <img
      src="assets/nature1.jpg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="..."
    />
  </Carousel>
</div>
<div>
  
</div>
    </>
  )
}


