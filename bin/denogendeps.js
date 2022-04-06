import { genDeps } from "../genDeps.js"

genDeps()
const p = Deno.run({ cmd: [ "deno", "cache", "deps.ts" ] })
p.status()