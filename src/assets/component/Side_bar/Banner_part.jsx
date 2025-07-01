import React, { useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoBedSharp, IoCarSportSharp } from "react-icons/io5";
import { FaTrainSubway } from "react-icons/fa6";
import { MdAttractions } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import banner_img from "../../Images/Banner_img.webp";
import secure_img from "../../Images/secure_img.png";
import support_img from "../../Images/support_img.png";
import award_img from "../../Images/award_img.png";

const Banner_part = ( {isOpen}) => {
  
  const [activeTab, setActiveTab] = useState("Flights");
  const today = new Date().toISOString().split("T")[0];

  const tabItems = [
    { icon: <BiSolidPlaneAlt />, label: "Flights" },
    { icon: <IoBedSharp />, label: "Hotels & Homes" },
    { icon: <FaTrainSubway />, label: "Trains" },
    { icon: <IoCarSportSharp />, label: "Cars" },
    { icon: <MdAttractions />, label: "Attractions & Tours" },
    { icon: <RiHotelFill />, label: "Flight + Hotel" },
  ];

  const getBannerHeight = () => {
    switch (activeTab) {
      case "Flights":
        return "h-[440px]";
      case "Hotels & Homes":
      case "Flight + Hotel":
        return "h-[350px]";
      case "Trains":
        return "h-[390px]";
      default:
        return "h-[380px]";
    }
  };

  return (
    <div className="relative flex h-screen bg-gray-50">
     

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Banner Section */}
        <div className="relative w-full">
          <div
            className={`w-[98%] ${getBannerHeight()} relative overflow-hidden transition-all duration-500 pl-5 pt-10 origin-bottom`}
          >
            <img
              className="object-cover w-full h-full rounded-xl"
              src={banner_img}
              alt="Banner"
            />
          </div>
        </div>

        {/* Header Text Block - Shift left/right based on isOpen */}
        <div
          className={`absolute top-[100px] flex flex-col items-center justify-center text-white transition-all duration-700 ${
            isOpen ? "left-[30%]" : "left-[32%]"
          }`}
        >
          <h1 className="mb-3 text-4xl font-bold text-center">
            Your Trip Starts Here
          </h1>

          {/* Feature Badges */}
          <div className="flex items-center gap-8 mb-8">
            {[
              { img: secure_img, label: "Secure payment" },
              { img: support_img, label: "We're here 24/7" },
              { img: award_img, label: "Award-winning" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src={item.img}
                    alt={item.label}
                  />
                </div>
                <span className="text-sm font-medium dotted_underline">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Box Section */}
        <div
          className={`absolute w-full max-w-[1152px] px-4 z-30 transition-all duration-500 ${
            activeTab ? "top-[220px]" : "top-[100px]"
          } ${isOpen ? "left-[10%]" : "left-[13%]"}`}
        >
          <div className="max-w-[1152px] mx-auto">
            <div className="p-3 bg-white shadow-xl rounded-2xl pt-[70px] relative">
              {/* Tabs */}
              <div className="absolute flex p-1 mb-6 bg-gray-800 rounded-full ml-[160px] -top-[20px]">
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

              {/* Search Forms */}
              {activeTab === "Flights" && (
                <div>
                  <div className="flex gap-6 mb-2">
                    {["Return", "One-way", "Multi-city"].map((type, i) => (
                      <label key={i} className="flex items-center gap-2">
                        <input type="radio" name="tripType" />
                        <span className="text-sm font-medium">{type}</span>
                      </label>
                    ))}
                  </div>

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

                  <div className="flex justify-end gap-4">
                    <button className="px-8 py-3 font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50">
                      Flight + Hotel
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                      Search
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "Hotels & Homes" && (
                <div className="flex gap-6 mb-6">
                  <div className="w-[350px]">
                    <input
                      type="text"
                      placeholder="City, airport, region, landmark or hotel name"
                      className="w-full p-3 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div className="w-[207px]">
                    <input
                      type="date"
                      value={today}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-[270px]">
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-8 py-1 font-semibold text-blue-600 transition-colors bg-white border rounded-lg hover:text-white hover:bg-blue-700">
                    Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Filler for scroll space */}
        <div className="h-96"></div>
      </div>
    </div>
  );
};

export default Banner_part;
