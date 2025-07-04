const express = require('express');
const chatRouter = express.Router();
require('dotenv').config();


chatRouter.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const mistralResponse = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mistral-tiny',  // you can use 'mistral-medium' or other available models
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message }
        ]
      })
    });

    const data = await mistralResponse.json();
    console.log(data); // For debugging

    const reply = data.choices[0].message.content;

    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to contact Mistral' });
  }
});

module.exports = chatRouter;
