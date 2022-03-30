const [ script, ...args ] = Deno.args

await Deno.run(
  {
    cmd:
      [ "./bin/" + script
      , ...args
      ]
  }
).status()