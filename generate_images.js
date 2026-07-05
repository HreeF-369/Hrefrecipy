import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ text: 'A professional food photography shot of crispy golden-fried Spanish churros dusted in cinnamon sugar, arranged on a white plate, with a small ceramic bowl of rich dark melted chocolate ganache for dipping on the side, warm lighting, appetizing, shot from a natural angle.' }]
    });
    
    console.log(JSON.stringify(response, null, 2));
  } catch (err) {
    console.error('Error:', err.message);
  }
}

generate();
