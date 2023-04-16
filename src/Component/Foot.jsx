import React from 'react'
import { Footer } from 'flowbite-react'
function Foot() {
  return (
    <>
      <Footer bgDark={true}>
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/">Home</Footer.Link>
                
                <Footer.Link href="/about">About</Footer.Link>
                <Footer.Link href="/services">Services</Footer.Link>
                <Footer.Link href="/Login">Login</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us On" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Instagram <i class='bx bxl-instagram' ></i></Footer.Link>
                <Footer.Link href="#">Twitter <i class='bx bxl-twitter' ></i></Footer.Link>
                <Footer.Link href="#">Facebook <i class='bx bxl-facebook' ></i></Footer.Link>
                <Footer.Link href="#">Github <i class='bx bxl-github' ></i></Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default Foot
