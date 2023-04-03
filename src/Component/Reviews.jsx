import React from "react";
import { Rating } from "flowbite-react";
function Reviews() {
  return (
    <>
    <div className="ml-12 p-12">
      <React.Fragment>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-1 text-3xl font-bold text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
        <p className=" text-3xl font-bold xl:h-80 text-gray-500 dark:text-gray-400">
          1,745 global ratings
        
        <div className="text-3xl font-bold xl:h-80">
        <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
        <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
        <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
        <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
        </div>
        </p>
      </React.Fragment>
      </div>
    </>
  );
}

export default Reviews;
