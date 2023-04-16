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
import Ourteam from "./Ourteam";
import Content1 from "./Content1";


export default function About1() {
  return (
    <>
    <Homebread></Homebread>
      <div>
       <Ourteam></Ourteam>
      </div>
      
      <div>
       <div className="m-4">
        <Content1></Content1>
        </div>
        <div
          style={{
            color: "black",
            
          }}
        >
          {/* <Card1></Card1> */}
          <Cards></Cards>
          <Reviews></Reviews>
          <Logo></Logo>
        </div>
      </div>
        <Foot></Foot>
    </>
  );
}
