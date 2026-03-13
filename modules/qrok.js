import fetch from "node-fetch";
import { QROK_API_KEY } from "../config.js";

export async function chatWithQrok(prompt){

const res = await fetch("https://api.groq.com/openai/v1/chat/completions",{
method:"POST",
headers:{
"Authorization":`Bearer ${QROK_API_KEY}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"llama3-70b-8192",
messages:[
{
role:"user",
content:prompt
}
]
})
})

const data = await res.json()

return data.choices?.[0]?.message?.content || "cevap yok"

}