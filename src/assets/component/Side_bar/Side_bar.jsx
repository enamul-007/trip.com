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
import secure_img from "../../Images/secure_img.png";
import support_img from "../../Images/support_img.png";
import award_img from "../../Images/award_img.png";

const Side_bar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Flights" ," Flight + Hotel" );

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
    { icon: <MdOutlinePlace />, label: "Travel Inspiration" },
    { icon: <FaMapMarkedAlt />, label: "Map" },
    { icon: <MdDiscount />, label: "Deals" },
    { divider: true },
    { icon: <GiAchievement />, label: "Trip.com Rewards" },
    { icon: <ImMobile2 />, label: "App" },
  ];

  const tabItems = [
    { icon: <BiSolidPlaneAlt />, label: "Flights" },
    { icon: <IoBedSharp />, label: "Hotels & Homes" },
    { icon: <FaTrainSubway />, label: "Trains" },
    { icon: <IoCarSportSharp />, label: "Cars" },
    { icon: <MdAttractions />, label: "Attractions & Tours" },
    { icon: <RiHotelFill />, label: "Flight + Hotel" },
  ];

  // Dynamic height based on active tab
const getBannerHeight = () => {
  switch (activeTab) {
    case "Flights":
      return "h-[400px]";
    case "Hotels & Homes":
      return "h-[380px]";
    case "Flight + Hotel":
      return "h-[400px]";
    case "Trains":
      return "h-[390px]";
    default:
      return "h-[400px]";
  }
};


  return (
    <div className="relative flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`relative bg-white shadow-lg border-r transition-all duration-300 z-10 ${
          isOpen ? "w-52" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="absolute z-50 p-2 transition-colors rounded-lg -top-[52px] left-4 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsList className="text-xl text-gray-600" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col px-2 pt-2 space-y-1">
          {menuItems.map((item, index) =>
            item.divider ? (
              <div key={index} className="h-px my-2 bg-gray-200"></div>
            ) : (
              <button
                key={index}
                className="flex items-center p-3 overflow-hidden transition-all duration-200 rounded-lg hover:bg-blue-50 "
              >
                <div className="text-lg text-gray-500 transition-colors ">
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

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Banner Section */}
        <div className="relative w-full">
          <div
            className={`w-[98%] ${getBannerHeight()}   relative overflow-hidden transition-all duration-500 pl-5 pt-10 origin-bottom `}
          >
            <picture>
              <img
                className="object-cover w-full h-full rounded-xl"
                src={banner_img}
                alt=""
              />
            </picture>
          </div>
        </div>

        {/* Search Container */}
        <div>
          {/* Content */}
          <div className="absolute top-[100px] ml-[400px] flex flex-col items-center justify-center text-white">
            <h1 className="mb-3 text-4xl font-bold text-center ">
              Your Trip Starts Here
            </h1>

            {/* Feature badges */}
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full ">
                  <picture>
                    <img
                      className="object-cover w-full h-full"
                      src={secure_img}
                      alt="secure_img"
                    />
                  </picture>
                </div>
                <span className="text-sm font-medium dotted_underline">
                  Secure payment
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full">
                  <picture>
                    <img
                      className="object-cover w-full h-full"
                      src={support_img}
                      alt="support_img"
                    />
                  </picture>
                </div>
                <span className="text-sm font-medium dotted_underline">
                  We're here 24/7
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full">
                  <picture>
                    <img
                      className="object-cover w-full h-full"
                      src={award_img}
                      alt="award_img"
                    />
                  </picture>
                </div>
                <span className="text-sm font-medium dotted_underline">
                  Award-winning
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-20  -mt-[150px]">
            <div className="max-w-[1152px] mx-auto">
              <div className="p-3 bg-white shadow-xl rounded-2xl pt-[60px]">
                {/* Tab Navigation */}
                <div className="absolute flex p-1 mb-6 bg-gray-800 rounded-full ml-[220px] -top-[20px]">
                  {tabItems.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(tab.label)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.label
                          ? "bg-white text-gray-800 shadow-sm"
                          : "text-white hover:text-gray-200"
                      }`}
                    >
                      <span className="text-base">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Search Form */}
                {activeTab === "Flights" && (
                  <div>
                    {/* Trip Type */}
                    <div className="flex gap-6 mb-2 ">
                      {["Return", "One-way", "Multi-city"].map((type, i) => (
                        <label key={i} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="tripType"
                            className="text-blue-600"
                          />
                          <span className="text-sm font-medium">{type}</span>
                        </label>
                      ))}
                    </div>

                    {/* Search Fields */}
                    <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-4">
                      <input
                        type="text"
                        placeholder="Leaving from"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Going to"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="date"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>1 Adult, Economy</option>
                        <option>2 Adults, Economy</option>
                        <option>1 Adult, Business</option>
                      </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pl-[800px]">
                      <button className="px-8 py-3 font-semibold text-blue-600 transition-colors bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-0">
                        Flight + Hotel
                      </button>
                      <button className="flex items-center gap-2 px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        Search
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "Hotels & Homes" && (
                  <div className="pt-4">
                    <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-4 ">
                      <input
                        type="text"
                        placeholder="Destination / Property name"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="date"
                        placeholder="Check-in date"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="date"
                        placeholder="Check-out date"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="flex items-center gap-2 px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-0">
                        Search
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional content space */}
        <div className="h-96"></div>
      </div>
    </div>
  );
};

export default Side_bar;
