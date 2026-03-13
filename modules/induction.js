// modules/induction.js
import { chatWithQrok } from "./qrok.js";

export async function induce(topic, memory) {
  const prompt = `
Sen bir istatistik ve endüksiyon uzmanısın.
Konu: ${topic}
Geçmiş gözlemlerden genel kurallar çıkar.
Bellek: ${JSON.stringify(memory)}
`;
  const result = await chatWithQrok(prompt);
  return `Endüksiyon: ${result}`;
}