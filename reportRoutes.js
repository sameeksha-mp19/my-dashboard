// backend/routes/reportRoutes.js
const express = require('express');
const { exportReport } = require('my-dashboard\backend\controllers\reportController.js');
const router = express.Router();

router.get('/export/:format', exportReport);

module.exports = router;
