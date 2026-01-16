import React from "react";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-5 bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold">
          Dashboard Content
        </h1>
      </div>

    </div>
  );
}

export default Layout;
