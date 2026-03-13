// modules/abduction.js
import { chatWithGemini } from "./gemini.js";

export async function abduct(topic, memory) {
  const prompt = `
Sen bir olasılık ve tahmin uzmanısın.
Konu: ${topic}
En olası açıklamaları listele.
Bellek: ${JSON.stringify(memory)}
`;
  const result = await chatWithGemini(prompt);
  return `Abdüksiyon: ${result}`;
}