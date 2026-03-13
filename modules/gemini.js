import fetch from "node-fetch";
import { GEMINI_API_KEY } from "../config.js";

export async function chatWithGemini(prompt) {
  // Senin API'nin desteklediği model: gemini-2.5-flash
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      })
    });

    const data = await res.json();

    if (data.error) {
      console.error("GEMINI API HATASI:", data.error.message);
      return "Gemini hata verdi: " + data.error.message;
    }

    if (data.candidates && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    }

    return "Gemini'den cevap dönmedi.";
  } catch (err) {
    console.error("Sistem Hatası:", err);
    return "Sistem hatası.";
  }
}