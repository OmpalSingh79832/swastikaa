import { Link, useNavigate } from "react-router-dom";
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
    // const navigate = useNavigate();


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();
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
                  <button onClick={() => navigate("/login")}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-white">
        <div className="w-[95%] lg:w-[95%] mx-auto">
          <div className="h-[100px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-fit md-lg:pt-4">
              <div className="flex justify-between items-center w-[100%]">
                <Link to="/">
                  <img
                    className="w-[50%]  h-full mt-[1px]"
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="md-lg:w-full w-9/12">
              <div className="flex justify-between md-lg:justify-center items-center flex-wrap ">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/">For Manufacturers</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <div className="block md-lg:hidden pl-2 md-lg:w-full">
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
                  </li>
                </ul>



              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto mb-4">
        <div className="w-9/12 mx-auto md-lg:w-full">
          <div className="w-8/12 md-lg:w-full">
            <div className="flex h-[50px] relative">
              <div className="relative border border-zinc-500 h-[50px] w-[585px] rounded-l-full">
                <div className="relative w-full h-full">
                  <input
                    type="text"
                    className="w-full relative bg-transparent text-slate-500 outline-0 pr-2 px-3 h-full rounded-full"
                    placeholder="What You need "
                  />
                </div>
              </div>
              <button className="bg-[#fc433d] right-0 absolute px-10 h-full font-semibold uppercase text-black rounded-r-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
