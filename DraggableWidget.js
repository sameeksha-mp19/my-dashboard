// frontend/src/components/DraggableWidget.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableWidget = ({ widget, index }) => (
  <Draggable draggableId={widget.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {widget.content}
      </div>
    )}
  </Draggable>
);

export default DraggableWidget;

