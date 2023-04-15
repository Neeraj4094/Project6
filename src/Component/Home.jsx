import React from "react";
import { Accordion } from "flowbite-react";
import "./About.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Homebread from "./Homebread";
import Cards from "./Cards";
// import Card1 from "./Card1";
import Reviews from "./Reviews";
import Logo from "./Logo";
import Foot from "./Foot";


import Card1 from "./Card1";
export default function About1() {
  return (
    <>
    <Homebread></Homebread>
      
      
      <div>
        <div
          style={{
            color: "black",
            background: "grey",
            margin: 4,
            marginRight: 22,
            textAlign: "center",
            padding: 5,
            border: 4,
            borderRadius: 18,
            backgroundColor: "white",
          }}
        >
        <div className="h-56  text-gray-900  border-2 text-3xl font-bold xl:h-80 sm:text-center bg-[url('../image/tut1.jpg')]"></div>

        <div className="App "></div>

        

          <div className="" style={{
            border:12,
            padding:2,
            borderColor:'black',
            borderRadius:12,
          }}>
           
          </div>
          
        </div>
        <div
          style={{
            color: "black",
            background: "grey",
            margin: 24,
            padding: 5,
            border: 4,
            borderColor: "white",
            borderRadius: 18,
          }}
        >
          {/* <Card1></Card1> */}
          <Cards></Cards>
          <Reviews></Reviews>
          <Logo></Logo>
        </div>
        <Foot></Foot>
      </div>
    </>
  );
}
