import React from "react";
import TemplateList from "../Template/TemplateList";

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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_399)">
            <path
              d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_399">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
