import React from "react";
import { FaSeedling, FaLeaf, FaBug, FaTools, FaTractor } from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    { name: "Seeds", icon: <FaSeedling /> },
    { name: "Fertilizers", icon: <FaLeaf /> },
    { name: "Pesticides", icon: <FaBug /> },
    { name: "Tools", icon: <FaTools /> },
    { name: "Machinery", icon: <FaTractor /> },
  ];

  return (
    <div className="h-screen w-60 bg-white shadow-lg fixed md:relative">

      {/* Header */}
      <div className="p-4 text-lg font-bold border-b">
        Categories
      </div>

      {/* Menu List */}
      <ul className="mt-3 space-y-2 px-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-green-100 transition"
          >
            <span className="text-green-700 text-lg">
              {item.icon}
            </span>

            <span className="text-sm font-medium">
              {item.name}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Sidebar;
