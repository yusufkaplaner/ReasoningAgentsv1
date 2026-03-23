import fs from "fs";
import { deduce } from "./modules/deduction.js";
import { induce } from "./modules/induction.js";
import { abduct } from "./modules/abduction.js";
import { metaAnalyze } from "./modules/meta.js";

let memory = JSON.parse(fs.readFileSync("./memory/memory.json", "utf-8"));
const topic = "makine insan arasında fark yoktur";

async function runReasoning() {
  console.log("\n Akıl yürütme başlıyor:", topic);

  const d = await deduce(topic, memory);
  const i = await induce(topic, memory);
  const a = await abduct(topic, memory);

  const finalDecision = await metaAnalyze([d, i, a], memory);

  console.log("\n Dedüksiyon:\n", d);
  console.log("\n Endüksiyon:\n", i);
  console.log("\n Abdüksiyon:\n", a);
  console.log("\n Meta Karar:\n", finalDecision);

  memory.push({ topic, d, i, a, finalDecision });
  fs.writeFileSync("./memory/memory.json", JSON.stringify(memory, null, 2));
}

runReasoning();
