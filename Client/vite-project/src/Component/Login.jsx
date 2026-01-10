import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";


function Login({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [showPassword, setShowPassword] = useState(false);

  return (
     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      
      {/* Modal Box */}
      <div className="bg-white w-full max-w-md rounded-2xl p-8 relative shadow-lg">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-600 text-center mt-1">
          Access your farm dashboard and insights
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">
              Phone Number or Email
            </label>
            <input
              type="text"
              placeholder="Enter phone or email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label className="text-sm font-medium">Password</label>
              <span className="text-sm text-green-500 cursor-pointer">
                Forgot Password?
              </span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm text-gray-600">Remember me</span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-medium"
          >
            Login to Dashboard
          </button>
            {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span className="text-green-500 cursor-pointer font-medium">
            Sign up for free
          </span>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
