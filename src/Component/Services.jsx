import React from "react";
import Servicebread from "./Servicebread";
import { Link } from "react-router-dom";
import Foot from "./Foot";
import Login from "./Login";
export default function Services() {
  return (
    <>
      <Servicebread></Servicebread>
      <section className="bg-slate-100 m-14">
  <div className="container mx-auto overflow-hidden ">
    <div className="flex items-center justify-between px-4 py-5 bg-blueGray-50">
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto mr-14">
            <a href="#">
              <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto hidden lg:block">
           
          </div>
          <div className="w-auto hidden lg:block">
            <div className="inline-block">
              <button className="py-3 px-5 w-full text-slate-200 font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600  hover:bg-indigo-700 transition ease-in-out duration-200" type="button"><Link to="/Login" style={{
                  color:"white"
                }}>Try 14 Days Free Trial</Link></button>
            </div>
          </div>
          <div className="w-auto lg:hidden">
            <a href="#">
              <svg className="navbar-burger text-indigo-600" width="51" height="51" viewbox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
      <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
        <div className="flex flex-wrap justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-between -m-2">
              <div className="w-auto p-2">
                <a className="inline-block" href="#">
                  <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                </a>
              </div>
              <div className="w-auto p-2">
                <a className="navbar-burger" href="#">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center py-16 w-full">
            
          </div>
          <div className="flex flex-col justify-end w-full pb-8">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="block">
                  <button className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Try 14 Days Free Trial</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div className="overflow-hidden pt-16">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
            <div className="flex flex-wrap items-center -m-1">
              <div className="w-auto p-1"><a className="text-sm" href="">&#x1F44B; We are hiring! View open roles</a></div>
              <div className="w-auto p-1">
                <svg width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">Discover mentors that helps you grow</h1>
          <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">Get the best-in-className group mentoring plans and professional benefits for your team</p>
          <div className="flex flex-wrap -m-2.5 mb-20">
            <div className="w-full md:w-auto p-2.5">
              <div className="block">
                <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button"><Link to="/Login" style={{
                  color:"white"
                }}>Join Free for 30 Days</Link> </button>
              </div>
            </div>
            <div className="w-full md:w-auto p-2.5">
              <div className="block">
                
              </div>
            </div>
          </div>
          <p className="mb-6 text-sm text-gray-500 font-semibold uppercase">Trusted and loved by 100+ tech first teams</p>
          <div className="flex flex-wrap -m-3">
            <div className="w-auto p-3">
              <img src="flaro-assets/logos/brands/brand.png" alt="" />
            </div>
            <div className="w-auto p-3">
              <img src="flaro-assets/logos/brands/brand2.png" alt="" />
            </div>
            <div className="w-auto p-3">
              <img src="flaro-assets/logos/brands/brand3.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <img className="transform hover:-translate-y-16 transition ease-in-out duration-1000" src="flaro-assets/images/headers/header.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

      

      

      <div className="bg-slate-200 border-4 bordr-gray-900 py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl sm:text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple no-tricks pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Lifetime membership
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
                amet indis perferendis blanditiis repellendus etur quidem
                assumenda.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
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

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
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

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
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

                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
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
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $349
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <Link to="/Login" style={{
                  color:"white"
                }}>Get Access</Link>
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Login></Login>
      <Foot></Foot>
    </>
  );
}
