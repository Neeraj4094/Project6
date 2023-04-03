import React from "react";
import { Card } from "flowbite-react";

export default function Cards() {
  return (
    <>
    <div className="flex justify-center align-center">
      <div className=" m-14 pt-12 ">
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

      <div className="m-14 pt-12 ">
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

      <div className="m-14 pt-12">
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
      
      <div className=" mt-14 pt-12">
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
      
    </>
  );
}
