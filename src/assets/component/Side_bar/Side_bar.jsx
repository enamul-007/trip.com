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
import banner_img from "../../Images/Banner_img.webp";

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
          <BsList className="text-[23px] text-gray-600" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col py-[15px] space-y-2">
          {menuItems.map((item, index) =>
            item.divider ? (
              <div key={index} className=" h-[1px] bg-gray-100"></div>
            ) : (
              <button
                key={index}
                className="flex items-center transition-colors rounded p-[7px] hover:bg-blue-100 "
              >
                <div className="pl-[6px] text-[20px] text-gray-500 ">
                  {item.icon}
                </div>
                <span
                  className={`ml-6 whitespace-nowrap  duration-300 ${
                    isOpen
                      ? "opacity-100 visible font-Montserrat font-semibold text-[13px] mt-[4.5px]"
                      : "opacity-0 invisible w-0 font-Montserrat font-semibold text-[13px] mt-[4.5px] "
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
      <div className="z-0 flex-1 overflow-y bg-gray-50">
        <div className="flex justify-center w-full mt-7">
          <div className="w-[95%] max-w-[1920px] h-[300px] rounded-2xl overflow-hidden shadow-md relative">
            <picture>
              <img
                className="object-cover w-full h-full"
                src={banner_img}
                alt="Trip.com Banner"
              />
            </picture>

            <div className="absolute left-0 flex flex-col items-center justify-center w-full h-full -top-10">
              <h1 className="text-4xl font-bold text-white font-Montserrat">
                Your Trip Starts Here
              </h1>

              <div>
               <div>
                 <p className=" dotted_underline"> Secure payment</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side_bar;
