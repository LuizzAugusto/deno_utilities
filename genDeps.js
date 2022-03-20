const DEPS_DIR = "./deps"
const EXT = "ts"

/**
 * 
 * @param {string|undefined} ext 
 */
export async function genDeps({ ext = EXT, depsDir = DEPS_DIR } = {}) {
  await Deno.writeTextFile("deps." + ext, "")

  for await (const dirEntry of Deno.readDir("deps")) {
    const file = "export * from \"" + depsDir + "/" + dirEntry.name + "\"\n"
    await Deno.writeTextFile("deps." + ext, file, { append: true })
  }
}