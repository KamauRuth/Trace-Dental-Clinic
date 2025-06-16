
const express = require('express');
const mongoose = require('mongoose');
const { Resend } = require('resend');

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

        const resend = new Resend('re_ix7YTLKU_PA2WLgwjrNYTm3V8UfviD4rx');

        resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
        res.status(201).json({ result: 'success', message: 'Appointment created successfully' });


    } catch (error) {
        res.status(500).json({ result: 'error', message: error.message });
        }
});

module.exports = router;