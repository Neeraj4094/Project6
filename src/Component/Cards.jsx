import React from "react";
import { Card,Footer } from "flowbite-react";
export default function Cards() {
  return (
    <>
    <div className="flex justify-center align-center">
      <div className=" m-12 ">
        <div className="max-w-sm ">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./image/nature.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Famous WorldTour Areas 2023
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <ul icon="circle">
                <li>
              Mountain
                </li>
              Brigdes
              <li>
              </li>
              <li>
              Lakes
              </li>
              </ul>
            </p>
          </Card>
        </div>
      </div>

      <div className="m-10 ">
        <div className="max-w-sm ">
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./image/nature1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Famous WorldTour Areas 2023
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <ul icon="circle">
                <li>
              Mountain
                </li>
              Brigdes
              <li>
              </li>
              <li>
              Lakes
              </li>
              </ul>
            </p>
          </Card>
        </div>
      </div>

      <div className="m-10 ">
        <div className="max-w-sm ">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./image/nature2.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Must Visited Areas 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            <ul icon="circle">
                <li>
              Mountain
                </li>
              Brigdes
              <li>
              </li>
              <li>
              Lakes
              </li>
              </ul>
            </p>
          </Card>
        </div>
      </div>
      
      <div className=" m-10">
        <div className="max-w-sm ">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./image/nature4.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Restricted and Most Dangerous Areas
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            <ul icon="circle">
                <li>
              Mountain
                </li>
              Brigdes
              <li>
              </li>
              <li>
              Lakes
              </li>
              </ul>
            </p>
          </Card>
        </div>
      </div>
      </div>
      <Footer bgDark={true}>
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
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
  );
}
