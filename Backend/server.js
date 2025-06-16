const express = require('express');
const cors = require('cors');
const path = require('path');

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
app.use(express.json());
  // To parse JSON bodies

const PORT = process.env.PORT || 5000;



// Routes
app.use('/api/appointment', router);
app.use('/api/callback', callRouter);

app.use(express.urlencoded({ extended: true }));

// Serve static files from the Frontend folder
app.use(express.static(path.join(__dirname, "../Frontend")));

// Serve index.html for "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});
t
// Serve appointment.html for "/appointment"
app.get("/appointment", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/appointment.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
