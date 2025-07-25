const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // For now, we just log the message
  console.log('📬 New contact message:', { name, email, message });

  res.status(200).json({ message: '✅ Message received successfully!' });
});

module.exports = router;
