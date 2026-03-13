// modules/deduction.js
import { chatWithGemini } from "./gemini.js";

export async function deduce(topic, memory) {
  const prompt = `
Sen bir mantık ve dedüksiyon uzmanısın.
Konu: ${topic}
Mevcut bilgilerden kesin sonuçlar çıkar.
Bellek: ${JSON.stringify(memory)}
`;
  const result = await chatWithGemini(prompt);
  return `Dedüksiyon: ${result}`;
}