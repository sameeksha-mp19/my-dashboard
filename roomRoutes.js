// backend/routes/roomRoutes.js
const express = require('express');
const { createRoom, getRooms, updateRoom, deleteRoom } = require('my-dashboard\backend\controllers\roomController.js');
const router = express.Router();

router.post('/', createRoom);
router.get('/', getRooms);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);

module.exports = router;
