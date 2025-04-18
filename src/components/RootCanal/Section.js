import React from "react";

const Section = ({ title, content }) => {
  return (
    <div className="bg-[#F2F2F2] max-w-[458px] px-4 py-3 rounded-xl overflow-hidden">
      <h3 className="text-base font-semibold text-black">{title}</h3>
      <div className="ml-4 mt-2">
        <ul className="list-disc text-base pl-4 space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-[16px] text-[#151515]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section;
