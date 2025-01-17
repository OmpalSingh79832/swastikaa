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

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navmenu = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/our-services" },
    { name: "Get Quote", path: "/consulting-services" },
    { name: "Apply", path: "/apply-project" },
    { name: "Pricing", path: "/pricing-details" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
  ]
  return (
    <>
      <div className="w-full bg-white">
        <div className="header-top bg-[#2e2d2d] lg:py-1 sm:py-4">
          <div className="w-[90%] lg:w-[95%] mx-auto pt-1">
            <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[50px] text-white">
              {/* Left Section */}
              <ul className="flex flex-col md:flex-row justify-start items-center gap-4 md:gap-8 mb-4 md:mb-0">
                <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#000] after:-right-[16px] md:after:static">
                  <span>
                    <GrMail />
                  </span>
                  <span>info@swastikaa.com</span>
                </li>
                <span className="text-center md:text-left">
                  Swastikaa Manufacturing Sector Consultant
                </span>
              </ul>

              {/* Right Section */}
              <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6 md:gap-10">
                {/* Social Media Icons */}
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

                {/* Login Button */}
                <div className="flex cursor-pointer justify-center items-center gap-2 text-sm">
                  <span>
                    <FaLock />
                  </span>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="hover:underline"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="border-b bg-white font-sans min-h-[60px] px-10 py-3 tracking-wide relative z-50">
          <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
            <a href="#">
              <img
                src={logo}
                alt="logo"
                className="lg:w-[140px] sm:w-[60px] max-sm:hidden"
              />

            </a>

            <div
              className={`${menuOpen ? "block" : "hidden"
                } lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
            >
              <button
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
                onClick={handleToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 fill-black"
                  viewBox="0 0 320.591 320.591"
                ></svg>
              </button>

              <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block">
                  <a href="#">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-36"
                    />
                  </a>
                </li>
                <li key="Home" className="max-lg:border-b max-lg:py-3">
                  <Link
                    to={"/"}
                    className="hover:text-[#007bff] text-[#007bff] font-bold block font-bold text-[14px]"
                  >
                    Home
                  </Link>
                </li>
                <li key="Services" className="max-lg:border-b max-lg:py-3">
                  <Link
                    to={"/our-services"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[14px]"
                  >
                    Services
                  </Link>
                </li>
                <li key="Get Quote" className="max-lg:border-b max-lg:py-3">
                  <Link
                    to={"/consulting-services"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[14px]"
                  >
                    Get Quote
                  </Link>
                </li>
                <li key="Apply" className="max-lg:border-b max-lg:py-3">
                  <Link
                    to={"/apply-project"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[14px]"
                  >
                    Apply
                  </Link>
                </li>
                <li key="Pricing" className="max-lg:border-b max-lg:py-3">
                  <Link
                    to={"/pricing-details"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[14px]"
                  >
                    Pricing
                  </Link>
                </li>
                <li key="About Us" className="max-lg:border-b max-lg:py-3">
                  <Link
                    to={"/about-us"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[14px]"
                  >
                    About Us
                  </Link>
                </li>
                <li key="Contact Us" className="max-lg:border-b max-lg:py-3">
                  <Link
                    to={"/contact-us"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[14px]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li key="Resources" className="max-lg:border-b max-lg:py-3">
                  <Link
                    to={"/blog"}
                    className="hover:text-[#007bff] text-gray-600 block font-bold text-[14px]"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center ml-auto space-x-8">

              <div className="md-lg:flex pl-2 md-lg:w-full">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center">
                    <IoIosCall />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-slate-700">
                      +91 922-0461-947
                    </h2>
                    <span className="text-sm font-bold">Contact Support</span>
                  </div>
                </div>
              </div>
              <button id="toggleOpen" className="lg:hidden" onClick={handleToggle}>
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-gray-100 border border-transparent focus-within:border-blue-500 focus-within:bg-transparent flex items-center px-4 rounded-full h-10 lg:w-2/4 mt-3 mx-auto max-lg:mt-6 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              className="w-4 h-4 fill-gray-500 mr-3"
            ></svg>
            <input
              type="email"
              placeholder="Search..."
              className="w-full outline-none bg-transparent text-gray-600 font-semibold text-[15px]"
            />
          </div>
        </header>
      </div>





    </>



  );
};

export default Navbar;
