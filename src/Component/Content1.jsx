import React from 'react'
import img8 from '../image/img8.jpg'
import img9 from '../image/img9.jpg'
function Content1() {
  return (
    <>
    <section className="relative h-full ">
  <img className="absolute h-full w-full justify-center " src={img9} alt="" />
  <div className="relative container px-4 mx-auto">
    <div className=" mx-auto">
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div className="relative z-10 max-w-lg mx-auto">
            <h4 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold mt-6">Sign up for our newsletter</h4>
            <div className="md:flex mb-16">
              <div className="mb-6 md:mb-0 md:mr-8 pt-2 text-gray-600">
                <svg width="84" height="10" viewbox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4.5C0.585786 4.5 0.25 4.83579 0.25 5.25C0.25 5.66421 0.585786 6 1 6L1 4.5ZM84 5.25001L76.5 0.919879L76.5 9.58013L84 5.25001ZM1 6L77.25 6.00001L77.25 4.50001L1 4.5L1 6Z" fill="#1E2238"></path>
                </svg>
              </div>
              <div className="max-w-xs">
                <p className="text-lg font-bold text-gray-900">Stay in the loop with everything you need to know.</p>
              </div>
            </div>
            <div className="sm:flex items-center">
              <input className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="pat@saturn.dev" />
              <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden" type="submit">
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <span className="mr-4">Subscribe</span>
                  
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="relative pl-20 lg:pl-16  max-w-lg mx-auto">
            <img className="relative block w-full h-full xl:max-w-sm lg:ml-auto" src={img8} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Content1