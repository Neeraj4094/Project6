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

import Ourteam from "./Ourteam";
import Content1 from "./Content1";
import Insta from "./Insta";



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
          <Insta></Insta>
          <div class="container my-24 px-6 mx-auto bg-slate-200">

  <section class="mb-32 text-gray-800 text-center">
    <h2 class="text-3xl font-bold mb-12">Our Best <u class="text-blue-600">Students</u></h2>

    <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">
      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
           />

        <p class="font-bold mb-2">John Doe</p>
        <p class="text-gray-500">Co-founder</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          />

        <p class="font-bold mb-2">Lisa Ferrol</p>
        <p class="text-gray-500">Web designer</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
           />
        <p class="font-bold mb-2">Maria Smith</p>
        <p class="text-gray-500">Senior consultant</p>
      </div>
      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
           />
        <p class="font-bold mb-2">Agatha Bevos</p>
        <p class="text-gray-500">Co-founder</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          />
        <p class="font-bold mb-2">Darren Randolph</p>
        <p class="text-gray-500">Marketing expert</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          />
        <p class="font-bold mb-2">Soraya Letto</p>
        <p class="text-gray-500">SEO expert</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/10.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          />
        <p class="font-bold mb-2">Maliha Welch</p>
        <p class="text-gray-500">Web designer</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/11.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
           />
        <p class="font-bold mb-2">Zeynep Dudley</p>
        <p class="text-gray-500">Web developer</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/12.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          />
        <p class="font-bold mb-2">Avaya Hills</p>
        <p class="text-gray-500">Copywritter</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/13.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
           />
        <p class="font-bold mb-2">Thierry Fischer</p>
        <p class="text-gray-500">Senior consultant</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/14.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
           />
        <p class="font-bold mb-2">Aisling Sheldon</p>
        <p class="text-gray-500">Senior developer</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
           />
        <p class="font-bold mb-2">Ayat Black</p>
        <p class="text-gray-500">Web designer</p>
      </div>
    </div>
  </section>

</div>
          <Reviews></Reviews>
          <Logo></Logo>
        </div>
      </div>
        <Foot></Foot>
    </>
  );
}
