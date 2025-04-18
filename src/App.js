import React from "react";
import RootCanalForm from "./components/RootCanal/RootCanalForm";
import Sidebar from "./components/common/Sidebar";
import { FiPlay, FiShare2, FiTrash2, FiInfo } from "react-icons/fi";
import "./App.css";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-16 h-[100vh]">
        <div className="flex h-full bg-gray-50">
          <Sidebar />
          <div className="p-6 bg-white w-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                Root Canal
                <FiInfo className="text-gray-600 cursor-pointer" />
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-white text-gray-900 border border-gray-200 hover:bg-gray-50">
                  <FiPlay className="w-4 h-4" />
                  Resume
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-gray-50 text-gray-900 hover:bg-gray-100">
                  <FiShare2 className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-white text-gray-900 hover:bg-red-50">
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <RootCanalForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
