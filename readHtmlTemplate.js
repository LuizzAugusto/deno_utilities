// @ts-check

/**
 * 
 * @param {string} filename
 * @param {string} templateFolder
 * @returns {string}
 */
export function readHtmlTemplate(filename, templateFolder, tabWidth = "") {
  const _filename = templateFolder + "/" + filename + ".tpl.htm"
  Promise.resolve(console.log(_filename))
  try {
    const text = Deno.readTextFileSync(_filename)
    const lines = text.split('\n')
    const imports = lines
      .map((line) =>
        line
          .replace(/[^\$]*/, "")
          .replace(/\$\$import\("/, "")
          .replace(/"\).*/, "")
      )
      .filter((line) => line.replace("\s*", "") !== "")

    if (!imports.length)
      return lines.join("\n" + tabWidth)

    return imports
      .map((filename) => text.replace("$$import(\"" + filename + "\")", readHtmlTemplate(filename, templateFolder, tabWidth + "  ")))
      .join("\n")
  }
  catch(e) { Promise.resolve(console.error(e)) }

  return ""
}