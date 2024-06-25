import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export const Home = () => {
  return (
    <>
      <div className="relative  h-[300px] md:h-full mb-[100px]">
        <img
          src="https://www.zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-web(new).d119e432.gif"
          alt="property img"
          className="w-[100%] object-cover h-full"
        />
        <div className="w-full  flex justify-center items-center absolute md:top-[350px] bottom-[-60px]  ">
          <div className="md:w-[35%] w-full  bg-white py-5 px-3 border   ">
            <p className="text-blue-600 font-[600] ">Buy</p>
            <div className="flex justify-start items-center gap-5 w-[100%] mt-2">
              <div className="flex justify-start gap-2 items-center border border-gray-400 md:w-[50%] w-[100%]">
                <div>
                  <CiLocationOn className="text-green-500 text-[30px]" />
                </div>
                <input
                  type="text"
                  placeholder="search loaction"
                  className="px-2 outline-none"
                />
              </div>
              <div className="py-3 bg-blue-600 px-3 rounded-[5px]">
                <CiSearch className="text-white font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
