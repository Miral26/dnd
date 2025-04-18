import React from "react";
import TemplateList from "../Template/TemplateList";
import { FiEdit2 } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-[315px] h-full overflow-auto relative flex-shrink-0 rounded-lg bg-[#E3E3E3] flex flex-col ">
      <div className="px-4">
        <div className="text-[36px] mt-6 mb-4 text-center font-semibold text-[#151515]">
          Template
        </div>
        <TemplateList />
      </div>
      <button className="sticky w-full left-0 bottom-0 bg-[#151515] overflow-hidden rounded-b-xl text-white py-8 px-4 rounded-[4px] flex items-center h-16 justify-center gap-2 text-base hover:bg-gray-800">
        Edit
        <FiEdit2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Sidebar;
