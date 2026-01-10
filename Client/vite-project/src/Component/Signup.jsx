import React from "react";
import img1 from '../Photos/signin.jpg';

const Signup = () => {
 
  return (
    <div className="min-h-screen bg-[#f6faf7] flex items-center justify-center px-4">
         
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 bg-transparent">
        
        {/* Left Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
          <img
            src={img1}
            alt="Farmer"
            className="rounded-xl w-full h-80 object-cover"
          />

          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              Join 2,000+ Smart Farmers
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              “AgriFertilizers has changed the way I look after my crops.
              Getting instant advice on my phone means I save money and grow
              better produce.”
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src="https://i.pravatar.cc/40"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Samuel Okafor</p>
                <p className="text-xs text-gray-500">
                  Maize Farmer, Kaduna
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold">Create your account</h2>
          <p className="text-gray-600 text-sm mt-1">
            Join the community and start optimizing your farm today.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input type="text" placeholder="Enter your full name" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Phone Number (Primary Contact)
              </label>
              <input type="tel" placeholder="+234 800 000 0000" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                We’ll use this to send you analysis alerts and delivery updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="City, State" className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />

              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Select Type</option>
                <option>Crop Farming</option>
                <option>Livestock</option>
                <option>Mixed Farming</option>
              </select>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-xs text-gray-600">
                I agree to the{" "}
                <span className="text-green-600 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-green-600 cursor-pointer">
                  Privacy Policy
                </span>
                . I consent to receiving SMS updates for my farm.
              </p>
            </div>

            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-medium transition">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
