const [ script, ...args ] = Deno.args

await Deno.run(
  { cmd: 
    [ "deno"
    , "run"
    , "--allow-run"
    , "./bin/" + script
    , ...args
    ]
  }
).status()