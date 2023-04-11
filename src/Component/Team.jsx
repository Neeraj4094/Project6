import React from "react";
import img9 from "../image/img9.jpg";
function Team() {
  return (
    <>
      <section className="relative py-10 md:py-32 overflow-hidden bg-slate-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto mb-18 text-center">
              <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
                <span>Amazing</span>
                <span className="font-serif italic">Team</span>
              </h1>
              <p className="text-lg text-gray-500">
                We provide experienced advisors to help your company become more
                successful in the future.
              </p>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-8">
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="max-w-xs md:max-w-none mx-auto h-full pt-3 px-3 pb-5 bg-white">
                  <img
                    className="block w-full mb-4 h-64 object-cover"
                    src={img9}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Cameron Williamson</h5>
                    <span className="text-sm font-bold text-gray-400">
                      Founder
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="max-w-xs md:max-w-none mx-auto h-full pt-3 px-3 pb-5 bg-white">
                  <img
                    className="block w-full mb-4 h-64 object-cover"
                    src={img9}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Annette Black</h5>
                    <span className="text-sm font-bold text-gray-400">
                      Co-Founder
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="max-w-xs md:max-w-none mx-auto h-full pt-3 px-3 pb-5 bg-white">
                  <img
                    className="block w-full mb-4 h-64 object-cover"
                    src={img9}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Robert Fox</h5>
                    <span className="text-sm font-bold text-gray-400">
                      Art Director
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="max-w-xs md:max-w-none mx-auto h-full pt-3 px-3 pb-5 bg-white">
                  <img
                    className="block w-full mb-4 h-64 object-cover"
                    src={img9}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Eleanor Pena</h5>
                    <span className="text-sm font-bold text-gray-400">
                      Project Manager
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="max-w-xs md:max-w-none mx-auto h-full pt-3 px-3 pb-5 bg-white">
                  <img
                    className="block w-full mb-4 h-64 object-cover"
                    src={img9}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Darlene Robertson</h5>
                    <span className="text-sm font-bold text-gray-400">
                      UI Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="max-w-xs md:max-w-none mx-auto h-full pt-3 px-3 pb-5 bg-white">
                  <img
                    className="block w-full mb-4 h-64 object-cover"
                    src={img9}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Courtney Henry</h5>
                    <span className="text-sm font-bold text-gray-400">
                      Co-Founder
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="max-w-xs md:max-w-none mx-auto h-full pt-3 px-3 pb-5 bg-white">
                  <img
                    className="block w-full mb-4 h-64 object-cover"
                    src={img9}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Floyd Miles</h5>
                    <span className="text-sm font-bold text-gray-400">
                      Graphic Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <div className="max-w-xs md:max-w-none mx-auto h-full pt-3 px-3 pb-5 bg-white">
                  <img
                    className="block w-full mb-4 h-64 object-cover"
                    src={img9}
                    alt=""
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-bold">Kristin Watson</h5>
                    <span className="text-sm font-bold text-gray-400">
                      Illustrator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
