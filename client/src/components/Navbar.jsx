import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebookF, FaLock, FaBars, FaTimes } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiPhoneFill, RiArrowDropDownLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white">
        <div className="header-top bg-[#2e2d2d] lg:py-1 sm:py-4 sm:hidden lg:block">
          <div className="w-[90%] lg:w-[95%] mx-auto pt-1">
            <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[50px] text-white">
              <ul className="flex flex-col md:flex-row justify-start items-center gap-4 md:gap-8 mb-4 md:mb-0">
                <li className="flex relative justify-center items-center gap-2 text-sm">
                  <span><GrMail /></span>
                  <span>info@swastikaa.com</span>
                </li>
                <span className="text-center md:text-left">
                  Swastikaa Manufacturing Sector Consultant
                </span>
              </ul>
              <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6 md:gap-10">
                <div className="flex justify-center items-center gap-4">
                  <Link><FaInstagram /></Link>
                  <Link><BsTwitter /></Link>
                  <Link><FaFacebookF /></Link>
                  <Link><FaLinkedin /></Link>
                </div>
                <div className="flex cursor-pointer justify-center items-center gap-2 text-sm">
                  <span><FaLock /></span>
                  <button onClick={() => navigate("/dashboard")} className="hover:underline">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg py-3 relative">
          <div className="flex justify-between items-center w-[95%] mx-auto">
            <div className="w-[20%]">
              <Link to={"/"}>
                <img src={logo} alt="Logo" className="object-contain w-16 h-16" />
              </Link>
            </div>
            <nav className="hidden md:hidden lg:flex gap-6" style={{ fontFamily: "revert" }}>
              <ul className="flex gap-8 text-base font-semibold text-gray-700">
                <li><Link to={"/"} className="hover:text-blue-600 transition duration-300">Home</Link></li>
                <li><Link to={"/our-services"} className="hover:text-blue-600 transition duration-300">Services</Link></li>
                <li><Link to={"/login"} className="hover:text-blue-600 transition duration-300">Get Quote</Link></li>
                <li><Link to={"/login"} className="hover:text-blue-600 transition duration-300">Apply</Link></li>
                <li><Link to={"/pricing-details"} className="hover:text-blue-600 transition duration-300">Pricing</Link></li>
                <li><Link to={"/about-us"} className="hover:text-blue-600 transition duration-300">About Us</Link></li>
                <li><Link to={"/contact-us"} className="hover:text-blue-600 transition duration-300">Contact Us</Link></li>
                <li
                  className="relative cursor-pointer hover:text-blue-600 transition duration-300"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span className="flex items-center ">
                    Resources <RiArrowDropDownLine className="text-2xl" />
                  </span>
                  {dropdownOpen && (
                    <ul className="absolute left-0 w-44 z-50 bg-gray-300 shadow-lg rounded-lg py-2">
                      <li className="px-4 py-2 hover:bg-gray-100 transition duration-300">
                        <Link to={'/blog'}>Blog</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 transition duration-300">
                        <Link to={'/our-completed-project'}>Our Projects</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
            <div className="hidden lg:flex items-center space-x-4 bg-gray-100 px-6 py-2 rounded-full">
              <RiPhoneFill className="text-4xl text-blue-600 p-2 bg-white rounded-full shadow-md" />
              <div>
                <a href="tel:+919220461947" className="font-semibold text-gray-800">
                  +91 922-0461-947
                </a>
                <p className="text-sm text-gray-500">Contact Support</p>
              </div>
            </div>
            {!mobileMenuOpen && (
              <button
                className="lg:hidden text-3xl text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <FaBars />
              </button>
            )}
            {mobileMenuOpen && (
              <div>
                <button
                  className="text-3xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={`fixed top-[88px] left-0 h-full w-4/5 bg-white shadow-lg transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
          <ul className="flex flex-col gap-5 text-sm font-semibold p-6 text-gray-700">
            <li className="border-gray-300 border-b-[1px]"><Link to={"/"} onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li className="border-gray-300 border-b-[1px]"><Link to={"/our-services"} onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li className="border-gray-300 border-b-[1px]"><Link to={"/login"} onClick={() => setMobileMenuOpen(false)}>Get Quote</Link></li>
            <li className="border-gray-300 border-b-[1px]"><Link to={"/login"} onClick={() => setMobileMenuOpen(false)}>Apply</Link></li>
            <li className="border-gray-300 border-b-[1px]"><Link to={"/pricing-details"} onClick={() => setMobileMenuOpen(false)}>Pricing</Link></li>
            <li className="border-gray-300 border-b-[1px]"><Link to={"/about-us"} onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
            <li className="border-gray-300 border-b-[1px]"><Link to={"/contact-us"} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
            <li>
              <button className="flex items-center w-full justify-between" onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}>
                Resources <RiArrowDropDownLine className="text-2xl" />
              </button>
              {mobileSubMenuOpen && (
                <ul className="ml-2 mt-2 space-y-4 pl-2">
                  <li className="border-gray-300 border-b-[1px]"><Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
                  <li className="border-gray-300 border-b-[1px]"><Link to="/our-completed-project" onClick={() => setMobileMenuOpen(false)}>Our Projects</Link></li>
                </ul>
              )}
            </li>
            <li><Link to={"/dashboard"} onClick={() => setMobileMenuOpen(false)}>
              <button className="all-btn">Login</button>
            </Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;



