const express = require('express');
const cors = require('cors');
const app = express();

// Import routes
const projectsRoute = require('./routes/projects');
const contactRoute = require('./routes/contact');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectsRoute);
app.use('/api/contact', contactRoute);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
