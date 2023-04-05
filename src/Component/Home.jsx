import React from "react";
import { Accordion } from "flowbite-react";
import "./About.css";
import { MDBIcon } from "mdb-react-ui-kit";

import Cards from "./Cards";
import Reviews from "./Reviews";
import Foot from "./Foot";
import back from "../image/tut1.jpg";
export default function About1() {
  return (
    <>
      <div
        style={{
          color: "black",
          background: "grey",
          margin: 24,
          padding: 5,
          textAlign: "center",
          border: 4,
          borderRadius: 18,
        }}
      >
        <MDBIcon fas icon="cubes fa-2x me-2" style={{ color: "#ff6219" }} />
        <br />
        Welcome to Creative Website
      </div>
      <div>
        <div className="h-56  text-gray-900  border-2 text-3xl font-bold xl:h-80 sm:text-center bg-[url('../image/tut1.jpg')]"></div>

        <div className="App "></div>

        

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
          <div
            style={{
              color: "black",
              background: "grey",
              margin: 24,
              padding: 5,
              border: 4,
              borderRadius: 18,
            }}
          >
            Our Tech
          </div>

          <Cards></Cards>
          <Cards></Cards>
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
          <Reviews></Reviews>
        </div>
        <Foot></Foot>
      </div>
    </>
  );
}
