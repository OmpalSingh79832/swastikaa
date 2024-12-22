import React from "react";
import { FaEdit } from "react-icons/fa"; // Icon for edit functionality

const Profile = () => {
    // Array holding profile data
    const profileData = {
        name: "Gopal and Sons",
        phone: "+00000000",
        dob: "29Aug2001",
        email: "msonpi9602@gmail.com",
        role: "Seller",
        status: "Active",
        shopDetails: {
            shopName: "Gopal and Sons",
            division: "Degana",
            district: "Nagaur",
            subDistrict: "Degana",
        },
    };

    return (
        <div className="bg-gray-900 min-h-screen p-6 text-white">
            <div className="flex flex-wrap gap-6">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-md">
                    {/* Profile Picture with Edit Icon */}
                    <div className="flex justify-center relative mb-6">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="rounded-lg"
                        />
                        <button className="absolute top-0 right-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                            <FaEdit className="text-blue-500" />
                        </button>
                    </div>
                    {/* Profile Details */}
                    <div className="space-y-4">
                        <div className="bg-gray-700 p-4 rounded-md text-sm">
                            <p className="font-semibold">
                                Name: <span className="font-light">{profileData.name}</span>
                            </p>
                            <p className="font-semibold">
                                Phone Number: <span className="font-light">{profileData.phone}</span>
                            </p>
                            <p className="font-semibold">
                                DOB: <span className="font-light">{profileData.dob}</span>
                            </p>
                            <p className="font-semibold">
                                Email: <span className="font-light">{profileData.email}</span>
                            </p>
                            <p className="font-semibold">
                                Role: <span className="font-light">{profileData.role}</span>
                            </p>
                            <p className="font-semibold">
                                Manufacturing Sector:{" "}
                                <span className="font-light">
                                    {profileData.shopDetails.shopName}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Brief Bio:{" "}
                                <span className="font-light">
                                    {profileData.shopDetails.division}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Uploaded Resume:{" "}
                                <span className="font-light">
                                    {profileData.shopDetails.district}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Address:{" "}
                                <span className="font-light">
                                    {profileData.shopDetails.subDistrict}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Status:{" "}
                                <span className="font-normal text-green-500">
                                    {profileData.status}
                                </span>
                            </p>
                        </div>

                    </div>
                </div>

                {/* Right Section - Change Password */}
                <div className="w-full lg:w-[45%] h-fit bg-gray-800 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-5">Change Password</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Old Password</label>
                            <input
                                type="password"
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter old password"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">New Password</label>
                            <input
                                type="password"
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter new password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;