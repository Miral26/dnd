import React, { useState } from "react";

const TemplateList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const templates = [
    "Subjective",
    "Objective",
    "Assessment & Plan",
    "Findings",
    "Diagnoses",
    "Treatment",
    "Recovery",
    "Objective",
    "Assessment & Plan",
    "Treatment",
  ];

  const filteredTemplates = templates.filter((template) =>
    template.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex  flex-col p-4 bg-[#FAFAFA] rounded-xl">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Templates"
          className="w-full py-2.5 px-4 bg-[#F2F2F2] rounded-xl text-sm placeholder-gray-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-5">
        {filteredTemplates.map((template, index) => (
          <div
            key={index}
            className="p-3 bg-[#F2F2F2] rounded-xl text-sm text-gray-900 hover:bg-gray-50 cursor-pointer"
          >
            {template}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
