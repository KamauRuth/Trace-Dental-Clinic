const express = require('express');
const mongoose = require('mongoose');
const Callback = require('../models/callsModel.js');

const callRouter = express.Router();

callRouter.post('/', async (req, res) => {
  const { name, contact } = req.body;

  if (!name || !contact) {
    return res.status(400).json({ result: 'error', message: 'Missing fields' });
  }

  try {
    const newCallback = new Callback({ name, contact });
    await newCallback.save();

    console.log('Callback request received:', newCallback);
    

    res.status(200).json({ result: 'success' });
  } catch (error) {
    res.status(500).json({ result: 'error', message: error.message });
  }
});

module.exports = callRouter;
