import { Link } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Analysis from "../Pages/Analysis.jsx";
import WeatherCasting from "../Pages/WeatherCasting.jsx";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="max-w-7xl  mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
        
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌱</span>
              </div>
              <h2 className="text-2xl font-bold">AgriFertilizer</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering farmers with AI-driven insights and rapid logistics
              for a sustainable future.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-600 flex flex-col">
              <Link to="/" className="hover:text-green-600 cursor-pointer">Home</Link>
              <Link to="/Pages/Analysis" className="hover:text-green-600 cursor-pointer">Analysis</Link>
              <Link to="/Pages/WeatherCasting" className="hover:text-green-600 cursor-pointer">Weather</Link>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">About Us</li>
              <li className="hover:text-green-600 cursor-pointer">Blog</li>
              <li className="hover:text-green-600 cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">Help Center</li>
              <li className="hover:text-green-600 cursor-pointer">Contact Expert</li>
              <li className="hover:text-green-600 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2023 AgriFertilizer Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
