const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/projects.json');

router.get('/', (req, res) => {
  const data = fs.readFileSync(dataPath);
  const projects = JSON.parse(data);
  res.json(projects);
});

module.exports = router;
