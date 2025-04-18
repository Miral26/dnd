import React from "react";
import {
  FiCalendar,
  FiVideo,
  FiUser,
  FiSettings,
  FiArrowRight,
} from "react-icons/fi";

const IconSidebar = () => {
  return (
    <div className="fixed left-0 rounded-r-xl  top-0 w-16 bg-[#1a1a1a] h-full z-10 mt-8 flex flex-col items-center py-4 space-y-6 shadow-white shadow-md">
      <FiArrowRight className="text-gray-400 w-6 h-6" />

      <div className="flex flex-col items-center space-y-6 mt-6">
        <div className="flex items-center">
          <div className="bg-white text-xs px-2 py-0.5 rounded-md">NEW</div>
        </div>
        <FiCalendar className="text-gray-400 w-6 h-6" />
        <FiVideo className="text-gray-400 w-6 h-6" />
        <FiUser className="text-gray-400 w-6 h-6" />
        <FiSettings className="text-gray-400 w-6 h-6" />
      </div>
    </div>
  );
};

export default IconSidebar;
