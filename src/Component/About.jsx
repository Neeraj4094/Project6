import React from "react";
import { Carousel } from "flowbite-react";
import Cards from "./Cards";
import Foot from "./Foot";
import Team from "./Team";
// import Card1 from "./Card1";
// import Ourteam from "./Ourteam";
import Aboutbread from "./Aboutbread";
import Content2 from "./Content2";
export default function Home() {
  return (
    <>
      <Aboutbread></Aboutbread>
      <div className="h-96 bg-slate-50 text-slate-900  border-2  font-bold  ">
      {/* <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 m-4">
                <span>Our </span>
                <span className="font-serif italic">Services</span>
              </h1> */}
          <Carousel slideInterval={5000} >
            <img src="./image/img1.jpg"  alt="..." />
            <img src="./image/img2.jpg" alt="..." />
            <img src="./image/img3.jpg" alt="..." />
            <img src="./image/img4.jpg" alt="..." />
            <img src="./image/img3.jpg" alt="..." />
          </Carousel>
        </div>
        
      
            
              
            
      {/* <Ourteam></Ourteam> */}
      {/* <Card1></Card1> */}
      <Cards></Cards>
      <Team></Team>
      
      <Foot></Foot>
    </>
  );
}
