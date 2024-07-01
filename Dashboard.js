// frontend/src/pages/Dashboard.js
import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DraggableWidget from '../components/DraggableWidget';
import RoomList from '../components/RoomList';
import Report from '../components/Report';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [widgets, setWidgets] = useState([
    { id: '1', content: <RoomList /> },
    { id: '2', content: <Report /> },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setWidgets(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="dashboard">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Container>
              <h1>Dashboard</h1>
              <Row>
                {widgets.map((widget, index) => (
                  <Col key={widget.id} md={12}>
                    <DraggableWidget widget={widget} index={index} />
                  </Col>
                ))}
              </Row>
            </Container>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Dashboard;


