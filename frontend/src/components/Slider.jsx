import React, { useState, useEffect } from "react";
import { MdOutlineKingBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { LiaBedSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export const cards = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/122269375/photo/elementary-school-in-pennsylvania.jpg?s=612x612&w=0&k=20&c=Ajdag8XkAyO32kbD2NUiFZs3K5HCN2wSCSuWMQOg1xY=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/94732796/photo/a-deserted-modern-school-building-during-day-time.jpg?s=612x612&w=0&k=20&c=yn93k-rzf6T8NuZUPOLieXWxsJC7w4xrXhu_bwNcPMg=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/183829120/photo/primary-school-building-in-kent-united-kingdom.jpg?s=612x612&w=0&k=20&c=s8eonbh-7_Jzb9wwYjxKdvnk3f4gCDf24wSJnPeJlNA=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/156919428/photo/brandywine-heights-high-school-in-topton-pennsylvania.jpg?s=612x612&w=0&k=20&c=sQnVkYlvQQjBB_GIPrnqahzaiL6j1_JlzuCnFwPe4Y8=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/115867277/photo/academy.jpg?s=612x612&w=0&k=20&c=L4Z_B4gcGgQG6TrY6BQVsQ-fjJJ441Ef8zlEZWqmbSM=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 6,
    image:
      "https://media.istockphoto.com/id/170617725/photo/high-school-with-blue-sky-and-modern-architecture.jpg?s=612x612&w=0&k=20&c=phprHCtrvwExFYmHUDtGJpx_jdEvL1yAkHkNzTYNH3w=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 7,
    image:
      "https://media.istockphoto.com/id/173761967/photo/high-school-building-entrance-copyspace-and-sky.jpg?s=612x612&w=0&k=20&c=i4JYhTWNUY02mUBLDgSj9ZDvMD-Hv_dJVe89ypMm8lo=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 8,
    image:
      "https://media.istockphoto.com/id/96936221/photo/school-building-with-flag.jpg?s=612x612&w=0&k=20&c=KLAcx78wj3hf1c4ZwgpfB-vdS0eM9ply5yAstmcDqUE=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 9,
    image:
      "https://media.istockphoto.com/id/1317007945/photo/exterior-view-of-a-typical-american-school-building.jpg?s=612x612&w=0&k=20&c=FffTSUEMo9VODNLVR6AL7KEEgdMIucu5wgixzTMiBgk=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
  {
    id: 10,
    image:
      "https://media.istockphoto.com/id/184885402/photo/school-building-and-playground.jpg?s=612x612&w=0&k=20&c=su-cHsionBkoxsPRd4WLqGZGnwOsVXLWCMt1nHV3Rv8=",
    price: "4800",
    address: "benguluru",
    description: "3bhk",
    bed: "2",
    bath: "5",
    date: "10 May 2023",
  },
];

export const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

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
      <div className="flex  justify-start md:gap-5 border-red-500">
        <p className="text-[20px] font-[600] md:ml-16">
          Popular Apartment in Bengaluru
        </p>
        <p className="bg-green-400 px-4 rounded-[5px]">All</p>
        <p className="bg-gray-300 px-3 rounded-[5px]">2 BHK</p>
        <p className="bg-gray-300 px-3 rounded-[5px]">3 BHK</p>
      </div>
      <div className="flex items-center justify-between w-full mt-10">
        {startIndex === 0 ? (
          <div className="w-10 h-10"></div>
        ) : (
          <button
            onClick={handlePrevClick}
            className="bg-yellow-300 w-10 h-10 p-2 rounded-full"
          >
            &lt;
          </button>
        )}
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flex-none p-4 md:m-2 rounded border ${
                  cardsPerView === 4
                    ? "w-1/4"
                    : cardsPerView === 2
                    ? "w-1/2"
                    : "w-full"
                }`}
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt=""
                    className="object-cover w-full h-48 rounded-[20px]"
                  />
                  <div className="absolute md:right-5 md:top-[170px] bottom-[5px]  border border-gray-400 rounded-full w-10 h-10 text-center m-auto flex justify-center items-center bg-white ">
                    <div>
                      <CiHeart className="text-[20px] text-center m-auto " />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-blue-600 font-bold">₹ {card.price} Lac</p>
                  <p className="text-lg font-semibold">{card.description}</p>
                  <div className="flex justify-start items-center gap-2">
                    <CiLocationOn className="text-gray-500 text-lg" />
                    <p className="text-gray-400">{card.address}</p>
                  </div>
                </div>
                <div className="flex justify-between text-start items-center mt-2  w-[18%] md:w-[90%]">
                  <div className="flex justify-start items-center ">
                    <MdOutlineKingBed className="text-blue-600" />
                    <p className="font-[600]">{card.bed}</p>
                  </div>
                  <div className="flex items-center">
                    <BiBath className="text-blue-600" />
                    <p className="font-[600]">{card.bath}</p>
                  </div>
                  <div className="flex items-center">
                    <LiaBedSolid className="text-blue-600" />
                    <p className="font-[600]">furniture</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 w-[18%] md:w-[90%]">
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
        {startIndex >= cards.length - cardsPerView ? (
          <div className="w-10 h-10"></div>
        ) : (
          <button
            onClick={handleNextClick}
            className="bg-yellow-300 w-10 h-10 p-2 rounded-full"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
