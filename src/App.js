import React from "react";
import RootCanalForm from "./components/RootCanal/RootCanalForm";
import Sidebar from "./components/common/Sidebar";
import IconSidebar from "./components/common/IconSidebar";
import { FiInfo } from "react-icons/fi";
import "./App.css";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-16 h-[calc(100vh-100px)]">
        <div className="flex justify-end h-full bg-gray-50">
          <IconSidebar />
          <div className="flex w-[calc(100%-64px)] gap-6 pt-6 px-6">
            <Sidebar />
            <div className="pt-6 pl-11 pr-6 rounded-lg bg-[#E3E3E3] w-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <div className="text-[36px] flex items-center gap-2 text-center font-semibold text-[#151515]">
                  Root Canal
                  <FiInfo className="cursor-pointer" />
                </div>
                <div className="flex gap-[22px] items-center">
                  <button className="flex items-center gap-2 px-8 py-[14px] rounded-[20px] text-sm font-medium bg-white text-gray-900 border border-[#919191] hover:bg-gray-50">
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 12C8.66 12 9.99 10.66 9.99 9L10 3C10 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3V9C4 10.66 5.34 12 7 12ZM12.3 9C12.3 12 9.76 14.1 7 14.1C4.24 14.1 1.7 12 1.7 9H0C0 12.41 2.72 15.23 6 15.72V19H8V15.72C11.28 15.24 14 12.42 14 9H12.3Z"
                        fill="#323232"
                      />
                    </svg>
                    Resume
                  </button>
                  <button className="flex items-center">
                    <svg
                      width="22"
                      height="30"
                      viewBox="0 0 22 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3334 5.66667L14.44 7.56L12.32 5.44V20.3333H9.68004V5.44L7.56004 7.56L5.66671 5.66667L11 0.333336L16.3334 5.66667ZM21.6667 12.3333V27C21.6667 28.4667 20.4667 29.6667 19 29.6667H3.00004C1.52004 29.6667 0.333374 28.4667 0.333374 27V12.3333C0.333374 10.8533 1.52004 9.66667 3.00004 9.66667H7.00004V12.3333H3.00004V27H19V12.3333H15V9.66667H19C20.4667 9.66667 21.6667 10.8533 21.6667 12.3333Z"
                        fill="#151515"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center">
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3333 8V21.3333H4.66663V8H15.3333ZM13.3333 0H6.66663L5.33329 1.33333H0.666626V4H19.3333V1.33333H14.6666L13.3333 0ZM18 5.33333H1.99996V21.3333C1.99996 22.8 3.19996 24 4.66663 24H15.3333C16.8 24 18 22.8 18 21.3333V5.33333Z"
                        fill="#B00020"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <RootCanalForm />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 h-[100px] right-0 w-full bg-white border-t border-gray-200 items-center px-6 flex justify-end gap-3">
        <button className="px-8 py-3 bg-white border border-black font-bold text-base text-[#151515] rounded-[20px]  hover:bg-gray-50">
          Send Referral
        </button>
        <button className="px-8 py-3 bg-[#151515] font-bold text-base text-white rounded-[20px] hover:bg-gray-900">
          Save Note
        </button>
      </div>
    </div>
  );
};

export default App;
