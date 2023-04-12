import React from "react";
import Servicebread from "./Servicebread";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <>
      <Servicebread></Servicebread>

      <section class="bg-slate-100 m-14">
  <div class="container mx-auto overflow-hidden ">
    <div class="flex items-center justify-between px-4 py-5 bg-blueGray-50">
      <div class="w-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-auto mr-14">
            <a href="#">
              <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-auto hidden lg:block">
           
          </div>
          <div class="w-auto hidden lg:block">
            <div class="inline-block">
              <button class="py-3 px-5 w-full text-slate-200 font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600  hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Try 14 Days Free Trial</button>
            </div>
          </div>
          <div class="w-auto lg:hidden">
            <a href="#">
              <svg class="navbar-burger text-indigo-600" width="51" height="51" viewbox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
      <nav class="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
        <div class="flex flex-wrap justify-between h-full">
          <div class="w-full">
            <div class="flex items-center justify-between -m-2">
              <div class="w-auto p-2">
                <a class="inline-block" href="#">
                  <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                </a>
              </div>
              <div class="w-auto p-2">
                <a class="navbar-burger" href="#">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center py-16 w-full">
            
          </div>
          <div class="flex flex-col justify-end w-full pb-8">
            <div class="flex flex-wrap">
              <div class="w-full">
                <div class="block">
                  <button class="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Try 14 Days Free Trial</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div class="overflow-hidden pt-16">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-8">
        <div class="w-full md:w-1/2 p-8">
          <div class="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
            <div class="flex flex-wrap items-center -m-1">
              <div class="w-auto p-1"><a class="text-sm" href="">&#x1F44B; We are hiring! View open roles</a></div>
              <div class="w-auto p-1">
                <svg width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
          <h1 class="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">Discover mentors that helps you grow</h1>
          <p class="mb-11 text-lg text-gray-900 font-medium md:max-w-md">Get the best-in-class group mentoring plans and professional benefits for your team</p>
          <div class="flex flex-wrap -m-2.5 mb-20">
            <div class="w-full md:w-auto p-2.5">
              <div class="block">
                <button class="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button"><Link to="/Login">Join Free for 30 Days</Link> </button>
              </div>
            </div>
            <div class="w-full md:w-auto p-2.5">
              <div class="block">
                
              </div>
            </div>
          </div>
          <p class="mb-6 text-sm text-gray-500 font-semibold uppercase">Trusted and loved by 100+ tech first teams</p>
          <div class="flex flex-wrap -m-3">
            <div class="w-auto p-3">
              <img src="flaro-assets/logos/brands/brand.png" alt="" />
            </div>
            <div class="w-auto p-3">
              <img src="flaro-assets/logos/brands/brand2.png" alt="" />
            </div>
            <div class="w-auto p-3">
              <img src="flaro-assets/logos/brands/brand3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-8">
          <img class="transform hover:-translate-y-16 transition ease-in-out duration-1000" src="flaro-assets/images/headers/header.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <div
        style={{
          backgroundColor: "bg-black-900",
          color: "black",
          
          zIndex:0,
        }}
      >
        <section class="pt-14 pb-28 bg-[url('../image/tut4.jpg')] bg-opacity-100 overflow-hidden ">
          <div class="container px-4 mx-auto">
            <div class="text-center max-w-lg mx-auto">
              <h2 class="mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
                Collaborate efficiently with the teams today
              </h2>
              <p class="mb-7 text-lg text-gray-600 font-medium">
                Amet minim mollit non deserunt ullamco.
              </p>
              <div class="mb-11 md:inline-block">
                <button
                  class="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                  type="button"
                >
                  Join Free for 30 Days
                </button>
              </div>
              <div class="flex flex-wrap items-center justify-center -m-1">
                <div class="w-auto p-1">
                  <div class="flex flex-wrap">
                    <div class="w-auto">
                      <img
                        src="flaro-assets/images/cta/avatar-circle.png"
                        alt=""
                      />
                    </div>
                    <div class="w-auto -ml-3">
                      <img
                        src="flaro-assets/images/cta/avatar-circle2.png"
                        alt=""
                      />
                    </div>
                    <div class="w-auto -ml-3">
                      <img
                        src="flaro-assets/images/cta/avatar-circle3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="w-auto p-1">
                  <p class="text-gray-600 font-medium">
                    <span>Join</span>
                    <span class="font-bold">250+</span>
                    <span>other startup founders</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      

      <div class="bg-slate-200 border-4 bordr-gray-900 py-24 sm:py-32 ">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div class="mx-auto max-w-2xl sm:text-center text-white">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple no-tricks pricing
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div class="p-8 sm:p-10 lg:flex-auto">
              <h3 class="text-2xl font-bold tracking-tight text-gray-900">
                Lifetime membership
              </h3>
              <p class="mt-6 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
                amet indis perferendis blanditiis repellendus etur quidem
                assumenda.
              </p>
              <div class="mt-10 flex items-center gap-x-4">
                <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  What’s included
                </h4>
                <div class="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Private forum access
                </li>

                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Member resources
                </li>

                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Entry to annual conference
                </li>

                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Official member t-shirt
                </li>
              </ul>
            </div>
            <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div class="mx-auto max-w-xs px-8">
                  <p class="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                    <span class="text-5xl font-bold tracking-tight text-gray-900">
                      $349
                    </span>
                    <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a
                    href="#"
                    class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p class="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
