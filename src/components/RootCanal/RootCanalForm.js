import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Section from "./Section";
import Button from "../common/Button";

const FormContainer = styled.div`
  padding: 24px;
  background: #f5f5f5;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  justify-content: flex-end;
`;

const DraggableSection = styled.div`
  background: ${props => props.isDragging ? '#f0f0f0' : 'transparent'};
  border-radius: 8px;
  transition: background-color 0.2s ease;
  transform: ${props => props.isDragging ? 'scale(1.02)' : 'scale(1)'};
  box-shadow: ${props => props.isDragging ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'};
  position: relative;
  z-index: ${props => props.isDragging ? 1 : 0};
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

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
    id: "treatment",
    title: "Treatment:",
    content: [],
  },
  {
    id: "treatment2",
    title: "Treatment:",
    content: [],
  },
  {
    id: "treatment1",
    title: "Treatment:",
    content: [],
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
    <FormContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {sections.map((section, index) => (
                <Draggable
                  key={section.id}
                  draggableId={section.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <DraggableSection
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                    >
                      <Section
                        title={section.title}
                        content={section.content}
                      />
                    </DraggableSection>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ButtonContainer>
        <Button>Send Referral</Button>
        <Button variant="primary">Save Note</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default RootCanalForm;
