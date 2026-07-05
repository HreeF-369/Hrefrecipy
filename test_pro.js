import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function main() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image',
      contents: [{ text: 'A small blue circle' }]
    });
    console.log("Success");
  } catch (err) {
    console.error(err.message);
  }
}
main();
