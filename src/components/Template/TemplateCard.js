import React from "react";

const TemplateCard = ({ title }) => {
  return (
    <div className="p-3 px-4 bg-white rounded-md mb-2 cursor-grab select-none text-sm text-[#1a1a1a] border border-[#eaeaea] hover:bg-[#f8f8f8] active:cursor-grabbing">
      {title}
    </div>
  );
};

export default TemplateCard;
