import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const envFile = await load();

console.log(envFile["TEST"]);
const env = Deno.env.toObject();

//console.log(env);
console.log(Deno.env.has("USER"));
console.log(Deno.env.get("USER"));
