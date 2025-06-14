const express = require('express');
const cors = require('cors');

require('dotenv').config();

// Database configuration
const dbConfig = require("./config/dbconfig.js");

const router = require('./Routes/appointment.js');
const callRouter = require('./Routes/callback.js');


const app = express();

// CORS middleware setup
const corsOptions = {
  origin: "*",  // Allow requests from frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Middleware setup
app.use(express.json());  // To parse JSON bodies

const PORT = process.env.PORT || 5000;






// Middleware
// app.use(cors()); // Removed duplicate CORS middleware
app.use(express.json());


// Routes
app.use('/api/appointment', router);
app.use('/api/callback', callRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
