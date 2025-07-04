const express = require('express');
const chatRouter = express.Router();
require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini client with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

chatRouter.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    const botReply = result.response.text();
    res.json({ reply: botReply });

  } catch (err) {
    console.error("Gemini error:", err);
    res.json({ reply: "Sorry! The chatbot could not reply right now." });
  }
});

module.exports = chatRouter;
