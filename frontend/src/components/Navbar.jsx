import React from "react";
import logo from "../assets/logo.jpg";
export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="w-full  flex justify-between items-center px-2 py-3">
          <div className="md:px-20 w-[40%] md:w-[50%]">
            <img src={logo} alt="" />
          </div>
          <div className=" w-[100%] md:w-[40%] flex justify-around items-center text-blue-500   ">
            <div className="md:flex justify-around w-[50%] hidden">
              <a href="#" className="font-[600] text-[18px]">
                Buy
              </a>
              <a href="#" className="font-[600] text-[18px]">
                Rent
              </a>
              <a href="#" className="font-[600] text-[18px]">
                Sell
              </a>
              <a href="#" className="font-[600] text-[18px]">
                PG
              </a>
            </div>
            <button className="  md:px-8 md:py-2 px-4 py-2 bg-blue-600 text-white rounded-[5px] text-[14px] font-[600]">
              Post Property
            </button>
            <button className="border border-blue-700 px-5 py-1 rounded-[5px]">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
