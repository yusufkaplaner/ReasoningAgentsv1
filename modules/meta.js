// modules/meta.js
import { chatWithQrok } from "./qrok.js";

export async function metaAnalyze(results, memory) {
  const prompt = `
Sen bir meta-analiz uzmanısın.
Dedüksiyon, endüksiyon ve abdüksiyon sonuçlarını değerlendir.
En güvenilir ve mantıklı sonucu çıkar.
Bellek: ${JSON.stringify(memory)}

Sonuçlar:
${results.join("\n\n")}
`;
  const result = await chatWithQrok(prompt);
  return `Meta Karar: ${result}`;
}