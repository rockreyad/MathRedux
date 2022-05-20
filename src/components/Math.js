import React from "react";
import { useSelector } from "react-redux";

const Math = () => {
  const number = useSelector((state) => state.number);
  return (
    <>
      <div className="">
        <div className="w-72 bg-gray-400 dark:bg-blue-100 rounded-lg  p-5">
          <p className="text-xl font-light text-gray-500">
            Number :
            <span className="text-2xl font-semibold text-black">{number}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Math;
