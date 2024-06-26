import React, { useState, useEffect } from "react";
import { MdOutlineKingBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { LiaBedSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { AiTwotoneHeart } from "react-icons/ai";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import data from "../db.json";

export const cards = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/122269375/photo/elementary-school-in-pennsylvania.jpg?s=612x612&w=0&k=20&c=Ajdag8XkAyO32kbD2NUiFZs3K5HCN2wSCSuWMQOg1xY=",
    price: "4800",
    address: "HSR Layout, Bengaluru, Karnataka - 560102",
    description: "3 BHK Apartment for Sale in JP Nagar, Bengaluru",
    bed: "2 Beds",
    bath: "5 Baths",
    type: "Furnished",
    date: "10 May 2023",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/94732796/photo/a-deserted-modern-school-building-during-day-time.jpg?s=612x612&w=0&k=20&c=yn93k-rzf6T8NuZUPOLieXWxsJC7w4xrXhu_bwNcPMg=",
    price: "4800",
    address: "8, 31, Aga Abbas Ali Rd, Halasuru, Yellappa",
    description: "2 BHK Apartment for Rent in HSR Layout, Bengaluru",
    bed: "2Beds",
    bath: "5Bath",
    type: "Furnished",
    date: "10 May 2023",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/183829120/photo/primary-school-building-in-kent-united-kingdom.jpg?s=612x612&w=0&k=20&c=s8eonbh-7_Jzb9wwYjxKdvnk3f4gCDf24wSJnPeJlNA=",
    price: "4800",
    address: "WMJH+59C, Bellandur, Bengaluru, Karnataka ",
    description: "2 BHK Apartment for Sale in Bellandur, Bengaluru",
    bed: "4Beds",
    bath: "3Baths",
    type: "Unfurnished",
    date: "10 May 2023",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/156919428/photo/brandywine-heights-high-school-in-topton-pennsylvania.jpg?s=612x612&w=0&k=20&c=sQnVkYlvQQjBB_GIPrnqahzaiL6j1_JlzuCnFwPe4Y8=",
    price: "4800",
    address: "DSR Rainbow Heights, 24th Main Rd, ITI Layout",
    description: "3 BHK Apartment for Sale in 24th Main Road, Bengaluru",
    bed: "3Beds",
    bath: "2Baths",
    type: "Underconstruction",
    date: "10 May 2023",
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/115867277/photo/academy.jpg?s=612x612&w=0&k=20&c=L4Z_B4gcGgQG6TrY6BQVsQ-fjJJ441Ef8zlEZWqmbSM=",
    price: "4800",
    address: "43, Vinayaka Layout, Bhuvaneshwari Nagar",
    description: "2 BHK Apartment for Sale in Nagdevanahalli, Bengaluru Urban",
    bed: "4Beds",
    bath: "5Baths",
    type: "Furnished",
    date: "10 May 2023",
  },
  {
    id: 6,
    image:
      "https://media.istockphoto.com/id/170617725/photo/high-school-with-blue-sky-and-modern-architecture.jpg?s=612x612&w=0&k=20&c=phprHCtrvwExFYmHUDtGJpx_jdEvL1yAkHkNzTYNH3w=",
    price: "4800",
    address: "78/9, near Friends Bakery, Sector 6",
    description:
      "4 BHK Apartment for Rent in Muneshwara Nagar, Bengaluru Urban",
    bed: "4Beds",
    bath: "2Baths",
    type: "Furnished",
    date: "10 May 2023",
  },
  {
    id: 7,
    image:
      "https://media.istockphoto.com/id/173761967/photo/high-school-building-entrance-copyspace-and-sky.jpg?s=612x612&w=0&k=20&c=i4JYhTWNUY02mUBLDgSj9ZDvMD-Hv_dJVe89ypMm8lo=",
    price: "4800",
    address: "26, 1st Cross, Rajaram Mohan Roy Extension",
    description: "3 BHK Apartment for Sale in Sudhama Nagar, Bengaluru Urban",
    bed: "4Beds",
    bath: "2Baths",
    type: "Unfurnished",
    date: "10 May 2023",
  },
  {
    id: 8,
    image:
      "https://media.istockphoto.com/id/96936221/photo/school-building-with-flag.jpg?s=612x612&w=0&k=20&c=KLAcx78wj3hf1c4ZwgpfB-vdS0eM9ply5yAstmcDqUE=",
    price: "4800",
    address: "OLETY LANDMARK, 9/1, VHBCS Layout",
    description: "3 BHK Apartment for Rent in Basaveshwar Nagar",
    bed: "3Beds",
    bath: "5Baths",
    type: "Underconstruction",
    date: "10 May 2023",
  },
  {
    id: 9,
    image:
      "https://media.istockphoto.com/id/1317007945/photo/exterior-view-of-a-typical-american-school-building.jpg?s=612x612&w=0&k=20&c=FffTSUEMo9VODNLVR6AL7KEEgdMIucu5wgixzTMiBgk=",
    price: "4800",
    address: "8, 31, Aga Abbas Ali Rd, Halasuru, Yellappa ",
    description: "3 BHK Apartment for Rent in Sivanchetti Gardens",
    bed: "4Beds",
    bath: "4Baths",
    type: "Furnished",
    date: "10 May 2023",
  },
  {
    id: 10,
    image:
      "https://media.istockphoto.com/id/184885402/photo/school-building-and-playground.jpg?s=612x612&w=0&k=20&c=su-cHsionBkoxsPRd4WLqGZGnwOsVXLWCMt1nHV3Rv8=",
    price: "4800",
    address: "Richards Town, Bengaluru, Karnataka - 560005",
    description: "2 BHK Apartment for Sale in Richards Town, Bengaluru",
    bed: "3Beds",
    bath: "5Baths",
    type: "Furnished",
    date: "10 May 2023",
  },
];

