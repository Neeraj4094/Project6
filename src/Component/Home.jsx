import React from "react";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <>
      
        <div className="h-56 sm:h-64 tracking-tight text-gray-900 bg-white border-2 text-3xl font-bold xl:h-80 sm:text-center">
        Our Services
          <Carousel slideInterval={5000}>
            <img src="./image/img1.jpg" alt="..." />
            <img src="./image/img2.jpg" alt="..." />
            <img src="./image/img3.jpg" alt="..." />
            <img src="./image/img4.jpg" alt="..." />
            <img src="./image/img3.jpg" alt="..." />
          </Carousel>
        </div>
        <div>
      </div>
      
    </>
  );
}
