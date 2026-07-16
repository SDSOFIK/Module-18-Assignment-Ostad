const express = require('express');
const studentRoutes = require('./studentRoutes');
 
const router = express.Router();
 
router.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'API is healthy', data: { uptime: process.uptime() } });
});
 
router.use('/students', studentRoutes);
 
module.exports = router;
 