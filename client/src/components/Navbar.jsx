import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import { GrMail } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import logo from "../assets/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiCircleChevDown } from "react-icons/ci";

import { FaListCheck } from "react-icons/fa6";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      setCategoryShow(true);
      setShowSearchMenu(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full bg-white">
      <div className="header-top bg-[#2e2d2d] md-lg:hidden">
        <div className="w-[90%] lg:w-[95%] mx-auto pt-1">
          <div className="flex w-full justify-between items-center h-[50px] text-white">
            <ul className="flex justify-start items-center gap-8">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]">
                <span>
                  <GrMail />
                </span>
                <span>sales@swastikaa.com</span>
              </li>
              <span>Swastikaa Manufacturer</span>
            </ul>
            <div>
              <div className="flex justify-center items-center gap-10">
                <div className="flex justify-center items-center gap-4">
                  <Link>
                    <FaInstagram />
                  </Link>
                  <Link>
                    <BsTwitter />
                  </Link>
                  <Link>
                    <FaFacebookF />
                  </Link>
                  <Link>
                    <FaLinkedin />
                  </Link>
                </div>
                <div className="flex cursor-pointer justify-center items-center gap-2 text-sm">
                  <span>
                    <FaLock />
                  </span>
                  <span>Login</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-white">
        <div className="w-[95%] lg:w-[95%] mx-auto">
          <div className="h-[100px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-3/12 md-lg:pt-4">
              <div className="flex justify-between items-center w-[100%]">
                <Link to="/">
                  <img
                    className="xl:w-[60%] md-lg:w-[30%] sm:w-[30%] h-full"
                    src={logo}
                    alt="logo"
                  />
                </Link>
                <div className="justify-center items-center w-[30px] h-[50px] bg-white text-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden">
                  {/* <span className="text-2xl">
                                        <FaList />
                                    </span> */}
                </div>
              </div>
            </div>
            <div className="md-lg:w-full w-9/12">
              <div className="flex justify-between md-lg:justify-center items-center flex-wrap pl-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shops">About Us</Link>
                  </li>
                  <li>
                    <Link to="/racipe">Blog</Link>
                  </li>
                  <li>
                    <Link to="/community-post">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/blog">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/about">For Manufacturers</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] lg:w-[95%] mx-auto">
        <div className="flex w-full flex-wrap md-lg:gap-8">
          <div className="w-3/12 md-lg:w-full">
            <div className="bg-white relative">
              <div className="h-[50px] bg-[#fc433d] text-black flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer">
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <FaListCheck />
                  </span>
                  <span>All Category</span>
                </div>
                <span className="pt-1">
                  <CiCircleChevDown />
                </span>
              </div>
            </div>
          </div>
          <div className="w-9/12 pl-8 md-lg:pl-0 md-lg:w-full">
            <div className="flex flex-wrap w-full justify-between items-center md-lg:gap-6">
              <div className="w-8/12 md-lg:w-full">
                <div className="flex h-[50px] items-center relative gap-5">
                  <div className="relative border border-zinc-500 h-[48px] w-[585px] rounded-l-full">
                    <div className="relative w-full h-full">
                      <input
                        type="text"
                        className="w-full relative bg-transparent text-slate-500 outline-0 pr-2 px-3 h-full rounded-full"
                        placeholder="What You need "
                      />
                    </div>
                  </div>
                  <button className="bg-[#fc433d] right-0 absolute px-8 h-full font-semibold uppercase text-black rounded-r-full">
                    Search
                  </button>
                </div>
              </div>

              <div className="w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0">
                <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
                  <div className="w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center">
                    <span>
                      <IoIosCall />
                    </span>
                  </div>
                  <div className="flex justify-end flex-col gap-1">
                    <h2 className="text-sm font-medium text-slate-700">
                      +91 880-0982-482
                    </h2>
                    <span className="text-sm">support 24x7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
