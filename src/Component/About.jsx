import React from "react";
import { Carousel } from "flowbite-react";
import Cards from "./Cards";
import Foot from "./Foot";
import Aboutbread from "./Servicebread";
export default function Home() {
  return (
    <>
      <Aboutbread></Aboutbread>
      <div className="h-56  text-gray-900  border-2 text-3xl font-bold xl:h-80 sm:text-center">
    <div style={{
          color:"black",
          background:"grey",
          margin:24,
          padding:5,
          border:4,
          borderRadius:18
        }}>Our services</div>
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
      
      <Cards></Cards>
      <Foot></Foot>
    </>
  );
}
