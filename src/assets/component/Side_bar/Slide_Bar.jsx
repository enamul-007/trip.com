import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoBedSharp, IoCarSportSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdAttractions, MdOutlinePlace, MdDiscount } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { TfiGift } from "react-icons/tfi";
import { GiAchievement } from "react-icons/gi";
import { ImMobile2 } from "react-icons/im";
import Nav_bar from "../Nav_bar/Nav_bar";
import Banner_part from "./Banner_part";

const Slide_Bar = () => {
  const [isOpen, setIsOpen] = useState(false); // initially closed (icons only)

  const menuItems = [
    { icon: <BiSolidPlaneAlt />, label: "Flights" },
    { icon: <IoBedSharp />, label: "Hotels & Homes" },
    { icon: <FaTrainSubway />, label: "Trains" },
    { icon: <IoCarSportSharp />, label: "Cars" },
    { icon: <MdAttractions />, label: "Attractions & Tours" },
    { icon: <RiHotelFill />, label: "Flights + Hotel" },
    { divider: true },
    { icon: <TfiGift />, label: "Gift Cards" },
    { divider: true },
    { icon: <MdOutlinePlace />, label: "Travel Inspiration" },
    { icon: <FaMapMarkedAlt />, label: "Map" },
    { icon: <MdDiscount />, label: "Deals" },
    { divider: true },
    { icon: <GiAchievement />, label: "Trip.com Rewards" },
    { icon: <ImMobile2 />, label: "App" },
  ];

  return (
    <div className="relative h-screen">
      <div className="z-0">
      </div>

      {/* ✅ Fixed Sidebar */}
      <div
        className={`fixed top-5 left-0 h-screen bg-white shadow-lg border-r transition-all duration-300 z-0 ${
          isOpen ? "w-52" : "w-16"
        } mt-[56px]`}
      >
        {/* Sidebar Top (Toggle Button) */}
        <div className="absolute z-50 p-1 transition-colors rounded-lg -top-[65px] left-[10px] hover:bg-gray-100">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-gray-100"
          >
            <BsList className="text-[21px] text-gray-700" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col px-2 pt-1 spa3ce-y-1">
          {menuItems.map((item, index) =>
            item.divider ? (
              <div key={index} className="h-px my-2 bg-gray-200"></div>
            ) : (
              <button
                key={index}
                className="flex items-center p-3 overflow-hidden transition-all duration-200 rounded-lg hover:bg-blue-50 "
              >
                <div className="text-xl text-gray-500 transition-colors ">
                  {item.icon}
                </div>
                <span
                  className={`ml-4 whitespace-nowrap font-medium text-sm transition-all duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible w-0"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          )}
        </nav>
      </div>

      {/* ✅ Scrollable Main Content */}
      <div
        className={`h-screen overflow-hidden transition-all duration-300 pt-[20px] ${
          isOpen ? "ml-52" : "ml-16"
        } p-2`}
      >
        <Banner_part isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Slide_Bar;