export const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [filter, setFilter] = useState("All");
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData =
    filter === "All"
      ? cards
      : cards.filter((el) => parseInt(el.description) === parseInt(filter));

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < cards.length - cardsPerView) {
      setStartIndex(startIndex + 1);
    }
  };

  function getCardsPerView() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-start items-center md:gap-5 border-red-500 font-Poppins, sans-serif ">
        <div>
          <p className="text-[20px] text-[#333d5e] font-[600] md:ml-8 ">
            Popular Apartment in Bengaluru
          </p>
        </div>
        <div className={`flex justify-between items-center gap-4 md:mt-0 mt-5`}>
          <p
            className={` ${
              filter === "All" ? "bg-[#50bf97]" : "bg-[#edf4f9] "
            } ${
              filter === "All" ? "text-white" : "text-black"
            }    px-4 rounded-[5px] cursor-pointer `}
            onClick={() => handleFilterChange("All")}
          >
            All
          </p>
          <p
            className={`bg-[#edf4f9] px-3 rounded-[5px] cursor-pointer ${
              filter === "2" ? "bg-[#50bf97]" : "bg-[#edf4f9] "
            } ${filter === "2" ? "text-white" : "text-black"} `}
            onClick={() => handleFilterChange("2")}
          >
            2 BHK
          </p>
          <p
            className={`bg-[#edf4f9]  px-3 rounded-[5px] ${
              filter === "3" ? "bg-[#50bf97]" : "bg-[#edf4f9] "
            } ${filter === "3" ? "text-white" : "text-black"} cursor-pointer`}
            onClick={() => handleFilterChange("3")}
          >
            3 BHK
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-10 relative">
        <button
          onClick={handlePrevClick}
          className="bg-white w-10 h-12 p-2 rounded-[10px] border absolute z-10 bottom-[260px]"
        >
          <FcPrevious />
        </button>

        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {filteredData.map((card) => (
              <div
                key={card.id}
                className={`flex-none p-4 md:m-4 rounded border ${
                  cardsPerView === 4
                    ? "w-[350px]"
                    : cardsPerView === 2
                    ? "w-1/2"
                    : "w-full"
                }`}
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt=""
                    className="object-cover md:w-full w-[20%] h-48 rounded-[20px]"
                  />
                  <div className="absolute md:right-5 md:top-[170px] bottom-[5px]   rounded-full w-10 h-10 text-center m-auto flex justify-center items-center bg-white ">
                    <div>
                      <AiTwotoneHeart className="text-[20px] text-white text-center m-auto " />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-blue-600 font-bold">₹ {card.price} Lac</p>
                  <p className="text-lg font-semibold mt-3 ">
                    {card.description.substring(0, 30)}...
                  </p>
                  <div className="flex justify-start items-center gap-2 mt-2">
                    <GrLocation className="text-gray-500 text-lg" />
                    <p className="text-gray-400 text-[14px] ">
                      {card.address.substring(0, 40)}...
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-start items-center mt-2  w-[13%] md:w-[90%]">
                  <div className="flex justify-start items-center ">
                    <MdOutlineKingBed className="text-blue-600" />
                    <p className="font-[600] ml-2 text-[14px] ">{card.bed}</p>
                  </div>
                  <div className="flex items-center">
                    <BiBath className="text-blue-600" />
                    <p className="font-[600] ml-2 text-[14px] ">{card.bath}</p>
                  </div>
                  <div className="flex items-center">
                    <LiaBedSolid className="text-blue-600" />
                    <p className="font-[600] ml-2 text-[14px]">
                      {card.type.substring(0, 8)}...
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 w-[13%] md:w-[90%]">
                  <div>
                    <p className="text-gray-400">Posted on</p>
                    <p className="font-semibold">{card.date}</p>
                  </div>
                  <button className="px-3 py-1 rounded bg-blue-600 text-white">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNextClick}
          className="bg-white w-10 h-12 p-2 rounded-[10px] text-blue-600 font-[bold] absolute right-2 bottom-[260px] "
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
};
