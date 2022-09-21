


// console.log(process.cwd())

//Output a prompt
process.stdout.write("prompt > ")

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim() //remove the newline

  if (cmd === "pwd") {
    console.log(process.cwd())
  }

  //   process.stdout.write("You typed: " + cmd)
  process.stdout.write("\nprompt > ")
})

// we want pwd to equal ./
>>>>>>> 837aa94b7a919c4e481b89b22a845cd701f90318
