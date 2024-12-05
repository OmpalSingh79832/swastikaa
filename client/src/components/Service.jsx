import React from "react";
import { IoStarSharp } from "react-icons/io5";
import Img11 from "../assets/sl3.jpg";
import Img22 from "../assets/sl4.jpg";

const Service = () => {
    return (
        <>
            <div className="bg-gray-200 py-10">
                <div className="w-[90%] mx-auto">
                    <div className="text-center pb-10">
                        <div className="flex justify-center items-center gap-2">
                            <IoStarSharp className="text-primaryRed text-3xl" />
                            <IoStarSharp className="text-yellow-500 text-3xl" />
                            <p className="text-[40px] font-bold">Our Services</p>
                            <IoStarSharp className="text-yellow-500 text-3xl" />
                            <IoStarSharp className="text-primaryRed text-3xl" />
                        </div>
                    </div>
                   <div className="grid grid-cols-12 gap-10">
                   <div className="border bg-white rounded-xl col-span-6 shadow-sm sm:flex">
                        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                            <img className="size-full absolute top-0 object-cover" src={Img22} alt="Card Image" />
                        </div>
                        <div className="flex flex-wrap">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Manufacture
                                </h3>
                                <p className="mt-1 text-gray-500">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <div className="mt-5 sm:mt-auto">
                                    <p className="text-xs text-gray-500">
                                        Last updated 5 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border bg-white rounded-xl col-span-6 shadow-sm sm:flex">
                        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                            <img className="size-full absolute top-0 object-cover" src={Img11} alt="Card Image" />
                        </div>
                        <div className="flex flex-wrap">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Construction
                                </h3>
                                <p className="mt-1 text-gray-500">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <div className="mt-5 sm:mt-auto">
                                    <p className="text-xs text-gray-500">
                                        Last updated 5 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Service;
