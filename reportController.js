// backend/controllers/reportController.js
const Room = require('my-dashboard\backend\models\Room.js');
const { generatePDF, generateExcel } = require('../utils/reportUtils');

exports.exportReport = async (req, res) => {
  const { format } = req.params;
  try {
    const rooms = await Room.find();
    let file;
    if (format === 'pdf') {
      file = await generatePDF(rooms);
    } else if (format === 'excel') {
      file = await generateExcel(rooms);
    } else {
      return res.status(400).json({ message: 'Invalid format' });
    }
    res.download(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
