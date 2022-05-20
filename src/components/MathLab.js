import React from "react";

const MathLab = () => {
  return (
    <div>
      <div className="bg-gray-600 rounded-xl w-72">
        <div className="">
          <p className="text-white text-xl p-2 uppercase">Math Lab</p>
          <div className="flex justify-around bg-blue-800 bg-opacity-20 backdrop-filter rounded-b-xl">
            <div className="text-white  p-2">
              <p className="">Add</p>
              <button className="w-7 py-1 px-2 bg-gray-400 rounded-md hover:bg-gray-200 hover:text-black font-semibold my-1 shadow-md shadow-slate-400 hover:shadow-slate-50">
                +
              </button>
            </div>
            <div className="text-white  p-2">
              <p className="">Sub</p>
              <button className="w-7 py-1 px-2 bg-gray-400 rounded-md hover:bg-gray-200 hover:text-black font-semibold my-1 shadow-md shadow-slate-400 hover:shadow-slate-50">
                -
              </button>
            </div>
            <div className="text-white  p-2">
              <p className="">Mul</p>
              <button className="w-7 py-1 px-2 bg-gray-400 rounded-md hover:bg-gray-200 hover:text-black font-semibold my-1 shadow-md shadow-slate-400 hover:shadow-slate-50">
                *
              </button>
            </div>
            <div className="text-white  p-2">
              <p className="">Div</p>
              <button className="w-7 py-1 px-2 bg-gray-400 rounded-md hover:bg-gray-200 hover:text-black font-semibold my-1 shadow-md shadow-slate-400 hover:shadow-slate-50">
                /
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathLab;
