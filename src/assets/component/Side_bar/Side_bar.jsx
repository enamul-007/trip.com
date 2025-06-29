import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoBedSharp } from "react-icons/io5";
import { FaTrainSubway } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { MdAttractions, MdOutlinePlace, MdDiscount } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { TfiGift } from "react-icons/tfi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { ImMobile2 } from "react-icons/im";

const Side_bar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <BiSolidPlaneAlt />, label: "Flights" },
    { icon: <IoBedSharp />, label: "Hotels & Homes" },
    { icon: <FaTrainSubway />, label: "Trains" },
    { icon: <IoCarSportSharp />, label: "Cars" },
    { icon: <MdAttractions />, label: "Attractions & tours" },
    { icon: <RiHotelFill />, label: "Flights + Hotel" },
    { divider: true },
    { icon: <TfiGift />, label: "Gift Cards" },
    { divider: true },
    { icon: <MdOutlinePlace />, label: "Travle Inspiration" },
    { icon: <FaMapMarkedAlt />, label: "Map" },
    { icon: <MdDiscount />, label: "Deals" },
    { divider: true },
    { icon: <GiAchievement />, label: "Trip.com Rewards" },
    { icon: <ImMobile2 />, label: " App" },
  ];

  return (
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <div
        className={`relative bg-white shadow-md border-r pl-2 transition-all duration-300 text-TextPrimary_color ${
          isOpen ? "w-52" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="absolute z-50 top-[-49px] left-[17px] p-1 rounded hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          // aria-label="Toggle Sidebar"
        >
          <BsList className="text-[22px] text-gray-600" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col py-[15px] space-y-2">
          {menuItems.map((item, index) =>
            item.divider ? (
              <div
                key={index}
                className=" h-[1px] bg-gray-100"
              ></div>
            ) : (
              <button
                key={index}
                className="flex items-center transition-colors rounded p-[7px] hover:bg-blue-100"
              >
                <div className="pl-1 text-xl text-gray-500 ">{item.icon}</div>
                <span
                  className={`ml-6 whitespace-nowrap transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 visible font-Montserrat font-semibold text-[13px] mt-[4.5px]"
                      : "opacity-0 invisible w-0 "
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="z-0 flex-1 p-5 overflow-y-auto bg-gray-50">
        <h1 className="mb-4 text-2xl font-bold">Welcome to Trip.com</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et
          voluptatibus doloremque...
        </p>
      </div>
    </div>
  );
};

export default Side_bar;
