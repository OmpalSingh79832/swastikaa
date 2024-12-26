import { Link, useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import React, { useState } from "react";
import { GrMail } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <div className="header-top bg-[#2e2d2d] md-lg:hidden">
        <div className="w-[90%] lg:w-[95%] mx-auto pt-1">
          <div className="flex w-full justify-between items-center h-[50px] text-white">
            <ul className="flex justify-start items-center gap-8">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#000] after:-right-[16px]">
                <span>
                  <GrMail />
                </span>
                <span>info@swastikaa.com</span>
              </li>
              <span>Swastikaa Manufacturing Sector Consultant</span>
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
                  <button onClick={() => navigate("/dashboard")}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-white">
        <div className="w-[95%] mx-auto">
          <div className="h-[100px] flex justify-between items-center flex-wrap">
            <div className="w-[10%] mx-aut">
              <Link to="/">
                <img
                  className="w-[100%] h-full mt-4"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="md-lg:w-full w-9/12">
              <div className="flex justify-between md-lg:justify-center items-center flex-wrap ">
                <ul className="flex justify-start items-start gap-6 text-base font-semibold md-lg:hidden mt-[-70px]">
                  <li className="hover:text-primaryRed">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-primaryRed">
                    <Link to="/our-services">Services</Link>
                  </li>
                  <li className="hover:text-primaryRed">
                    <Link to="/consulting-services">Get Quote</Link>
                  </li>
                  <li className="hover:text-primaryRed">
                    <Link to="/apply-project">Apply</Link>
                  </li>
                  <li className="hover:text-primaryRed">
                    <Link to="/pricing-details">Pricing</Link>
                  </li>
                  <li
                    className="relative hover:text-primaryRed"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <span className="cursor-pointer">Resources</span>
                    {isDropdownOpen && (
                      <ul className="absolute top-[100%] left-0 z-40 bg-blue-700 shadow-md rounded-md w-[200px]">
                        <li className="hover:bg-gray-100 px-4 py-2 ">
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li className="hover:bg-gray-100 px-4 py-2">
                          <Link to="/project-portfolio">Project Portfolio</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="hover:text-primaryRed">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="hover:text-primaryRed">
                    <Link to="/contact-us">Contact</Link>
                  </li>
                </ul>
                <div className="block md-lg:hidden pl-2 md-lg:w-full">
                  <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
                    <div className="w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center">
                      <span>
                        <IoIosCall />
                      </span>
                    </div>
                    <div className="flex justify-end flex-col gap-1">
                      <h2 className="text-sm font-medium text-slate-700">
                        +91 922-0461-947
                      </h2>
                      <span className="text-sm text-center">Contact support </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto mb-4">
        <div className="w-9/12 mx-auto md-lg:w-full">
          <div className="w-8/12 md-lg:w-full mx-auto">
            <div className="flex h-[50px] relative">
              <div className="relative border border-zinc-500 h-[50px] w-[585px] rounded-l-full">
                <div className="relative w-full h-full">
                  <input
                    type="text"
                    className="w-full relative bg-transparent text-slate-500 outline-0 pr-2 px-3 h-full rounded-full placeholder:text-black"
                    placeholder="What You need "
                  />
                </div>
              </div>
              <button className="bg-[#2e2d2d] right-[20px] absolute px-10 h-full font-s uppercase text-white rounded-r-full">
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
