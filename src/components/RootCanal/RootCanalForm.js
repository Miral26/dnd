import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Section from "./Section";

const defaultSections = [
  {
    id: "subjective",
    title: "Subjective:",
    content: ["Toothache for few days"],
  },
  {
    id: "history",
    title: "History of Presenting Complaints:",
    content: ["Toothache: present for few days"],
  },
  {
    id: "extra-oral",
    title: "Extra Oral Examination:",
    content: ["Not performed"],
  },
  {
    id: "intra-oral",
    title: "Intra Oral Examination:",
    content: ["Tenderness around molar", "Swollen gum"],
  },
  {
    id: "radiographic",
    title: "Radiographic Findings:",
    content: ["X-ray planned to confirm extent of infection"],
  },
  {
    id: "diagnoses",
    title: "Diagnoses:",
    content: ["Suspected tooth abscess"],
  },
  {
    id: "heart Disease",
    title: "Heart Disease:",
    content: ["No"],
  },
  {
    id: "diabetes",
    title: "Diabetes:",
    content: ["No"],
  },
];

const RootCanalForm = () => {
  const [sections, setSections] = useState(defaultSections);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSections(items);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sections.map((section, index) => (
                <Draggable
                  key={section.id}
                  draggableId={section.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`mb-4`}
                    >
                      <Section
                        title={section.title}
                        content={section.content}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default RootCanalForm;
