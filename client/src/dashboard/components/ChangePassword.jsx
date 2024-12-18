import React from 'react';

const ChangePassword = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Change Password</h1>
            <form className="space-y-4">
                <div>
                    <label className="block font-semibold mb-2">Old Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        placeholder="Enter old password"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-2">New Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        placeholder="Enter new password"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;
