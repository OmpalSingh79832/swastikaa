import React, { useState } from "react";
import SignupImg from "../assets/logn.jpg";
import LoginImg from '../assets/loginimg1.webp';
import SignupI from "../assets/k2-D451YOO1.png";
import Logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <>


            <div className="min-h-screen flex flex-col justify-center bg-gray-900 text-white">
                <div className="mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Section */}
                    <div className="md:w-1/2 px-6 md:px-32">
                        <img src={Logo} alt="" className="bg-white w-32 h-32 p-2 rounded-md  mx-auto mb-4" />
                        <h1 className="text-3xl font-bold mb-6 text-center">Let's get started</h1>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="role" className="block text-sm mb-1">
                                    Select Your Role
                                </label>
                                <select
                                    id="role"
                                    className="w-full px-4 py-3 bg-gray-800 rounded focus:outline-none"
                                >
                                    <option value="" disabled selected>Select your role</option>
                                    <option value="consultant">Consultant</option>
                                    <option value="manufacturer">Manufacturer</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm mb-1">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="name@work.com"
                                    className="w-full px-4 py-3 bg-gray-800 rounded focus:outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 bg-gray-800 rounded focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 bg-gray-800 rounded focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="pb-4">
                                <label htmlFor="password" className="block text-sm mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 bg-gray-800 rounded focus:outline-none"
                                />
                            </div>
                            <div className="w-2/3 mx-auto">
                                <button className="w-full py-3 all-btn text-black font-bold">
                                    Continue with Email
                                </button>
                            </div>
                            <p className="text-center text-sm mt-2">
                                Already have an account?{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    Sign In
                                </a>
                            </p>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 px-6 md:px-12 mt-10 md:mt-0">
                        <h2 className="text-4xl leading-snug font-semibold mb-4 text-center">
                            Kontentino increased user activation by 10% within a month of
                            installing Userpilot
                        </h2>
                        <p className="text-lg leading-6 mb-6">
                            Userpilot was able to increase 1 and 2nd run, as well as well 1 week
                            retention. We've seen 10% more engagement from the users. We're able
                            to help our existing users adopt more features.
                        </p>
                        <div className="bg-blue-400 rounded-sm rotate-6 w-36 h-36 absolute"></div>
                        <div className="flex items-center mb-6 relative">
                            <img
                                src={SignupImg}
                                alt="Profile"
                                className="w-36 h-36 rounded-sm"
                            />
                            <div className="ml-8 mt-16">
                                <h3 className="font-bold text-xl">Prinka Roy</h3>
                                <p className="text-md">Product Marketing Manager</p>
                            </div>
                        </div>
                        <p className="text-xl font-medium mb-4 px-10 text-center">
                            Improve user onboarding, increase feature adoption, and collect user
                            feedback.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-start">
                            <img
                                src={SignupI}
                                alt="Logo 1"
                                className="w-16"
                            />
                            <img
                                src={SignupI}
                                alt="Logo 2"
                                className="w-16"
                            />
                            <img
                                src={SignupI}
                                alt="Logo 3"
                                className="w-16"
                            />
                            <img
                                src={SignupI}
                                alt="Logo 3"
                                className="w-16"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex flex-col justify-center bg-gray-900 text-white">
                <div className="mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Section */}
                    <div className="md:w-1/2 px-6 md:px-32">
                        <img src={Logo} alt="" className="bg-white w-32 h-32 p-2 rounded-md  mx-auto mb-4" />
                        <form className="space-y-4">
                            <h1 className="text-xl font-bold mb-6">Sign In with Email</h1>
                            <div>
                                <label htmlFor="email" className="block text-sm mb-1">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="name@work.com"
                                    className="w-full px-4 py-3 bg-gray-800 rounded focus:outline-none"
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="password" className="block text-sm mb-1">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 bg-gray-800 rounded focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-10 right-4 text-gray-400 hover:text-gray-200 focus:outline-none"
                                >
                                    {showPassword ? <FaEye /> : < FaEyeSlash />}
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox bg-gray-800 text-purple-600 border-gray-700 rounded focus:outline-none"
                                        />
                                        <span className="ml-2 text-sm">Remember Me</span>
                                    </label>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-sm text-blue-500 hover:underline"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                            <div className="w-2/3 mx-auto">
                                <button className="w-full py-3 all-btn rounded font-bold text-black">
                                    Continue with Email
                                </button>
                            </div>
                            <p className="text-center text-sm mt-2">
                                Don’t have an account?{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    Sign Up
                                </a>
                            </p>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 px-6 md:px-12 mt-10 md:mt-0">
                        <h2 className="text-4xl leading-snug font-semibold mb-4 text-center">
                            Introducing Autocapture
                        </h2>
                        <p className="text-lg leading-6 mb-6 text-center">
                            Automatically record all user interactions within your product, including clicks, text input changes, and form submissions. Say goodbye to manual event tagging!
                        </p>

                        <div className="flex items-center mb-6 ">
                            <img
                                src={LoginImg}
                                alt="Profile"
                                className="w-full"
                            />

                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-start">
                            <img
                                src={SignupI}
                                alt="Logo 1"
                                className="w-16"
                            />
                            <img
                                src={SignupI}
                                alt="Logo 2"
                                className="w-16"
                            />
                            <img
                                src={SignupI}
                                alt="Logo 3"
                                className="w-16"
                            />
                            <img
                                src={SignupI}
                                alt="Logo 3"
                                className="w-16"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen pt-10 bg-gray-900">
                <main className="w-full  max-w-md mx-auto p-6 ">
                    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Reset your password</h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Please enter your email below and we will send you a reset link
                                </p>
                            </div>
                            <div className="mt-5">
                                <form>
                                    <div className="grid gap-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                                            <div className="relative">
                                                <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                                            </div>
                                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                        </div>
                                        <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
                                    </div>
                                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                                        Back to Back to
                                        <a className="text-blue-600 decoration-2 hover:underline font-medium mx-2" href="#">
                                            Sign In
                                        </a>
                                        page?
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>
            </div>

        </>
    );
};

export default LoginPage;
