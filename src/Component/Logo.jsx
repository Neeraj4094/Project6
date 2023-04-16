import React from 'react'

function Logo() {
  return (
    <>
      <section className="relative pt-20 pb-36 bg-slate-200 overflow-hidden"style={{
      borderRadius: 12,
      margin:2
    }}>
  <img className="absolute top-0 left-0" src="flaro-assets/images/logos/gradient3.svg" alt="" />
  <div className="relative z-10 container px-1 mx-auto">
    <p className="mb-8 text-sm text-gray-600 text-center font-semibold uppercase tracking-px" >Powering next-gen companies</p>
    <div className="flex flex-wrap max-w-5xl mx-auto -m-3">
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
        <a href=""><i class='fs-1 bx bxl-facebook-circle' style={{
            color:'black',
          }} id=''></i></a>
          <img src="flaro-assets/logos/brands/logo-xxl.png" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
          <a href=""><i className=' fs-1 bx bxl-apple' style={{
            color:'black',
          }} id='' ></i></a>
          <img src="flaro-assets/logos/brands/logo-xxl2.png" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
          <a href=""><i class='fs-1 bx bxl-microsoft' style={{
            color:'black',
          }} id=''></i></a>
          <img src="flaro-assets/logos/brands/logo-xxl3.png" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
          <a href=""><i class='fs-1 bx bxl-google' style={{
            color:'black',
          }} id=''></i></a>
          <img src="flaro-assets/logos/brands/logo-xxl4.png" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
          <a href=""><i class='fs-1 bx bxl-trip-advisor' style={{
            color:'black',
          }} id=''></i></a>
          <img src="flaro-assets/logos/brands/logo-xxl5.png" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
          <a href=""><i class='fs-1 bx bxs-business' style={{
            color:'black',
          }} id=''></i></a>
          <img src="flaro-assets/logos/brands/logo-xxl6.png" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
          <a href=""><i class=' fs-1 bx bx-code-curly' style={{
            color:'black',
          }} id=''></i></a>
          <img src="flaro-assets/logos/brands/logo-xxl7.png" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
          <a href=""><i class=' fs-1 bx bxl-github' style={{
            color:'black',
          }} id=''></i></a>
          <img src="flaro-assets/logos/brands/logo-xxl8.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Logo
