// frontend/src/components/RoomList.js
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getRooms, deleteRoom } from '../services/roomService';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const rooms = await getRooms();
      setRooms(rooms);
    };
    fetchRooms();
  }, []);

  const handleDelete = async (id) => {
    await deleteRoom(id);
    setRooms(rooms.filter(room => room._id !== id));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>Type</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map(room => (
          <tr key={room._id}>
            <td>{room.number}</td>
            <td>{room.type}</td>
            <td>{room.price}</td>
            <td>{room.status}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(room._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RoomList;

