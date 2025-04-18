import React from 'react';
import TemplateList from '../Template/TemplateList';

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-6 border-b border-gray-200">
        <div className="text-lg font-semibold text-gray-900">Template</div>
      </div>
      <TemplateList />
    </div>
  );
};

export default Sidebar; 