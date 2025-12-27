const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = 'AIzaSyCZN1lMLmSu2br8yiYGlmXjn1fCODE_2mk';

app.post('/api/generate-paper', async (req, res) => {
  try {
    const { subject, examType, difficulty } = req.body;
    
    const prompt = `Generate a ${difficulty} level ${examType} question paper for ${subject} with 5 questions. 
    Format the response as a JSON object with:
    {
      "title": "string",
      "subject": "string",
      "difficulty": "string",
      "instructions": "string",
      "questions": ["q1", "q2", "q3", "q4", "q5"]
    }`;
    
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{ text: prompt }]
        }]
      }
    );
    
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});