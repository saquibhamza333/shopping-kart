import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setIsEditing(false);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className=" p-8 w-full ">
   
        <h2 className="text-2xl font-semibold text-gray-800 text-center">My Profile</h2>
        <p className="text-gray-500 text-center mb-6">Manage your account details</p>

        
        {!isEditing ? (
          <div className="space-y-4">
            <div>
              <p className="text-gray-700 font-medium">Username</p>
              <p className="text-gray-500">{user?.username || "Not set"}</p>
            </div>

            <div>
              <p className="text-gray-700 font-medium">Email</p>
              <p className="text-gray-500">{user?.email || "Not set"}</p>
            </div>

            <div>
              <p className="text-gray-700 font-medium">Address</p>
              <p className="text-gray-500">{user?.address || "Not set"}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-black text-white font-medium py-2 rounded-lg  cursor-pointer"
            >
              Edit Profile
            </button>
          </div>
        ) : (

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
