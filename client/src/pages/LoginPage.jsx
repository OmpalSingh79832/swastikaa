import React, { useState } from "react";

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
    const [isForgotPassword, setIsForgotPassword] = useState(false); // Toggle forgot password form
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setIsForgotPassword(false); // Reset forgot password state when toggling login/register
    };

    const handleForgotPassword = () => {
        setIsForgotPassword(true);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isForgotPassword) {
            // Handle OTP validation and password reset
            if (newPassword === confirmPassword) {
                alert("Password reset successful");
                // Implement logic for updating password in the backend
            } else {
                alert("Passwords do not match");
            }
        } else {
            // Handle regular login or registration
            alert(isLogin ? "Login Successful" : "Registration Successful");
        }
    };

    return (
        <section className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div
                className={`bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center transition-all duration-700 ${isLogin ? "flex-row" : "flex-row-reverse"
                    }`}
            >
                {/* Left Section: Image */}
                <div className="md:block hidden w-1/2">
                    <img
                        className="rounded-2xl h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="login/register form"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400"; // Fallback image
                        }}
                    />
                </div>

                {/* Right Section: Form */}
                <div className="md:w-1/2 px-8">
                    <h2 className="font-bold text-3xl text-[#002D74]">
                        {isLogin ? "Login" : "Register"}
                    </h2>
                    <p className="text-sm mt-4 text-[#002D74]">
                        {isLogin
                            ? "If you already a member, easily log in now."
                            : "Join us by creating an account."}
                    </p>

                    {/* Forgot Password */}
                    {isForgotPassword ? (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                className="p-2 mt-8 rounded-xl border"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="text"
                                name="otp"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={handleOtpChange}
                            />
                            <input
                                className="p-2 rounded-xl border"
                                type="password"
                                name="newPassword"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                            />
                            <input
                                className="p-2 rounded-xl border"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                            <button
                                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                                type="submit"
                            >
                                Reset Password
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Regular Login/Registration Inputs */}
                            <input
                                className="p-2 mt-8 rounded-xl border"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <div className="relative">
                                <input
                                    className="p-2 rounded-xl border w-full"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            {!isLogin && (
                                <>
                                    <input
                                        className="p-2 rounded-xl border"
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                    />
                                </>
                            )}
                            <button
                                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                                type="submit"
                            >
                                {isLogin ? "Login" : "Register"}
                            </button>
                        </form>
                    )}

                    {/* Forgot Password Link */}
                    {!isForgotPassword && isLogin && (
                        <div className="mt-4 text-sm text-right">
                            <button
                                className="hover:text-[#206ab1] font-semibold"
                                onClick={handleForgotPassword}
                            >
                                Forgot Password?
                            </button>
                        </div>
                    )}

                    {/* Toggle Login/Register */}
                    <div className="mt-4 text-sm flex justify-between items-center">
                        <p>
                            {isLogin
                                ? "If you don't have an account.."
                                : "Already have an account?"}
                        </p>
                        <button
                            className="hover:border text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
                            onClick={handleToggle}
                        >
                            {isLogin ? "Register" : "Login"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
