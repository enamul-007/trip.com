import React from "react";
import Navimg from "../../Images/nav_logo.webp";
import { IoIosSearch } from "react-icons/io";
import { ImMobile2 } from "react-icons/im";
import Flag from "react-world-flags";

const Nav_bar = () => {
  const UKflag = () => (
    <Flag
      code="GB"
      style={{ width: "17px", height: "17px" }}
      className="object-cover rounded-full"
    />
  );
  return (
    <div>
      <div>
        <div className="py-[16px] pl-16 flex items-center justify-between ">
          <div className="flex items-center">
            <div className=" w-[132px]">
              <picture>
                <img
                  className="object-cover w-full "
                  src={Navimg}
                  alt="Navimg"
                />
              </picture>
            </div>
            <div className="relative flex pl-5">
              <input
                className="border w-[300px] py-1 rounded   placeholder:text-gray-300 pl-2 placeholder:text-[14px] placeholder:font-Roboto
             pr-10"
                placeholder="Destination, attraction, hotel, etc"
                type="text"
              />
              <div className="absolute p-[5px] bg-blue_color top-[2px] right-[2px] rounded-sm cursor-pointer">
                <IoIosSearch className="text-[20px] text-white" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[8px] pr-11">
            <button className="flex items-center px-[6px] py-[6px] rounded-sm hover:bg-gray-300 transition-all">
              <ImMobile2 className="mr-1 text-gray-500 text-[18px]" />
              <h2 className=" pr-[6px] text-[13px] font-bold font-Montserrat text-TextPrimary_color ">
                App
              </h2>
            </button>
            <button className="flex items-center px-[6px] py-[6px] rounded-sm hover:bg-gray-300 transition-all">
              <h2 className=" pr-[6px] text-[13px] font-bold font-Montserrat text-TextPrimary_color ">
                List Your Property
              </h2>
            </button>
            <button className="flex items-center px-[6px] py-[6px] rounded-sm hover:bg-gray-300 transition-all">
              <UKflag />
              <div className="pl-1">
                <div className="h-[13px] bg-gray-300 w-[1px]"></div>
              </div>
              <h2 className="pl-1 pr-[6px] text-[13px] font-bold font-Montserrat text-TextPrimary_color ">
                GBP
              </h2>
            </button>
            <button className="text-[13px] font-bold transition-all rounded-sm font-Montserrat text-TextPrimary_color hover:bg-gray-300 px-[6px] py-[6px]">
              Customaer support
            </button>
            <button className="text-[13px] font-bold transition-all rounded-sm font-Montserrat text-TextPrimary_color hover:bg-gray-300 px-[6px] py-[6px]">
              Find Bookings
            </button>
            <button className="text-[13px] font-bold transition-all rounded font-Montserrat  bg-blue_color px-[9px] py-[7px] text-white_color ">
              sign in /Register
            </button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Nav_bar;
