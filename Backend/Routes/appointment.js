
const express = require('express');
const mongoose = require('mongoose');

const Appointment = require('../models/appointmentModel.js');


const router = express.Router();

// Routes
router.post('/', async (req, res) => {
    const { name, email, contact, date } = req.body;
    console.log(req.body);
    
    try {
        const newAppointment = new Appointment({
            name,
            email,
            contact,
            date
        });
        
        await newAppointment.save();
        res.status(201).json({ result: 'success', message: 'Appointment created successfully' });
    } catch (error) {
        res.status(500).json({ result: 'error', message: error.message });
        }
});

module.exports = router;